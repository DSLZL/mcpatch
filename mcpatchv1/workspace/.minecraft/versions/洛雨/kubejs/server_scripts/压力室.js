onEvent('recipes', event => {
event.custom({//末地空气
    type: 'pneumaticcraft:pressure_chamber',
    inputs: [
        {item: 'minecraft:glass_bottle'},
        {item: 'minecraft:end_stone'}
    ],
    pressure: 2.5,
    results: [
        {item: 'botania:ender_air_bottle'}]
});
  event.custom({//黑铁锭
    type: 'pneumaticcraft:pressure_chamber',
    inputs: [
        {item: 'pneumaticcraft:ingot_iron_compressed'},
        {item: 'ae2:black_paint_ball'}
    ],
    pressure: 2.5,
    results: [
        {item: 'extendedcrafting:black_iron_ingot'}]
});
event.custom({//龙息
    type: 'pneumaticcraft:pressure_chamber',
    inputs: [
        {item: 'botania:ender_air_bottle'},
        {item: 'draconicevolution:draconium_dust'}
    ],
    pressure: 2.5,
    results: [
        {item: 'minecraft:dragon_breath'}]
});
event.custom({//小块干橡胶
    type: 'pneumaticcraft:pressure_chamber',
    inputs: [
        {item: 'industrialforegoing:pink_slime_ingot'},
        {item: 'pneumaticcraft:plastic'}
    ],
    pressure: 2.5,
    results: [
        {item: 'industrialforegoing:tinydryrubber'}]
});
});