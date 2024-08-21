onEvent('recipes', event => {
event.custom({//空白样板
    type: 'bloodmagic:altar',
    input: {
      item: 'chemlib:titanium_nugget'
    },
    output: {
      item: 'bloodmagic:blankslate'
    },
    upgradeLevel: 0,
    altarSyphon: 1000,
    consumptionRate: 5,
    drainRate: 5
});
});