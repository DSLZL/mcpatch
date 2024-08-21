onEvent('recipes', event => {
    event.custom({
        type: 'pneumaticcraft:thermo_plant',
        item_input: {item: 'createdieselgenerators:wood_chip'},
        fluid_input: {type: 'pneumaticcraft:fluid',tag: 'forge:lpg',amount: 1},
        fluid_output: {fluid: 'pneumaticcraft:plastic',amount: 2},
        temperature: {min_temp: 573},
        exothermic: false
    });
});