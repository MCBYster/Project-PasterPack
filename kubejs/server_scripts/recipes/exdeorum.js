ServerEvents.recipes(event => {
    event.remove({ id: 'exdeorum:cobblestone' })

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
    ).id('kubejs:cobblestone')

    event.remove({ id: 'exdeorum:diorite'})

    event.shaped(
        'minecraft:diorite',
        [
            'ppp',
            'ppp',
            'ppp'
        ],
        {
            p: 'exdeorum:diorite_pebble'
        }
    ).id('kubejs:diorite')

    event.remove({ id: 'exdeorum:granite'})

    event.shaped(
        'minecraft:granite',
        [
            'ppp',
            'ppp',
            'ppp'
        ],
        {
            p: 'exdeorum:granite_pebble'
        }
    ).id('kubejs:granite')

    event.remove({ id: 'exdeorum:andesite'})

    event.shaped(
        'minecraft:andesite',
        [
            'ppp',
            'ppp',
            'ppp',
        ],
        {
            p: 'exdeorum:andesite_pebble'
        }
    ).id('kubejs:andesite')

    event.remove({ id: 'exdeorum:tuff'})

    event.shaped(
        'minecraft:tuff',
        [
            'ppp',
            'ppp',
            'ppp'
        ],
        {
            p: 'exdeorum:tuff_pebble'
        }
    ).id('kubejs:tuff')

    event.remove({ id: 'exdeorum:calcite'})

    event.shaped(
        'minecraft:calcite',
        [
            'ppp',
            'ppp',
            'ppp'
        ],
        {
            p: 'exdeorum:calcite_pebble'
        }
    ).id('kubejs:calcite')

    event.remove({ id: 'exdeorum:blackstone'})

    event.shaped(
        'minecraft:blackstone',
        [
            'ppp',
            'ppp',
            'ppp'
        ],
        {
            p: 'exdeorum:blackstone_pebble'
        }
    ).id('kubejs:blackstone')

    event.remove({ id: 'exdeorum:basalt'})

    event.shaped(
        'minecraft:basalt',
        [
            'ppp',
            'ppp',
            'ppp'
        ],
        {
            p: 'exdeorum:basalt_pebble'
        }
    ).id('kubejs:basalt')

    event.remove({ id: 'exdeorum:cobbled_deepslate'})

    event.shaped(
        'minecraft:cobbled_deepslate',
        [
            'ppp',
            'ppp',
            'ppp'
        ],
        {
            p: 'exdeorum:deepslate_pebble'
        }
    ).id('kubejs:cobbled_deepslate')
})
