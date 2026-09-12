// 潜行右键草方块：从 kubejs:gameplay/grass_pebbles 战利品表中给予一颗石子。
BlockEvents.rightClicked('minecraft:grass_block', event => {
  // event.hand 是 Java 枚举；使用非严格比较以匹配 KubeJS 暴露的 main_hand 值。
  if (event.hand != 'main_hand') return
  if (!event.player.isCrouching()) return

  event.cancel()
  event.server.runCommandSilent(
    `loot give ${event.player.username} loot kubejs:gameplay/grass_pebbles`
  )
})
