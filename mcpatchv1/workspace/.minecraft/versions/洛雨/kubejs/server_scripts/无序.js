onEvent('recipes', event => {
    event.shapeless('ewcraft:wendingshuijin',//稳定水晶
        [   Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:quartz"}'),
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:certus_quartz"}'),
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:glowstone"}'),
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:diamond"}'),
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lapis_lazuli"}'),
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}'),
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coal"}'),
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:emerald"}'),
            'ewcraft:buwendingshuijin']);
    event.shapeless('ewcraft:buwendingshuijin',//不稳定水晶
        [   Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:amethyst"}'),
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:ender_slime_crystal"}'),
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:sky_slime_crystal"}'),
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:ichor_slime_crystal"}'),
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:earth_slime_crystal"}'),
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:apatite"}'),
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:cinnabar"}'),
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:niter"}'),
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:sulfur"}')]);
    event.shapeless('ewcraft:caihongsuipian',//彩虹碎片
        [   Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lithium"}'), 
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:thorium"}'), 
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:molybdenum"}'), 
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:vanadium"}'), 
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:titanium"}'), 
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:beryllium"}'), 
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:mangesium"}'), 
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:steel"}'),
            'ewcraft:caihongcheng']);
    event.shapeless('ewcraft:caihongcheng',//彩虹尘
        [   Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:tungsten"}'), 
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:cobalt"}'), 
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:manganese"}'), 
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:platinum"}'), 
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:aluminum"}'), 
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:nickel"}'), 
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:chroumium"}'), 
            'ewcraft:bingfengcaishi']);
    event.shapeless('ewcraft:bingfengcaishi',//缤纷彩石
        [   Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:osmium"}'),
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:copper"}'),
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lead"}'), 
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:tin"}'),
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:iron"}'),
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:gold"}'), 
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:silver"}'),
            Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:zinc"}'),
            'ewcraft:mukuang']);
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