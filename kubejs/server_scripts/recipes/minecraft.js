ServerEvents.recipes(event => {

    event.remove({ id: 'minecraft:wooden_pickaxe'})
    event.remove({ id: 'minecraft:stone_pickaxe'})
    event.remove({ id: 'minecraft:diorite'})
    event.remove({ id: 'minecraft:granite'})

    event.remove({ id: 'minecraft:crafting_table'})
    event.shaped(
        'minecraft:crafting_table',
        [
            'pp ',
            'oo ',
            '   '
        ],
        {
            p: '#exdeorum:pebbles',
            o: '#minecraft:logs'
        }
    ).id('kubejs:crafting_table')

    event.remove({ id: 'minecraft:furnace'})
    event.shaped(
        'minecraft:furnace',
        [
            'ppp',
            'pop',
            'ccc'
        ],
        {
            p: 'exdeorum:porcelain_clay_ball',
            o: 'minecraft:flint',
            c: '#c:stones'
        }
    ).id('kubejs:furnace')

    event.remove({ id:'minecraft:oak_planks'})
    event.shapeless(
        '2x minecraft:oak_planks',
        [
            'minecraft:oak_log'
        ]
    ).id('kubejs:oak_planks')

    event.remove({ id:'minecraft:stick'})
    event.shaped(
        '2x minecraft:stick',
        [
            ' p ',
            ' p ',
            '   '
        ],
        {
            p: '#minecraft:planks'
        }
    ).id('kubejs:stick')

    event.shapeless(
        'minecraft:flint',
        [
            '3x minecraft:gravel'
        ]
    ).id('kubejs:flint')
})
