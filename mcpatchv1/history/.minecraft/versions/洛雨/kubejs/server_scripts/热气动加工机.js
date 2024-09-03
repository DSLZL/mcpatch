onEvent('recipes', event => {
    event.custom({//塑料*2
        type: 'pneumaticcraft:thermo_plant',
        item_input: {item: 'createdieselgenerators:wood_chip'},
        fluid_input: {type: 'pneumaticcraft:fluid',tag: 'forge:lpg',amount: 1},
        fluid_output: {fluid: 'pneumaticcraft:plastic',amount: 2},
        temperature: {min_temp: 573},
        exothermic: false
    });
    event.custom({//塑料*200
        type: 'pneumaticcraft:thermo_plant',
        item_input: {item: 'minecraft:paper'},
        fluid_input: {type: 'pneumaticcraft:fluid',tag: 'forge:lpg',amount: 100},
        fluid_output: {fluid: 'pneumaticcraft:plastic',amount: 200},
        temperature: {min_temp: 573},
        exothermic: false
    });
    event.custom({//塑料*2000
        type: 'pneumaticcraft:thermo_plant',
        item_input: {item: 'minecraft:dried_kelp_block'},
        fluid_input: {type: 'pneumaticcraft:fluid',tag: 'forge:lpg',amount: 1000},
        fluid_output: {fluid: 'pneumaticcraft:plastic',amount: 2000},
        temperature: {min_temp: 573},
        exothermic: false
    });
    event.custom({//塑料*16000
        type: 'pneumaticcraft:thermo_plant',
        item_input: {item: 'minecraft:sea_pickle'},
        fluid_input: {type: 'pneumaticcraft:fluid',tag: 'forge:lpg',amount: 8000},
        fluid_output: {fluid: 'pneumaticcraft:plastic',amount: 16000},
        temperature: {min_temp: 573},
        exothermic: false
    });
});