BlockEvents.rightClicked(event => {
  const blockId = `${event.block.id}`
  const hand = `${event.hand}`
  const crouching = event.player.isCrouching()

  if (blockId !== 'minecraft:grass_block') return
  if (hand !== 'MAIN_HAND') return
  if (!crouching) return

  const dropX = event.block.centerX
  const dropY = event.block.y + 1.2
  const dropZ = event.block.centerZ

  event.server.runCommandSilent(
    `loot spawn ${dropX} ${dropY} ${dropZ} loot kubejs:gameplay/grass_pebbles`
  )
  event.cancel()
})
