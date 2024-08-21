onEvent('recipes', event => {
    event.shapeless('rainbowcompound:strange_colored_ingot',//奇怪的彩色锭
        [   'rainbowcompound:blazeite_ingot', 'rainbowcompound:chorusite_ingot', 'rainbowcompound:obsidianite_ingot', 
            'rainbowcompound:enderite_ingot', 'rainbowcompound:frostite_ingot', 'rainbowcompound:slimeite_ingot', 
            'rainbowcompound:netherwartite_ingot', 'rainbowcompound:glowstoneite_ingot', 'rainbowcompound:warpedite_ingot']);
    event.shapeless('2x ae2:tiny_tnt',//迷你tnt
        ['minecraft:tnt']);
    event.shapeless('createsifter:string_mesh',//线筛网
        ['exnihilosequentia:flint_mesh']);
    event.shapeless('createsifter:andesite_mesh',//安山筛网
        ['exnihilosequentia:iron_mesh']);
    event.shapeless('createsifter:brass_mesh',//黄铜筛网
        ['exnihilosequentia:diamond_mesh']);
    event.shapeless('createsifter:zinc_mesh',//锌筛网
        ['exnihilosequentia:emerald_mesh']);
    event.shapeless('createsifter:custom_mesh',//自定义筛网
        ['exnihilosequentia:netherite_mesh']);
    event.shapeless('3x minecraft:honeycomb',//蜜脾
        ['minecraft:honey_bottle']);
});