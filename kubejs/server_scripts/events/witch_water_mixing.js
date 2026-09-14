const $NeighborNotifyEvent = Java.loadClass(
  'net.neoforged.neoforge.event.level.BlockEvent$NeighborNotifyEvent'
)
const $Direction = Java.loadClass('net.minecraft.core.Direction')
const $Blocks = Java.loadClass('net.minecraft.world.level.block.Blocks')
const $WitchWaterBlocks = Java.loadClass('thedarkcolour.exdeorum.registry.EBlocks')
const $MixingBlockPos = Java.loadClass('net.minecraft.core.BlockPos')
const $MixingLevelTick = Java.loadClass('net.neoforged.neoforge.event.tick.LevelTickEvent$Post')

// 源头与流动状态共用同一个液体方块，直接用方块判定。 
const MIXING_WITCH_BLOCK = $WitchWaterBlocks.WITCH_WATER.get()

const CONTACT_DIRECTIONS = [
  $Direction.DOWN,
  $Direction.UP,
  $Direction.NORTH,
  $Direction.SOUTH,
  $Direction.WEST,
  $Direction.EAST
]

const WITCH_WATER_PRODUCTS = [
  $Blocks.DIRT,
  $Blocks.COARSE_DIRT,
  $Blocks.ROOTED_DIRT,
  $Blocks.PODZOL
]

function isWitchWater(level, pos) {
  return level.hasChunkAt(pos) && String(level.getBlockState(pos).getId()) === 'exdeorum:witch_water'
}

function isWater(level, pos) {
  return level.hasChunkAt(pos) && String(level.getBlockState(pos).getId()) === 'minecraft:water'
}

function findAdjacent(level, pos, predicate) {
  // 依次检查六个相邻方向。
  for (var i = 0; i < CONTACT_DIRECTIONS.length; i++) {
    var adjacentPos = pos.relative(CONTACT_DIRECTIONS[i])

    if (predicate(level, adjacentPos)) {
      return adjacentPos
    }
  }

  return null
}

let witchWaterMixing = false
let witchWaterMixingConfirmed = false

function guardWitchWaterEvent(name, handler) {
  let failed = false
  return event => {
    if (failed) return
    try {
      handler(event)
    } catch (error) {
      failed = true
      console.error('[PasterPack/WitchWater] ' + name + ' disabled until scripts reload: ' + error)
    }
  }
}

function mixWitchWaterAt(level, pos) {
  if (witchWaterMixing || !isWitchWater(level, pos)) return
  if (findAdjacent(level, pos, isWater) === null) return
  const product = WITCH_WATER_PRODUCTS[level.getRandom().nextInt(WITCH_WATER_PRODUCTS.length)]
  witchWaterMixing = true
  try {
    if (level.setBlock(pos, product.defaultBlockState(), 3) && !witchWaterMixingConfirmed) {
      witchWaterMixingConfirmed = true
      console.info('[PasterPack/WitchWater] First successful conversion at ' + pos)
    }
  } finally {
    witchWaterMixing = false
  }
}

NativeEvents.onEvent($NeighborNotifyEvent, guardWitchWaterEvent('neighbor check', event => {
  const level = event.getLevel()
  if (level.isClientSide() || witchWaterMixing) return
  const pos = event.getPos()
  mixWitchWaterAt(level, pos)
  for (var i = 0; i < CONTACT_DIRECTIONS.length; i++) {
    mixWitchWaterAt(level, pos.relative(CONTACT_DIRECTIONS[i]))
  }
}))

// 静止流体未必继续发出邻居通知。在世界 tick 结束后补查，
// 同时避免本轮流体更新将刚生成的方块覆盖。
// 每 10 tick 寻找含巫水的区块段，每 tick 最多扫描 2 个 16³ 区块段。
// 无巫水的区块段用调色板快速跳过；只访问已加载区块，不强制加载。
const witchWaterScanStates = Object.create(null)

NativeEvents.onEvent($MixingLevelTick, guardWitchWaterEvent('periodic check', event => {
  const level = event.getLevel()
  if (level.isClientSide()) return
  // KubeJS 的 dimension 是属性（Identifier），不是原版 dimension() 方法。
  const key = String(level.dimension)
  let scan = witchWaterScanStates[key]
  if (!scan) {
    scan = { pending: [], cursor: 0, ticks: 0, nextRefresh: 0 }
    witchWaterScanStates[key] = scan
  }

  const now = ++scan.ticks
  if (scan.cursor >= scan.pending.length && now >= scan.nextRefresh) {
    scan.pending = []
    scan.cursor = 0
    scan.nextRefresh = now + 10
    level.getChunkSource().chunkMap.forEachReadyToSendChunk(chunk => {
      const sections = chunk.getSections()
      const chunkPos = chunk.getPos()
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].maybeHas(state => String(state.getId()) === 'exdeorum:witch_water')) {
          scan.pending.push({ x: chunkPos.x, z: chunkPos.z, section: i })
        }
      }
    })
  }

  for (let budget = 0; budget < 2 && scan.cursor < scan.pending.length; budget++) {
    var entry = scan.pending[scan.cursor++]
    var chunk = level.getChunkSource().getChunkNow(entry.x, entry.z)
    if (chunk === null) continue
    var section = chunk.getSections()[entry.section]
    var baseY = chunk.getSectionYFromSectionIndex(entry.section) * 16
    for (let y = 0; y < 16; y++) {
      for (let z = 0; z < 16; z++) {
        for (let x = 0; x < 16; x++) {
          if (String(section.getBlockState(x, y, z).getId()) === 'exdeorum:witch_water') {
            mixWitchWaterAt(level, new $MixingBlockPos(entry.x * 16 + x, baseY + y, entry.z * 16 + z))
          }
        }
      }
    }
  }
}))

// KubeJS 26.1 的 BlockState.getId() 返回方块注册 ID 字符串。
// 启动时验证此接口，并标记当前修正版，方便确认替换生效。
if (String($Blocks.AIR.defaultBlockState().getId()) !== 'minecraft:air' ||
    String($Blocks.WATER.defaultBlockState().getId()) !== 'minecraft:water' ||
    String(MIXING_WITCH_BLOCK.defaultBlockState().getId()) !== 'exdeorum:witch_water') {
  throw new Error('[PasterPack/WitchWater] Block ID self-check failed')
}
console.info('[PasterPack/WitchWater] id-check-v2 loaded; block ID self-check passed')
