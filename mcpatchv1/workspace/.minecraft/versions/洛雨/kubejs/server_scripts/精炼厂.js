onEvent('recipes', event => {
    event.custom({
        type: 'pneumaticcraft:refinery',
        input: {type: 'pneumaticcraft:fluid',tag: 'forge:crude_oil',amount: 1000},
        temperature: {min_temp: 573},
        results: [
          {fluid: 'pneumaticcraft:diesel',amount: 250},
          {fluid: 'pneumaticcraft:kerosene',amount: 350},
          {fluid: 'pneumaticcraft:gasoline',amount: 350},
          {fluid: 'pneumaticcraft:lpg',amount: 50}
        ]});
});