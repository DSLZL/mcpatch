onEvent('recipes', event => {
    event.custom({//氨
        type: "vintageimprovements:centrifugation",
        ingredients: [
            {item: '10x botania:ender_air_bottle'}],
        results: [
                {fluid: "chemlib:nitrogen_fluid",amount: 100},
                {item: '10x minecraft:glass_bottle', chance: 0.9}],
        processingTime: 1000
    });
});