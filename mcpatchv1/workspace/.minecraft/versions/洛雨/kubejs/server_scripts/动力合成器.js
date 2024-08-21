onEvent('recipes', event => {
    event.recipes.create.mechanical_crafting('minecraft:tnt', [
        'ABA',
        'BAB',
        'ABA'
        ], {
        A: 'minecraft:gunpowder',
        B: 'minecraft:red_sand'
      });
        event.recipes.create.mechanical_crafting('createdieselgenerators:pumpjack_crank', [
        'ABA',
        ' C ',
        'ABA',
        'DCD',
        'ADA'
        ], {
        A: 'create:andesite_alloy',
        B: 'create:shaft',
        C: '#forge:plates/invar',
        D: 'chemlib:molybdenum_nugget'
      });
});