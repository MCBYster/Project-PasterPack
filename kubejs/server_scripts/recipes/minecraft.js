ServerEvents.recipes(event => {

    event.remove({ id: 'minecraft:wooden_pickaxe'})
    event.remove({ id: 'minecraft:stone_pickaxe'})

    event.remove({ id: 'minecraft:furnace'})
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
            p: 'minecraft:flint',
            o: '#minecraft:logs'
        }
    ).id('kubejs:crafting_table')
})
