// 潜行右键草方块：从 kubejs:gameplay/grass_pebbles 战利品表中给予一颗石子。
BlockEvents.rightClicked(event => {
  if (event.hand !== 'MAIN_HAND') return
  if (!event.player.crouching) return
  if (event.block.id !== 'minecraft:grass_block') return

  event.cancel()
  event.server.runCommandSilent(
    `loot give ${event.player.username} loot kubejs:gameplay/grass_pebbles`
  )
})
