onEvent('recipes', event => {
    event.custom({//龙心
        type:'mekanism:nucleosynthesizing',
        itemInput:{ingredient:{item:'draconicevolution:draconium_block'}},
        gasInput:{amount:500,gas:'mekanism:antimatter'},
        output:{item:'draconicevolution:dragon_heart'},duration:1250
    });
});