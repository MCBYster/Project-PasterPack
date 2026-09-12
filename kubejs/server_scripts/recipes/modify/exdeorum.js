ServerEvents.recipes(event => {
    // Ex Deorum 原配方：4 个石子合成 1 个圆石。
    event.remove({ id: 'exdeorum:cobblestone' })

    // 修改为填满 3x3 工作台：9 个石子合成 1 个圆石。
    event.shaped(
        'minecraft:cobblestone',
        [
            'PPP',
            'PPP',
            'PPP'
        ],
        {
            P: 'exdeorum:stone_pebble'
        }
    ).id('kubejs:cobblestone_from_nine_stone_pebbles')
})
