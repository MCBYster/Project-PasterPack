ServerEvents.recipes(event => {
    event.remove({ id:'extendedcrafting:handheld_table'})

    event.shaped(
        'extendedcrafting:handheld_table',
        [
            ' pp',
            ' pp',
            'o  '
        ],
        {
            p: 'avaritia:double_compressed_crafting_table',
            o: '#c:rods'
        }
    ).id('kubejs:handheld_table')
})