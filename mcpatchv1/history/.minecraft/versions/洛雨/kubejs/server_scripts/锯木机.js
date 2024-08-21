onEvent('recipes', event => {
    event.custom({
        type:'mekanism:sawing',
        input:{ingredient:{item:'mekanism:hdpe_sheet'}},
        mainOutput:{item:'mekanism:hdpe_rod',count:4}
        });
});