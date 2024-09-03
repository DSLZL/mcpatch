function addShapedRecipe(event, result, pattern, ingredients) {    event.shaped(result, pattern, ingredients);}// 定义一个用于添加3*3合成配方的函数

onEvent('recipes', event => {
const shapedRecipes = [
    {result: 'ewcraft:caihongfangkuai', 
        pattern: ['AAA', 
                  'ABA', 
                  'AAA'], 
        ingredients: {
                A: 'botania:bifrost_perm',
                B: 'ewcraft:caihongshi'
        }},
    {result: 'ewcraft:wuxiashuijin', 
        pattern: ['AAA', 
                  'ABA', 
                  'AAA'], 
        ingredients: {
                A: 'botania:bifrost_perm',
                B: 'ewcraft:xukongshuijin'
        }},
    {result: 'solarpanels:light_absorbing_solar_element', 
        pattern: ['AAA', 
                  'ABA', 
                  'AAA'], 
        ingredients: {
                A: 'mekaevolution:infinite_control_circuit',
                B: 'solarpanels:singular_solar_element'
        }},
    {result: 'solarpanels:singular_solar_element', 
        pattern: ['ACA', 
                  'CBC', 
                  'ACA'], 
        ingredients: {
                A: 'chemlib:titanium_ingot',
                B: 'solarpanels:spectral_solar_element',
                C: 'avaritia:neutronium_ingot'
        }},
    {result: 'solarpanels:spectral_solar_element', 
        pattern: ['ACA', 
                  'CBC', 
                  'ACA'], 
        ingredients: {
                A: 'industrialforegoing:plastic',
                B: 'solarpanels:quantum_solar_element',
                C: 'tetra:pristine_emerald'
        }},
    {result: 'solarpanels:quantum_solar_element', 
        pattern: ['ACA', 
                  'DBD', 
                  'ACA'], 
        ingredients: {
                A: 'create_confectionery:bar_of_ruby_chocolate',
                B: 'solarpanels:improved_hybrid_solar_element',
                C: 'toolbooster:hammer_toolbooster',
                D: 'toolbooster:legend_toolbooster'
        }},
    {result: 'solarpanels:improved_hybrid_solar_element', 
        pattern: ['ACA', 
                  'DBD', 
                  'ACA'], 
        ingredients: {
                A: 'tetra:pristine_lapis',
                B: 'solarpanels:hybrid_solar_element',
                C: 'minecraft:netherite_scrap',
                D: 'ewcraft:fujiyangguanghuahewu'
        }},
    {result: 'solarpanels:hybrid_solar_element', 
        pattern: ['AAA', 
                  'ABA', 
                  'AAA'], 
        ingredients: {
                A: 'solarpanels:carbone_solar_element',
                B: 'pneumaticcraft:printed_circuit_board'
        }},
    {result: 'solarpanels:carbone_solar_element', 
        pattern: ['ABA', 
                  'CDC', 
                  'AEA'], 
        ingredients: {
                A: 'pneumaticcraft:plastic',
                B: 'ewcraft:xiaokuaiyangguanghuahewu',
                C: 'chemlib:titanium_nugget',
                D: 'mekanismgenerators:solar_panel',
                E: 'tetra:pristine_diamond'
        }},
    {result: 'solarpanels:hybrid_solar_panel', 
        pattern: ['AAA', 
                  'ABA', 
                  'AAA'], 
        ingredients: {
                A: 'mekanismgenerators:solar_generator',
                B: 'solarpanels:hybrid_solar_element'
        }},
    {result: 'solarpanels:advanced_solar_panel', 
        pattern: ['AAA', 
                  'ABA', 
                  'AAA'], 
        ingredients: {
                A: 'solarpanels:hybrid_solar_panel',
                B: 'solarpanels:carbone_solar_element'
        }},
    {result: 'solarpanels:ultimate_hybrid_solar_panel', 
        pattern: ['AAA', 
                  'ABA', 
                  'AAA'], 
        ingredients: {
                A: 'solarpanels:advanced_solar_panel',
                B: 'solarpanels:improved_hybrid_solar_element'
        }},
    {result: 'solarpanels:quantum_solar_panel', 
        pattern: ['AAA', 
                  'ABA', 
                  'AAA'], 
        ingredients: {
                A: 'solarpanels:ultimate_hybrid_solar_panel',
                B: 'solarpanels:quantum_solar_element'
        }},
    {result: 'solarpanels:spectral_solar_panel', 
        pattern: ['AAA', 
                  'ABA', 
                  'AAA'], 
        ingredients: {
                A: 'solarpanels:quantum_solar_panel',
                B: 'solarpanels:spectral_solar_element'
        }},
    {result: 'solarpanels:singular_solar_panel', 
        pattern: ['AAA', 
                  'ABA', 
                  'AAA'], 
        ingredients: {
                A: 'solarpanels:spectral_solar_panel',
                B: 'solarpanels:singular_solar_element'
        }},
    {result: 'solarpanels:light_absorbing_solar_panel', 
        pattern: ['AAA', 
                  'ABA', 
                  'AAA'], 
        ingredients: {
                A: 'solarpanels:singular_solar_panel',
                B: 'solarpanels:light_absorbing_solar_element'
        }},
    {result: 'solarpanels:photonic_solar_panel', 
        pattern: ['AAA', 
                  'ABA', 
                  'AAA'], 
        ingredients: {
                A: 'solarpanels:light_absorbing_solar_panel',
                B: 'solarpanels:photonic_solar_element'
        }},
    {result: 'solarpanels:creative_solar_panel', 
        pattern: ['AAA', 
                  'ABA', 
                  'AAA'], 
        ingredients: {
                A: 'solarpanels:photonic_solar_panel',
                B: 'solarpanels:creative_solar_element'
        }},
    {result: Item.of('tconstruct:scorched_anvil', '{texture:"immersiveengineering:storage_steel"}'), //工匠砧
        pattern: ['AAA', 
                  ' B ', 
                  'BBB'], 
        ingredients: {
                A: '#forge:storage_blocks/steel',
                B: 'minecraft:polished_andesite'
        }},
    {result: 'minecraft:clock', //钟
        pattern: [' A ', 
                  'ABA', 
                  ' A '], 
        ingredients: {
                A: '#forge:plates/gold',
                B: 'vintageimprovements:redstone_module'
        }},
    {result: 'mekanismgenerators:wind_generator', //风力发电机
        pattern: [' A ', 
                  'ABA', 
                  'CDC'], 
        ingredients: {
                A: '#forge:ingots/osmium',
                B:'mekanism:alloy_infused',
                C:'mekanism:basic_control_circuit',
                D:'mekanism:hdpe_rod'
        }},
    {result: 'mekanismgenerators:fission_reactor_casing', //裂变反应堆机器外壳
        pattern: ['AAA', 
                  'ABA', 
                  'AAA'], 
        ingredients: {
                A: '#forge:ingots/lead',
                B: 'chemlib:titanium_metal_block'
        }},
    {result: 'thermal:machine_frame', //热力机器框架
        pattern: ['AAA', 
                  'ABA', 
                  'AAA'], 
        ingredients: {
                A: 'chemlib:manganese_ingot',
                B: 'industrialforegoing:machine_frame_advanced'
        }},
    {result: 'mekanismgenerators:control_rod_assembly', //控制棒组件
        pattern: ['BCB', 
                  'ABA', 
                  'ABA'], 
        ingredients: {
                A: 'chemlib:titanium_ingot',
                B: '#forge:storage_blocks/lead',
                C: 'mekanism:ultimate_control_circuit'
        }},
    {result: 'mekanismgenerators:fusion_reactor_frame', //聚变堆框架
        pattern: ['ABA', 
                  'BCB', 
                  'ABA'], 
        ingredients: {
                A: 'chemlib:titanium_metal_block',
                B: 'chemlib:molybdenum_metal_block',
                C: 'mekanism:pellet_antimatter'
        }},
    {result: 'mekanismgenerators:turbine_casing', //涡轮外壳
        pattern: ['ABA', 
                  'BCB', 
                  'ABA'], 
        ingredients: {
                B: 'chemlib:titanium_metal_block',
                A: 'chemlib:molybdenum_metal_block',
                C: 'mekanism:pellet_polonium'
        }},
    {result: 'draconicevolution:draconium_core', //龙核心
        pattern: ['ABA', 
                  'BCB', 
                  'ABA'], 
        ingredients: {
                A: '#forge:ingots/chromium',
                B: '#forge:ingots/draconium',
                C: 'draconicevolution:dragon_heart'
        }},
    {result: 'industrialforegoing:machine_frame_pity', //低级机器框架
        pattern: ['ABA', 
                  'BCB', 
                  'ABA'], 
        ingredients: {
                A: '#minecraft:logs', 
                B: '#forge:ingots/beryllium', 
                C: 'immersiveengineering:light_engineering'
        }},
    {result: 'industrialforegoing:dissolution_chamber', //化学溶解室
        pattern: ['ADA', 
                  'BEB', 
                  'CFC'], 
        ingredients: {
                A: 'pneumaticcraft:plastic', 
                B: 'minecraft:bucket', 
                C: '#forge:ingots/gold',
                D: 'minecraft:ender_chest',
                E: 'industrialforegoing:machine_frame_pity',
                F: '#forge:gears/diamond'
        }},
    {result: 'industrialforegoing:mob_slaughter_factory', //屠宰场
        pattern: ['ADA', 
                  'BEB', 
                  'CFC'], 
        ingredients: {
                A: 'pneumaticcraft:plastic', 
                B: 'minecraft:iron_sword', 
                C: 'minecraft:iron_axe',
                D: '#forge:gears/gold',
                E: 'industrialforegoing:machine_frame_pity',
                F: 'minecraft:comparator'
        }},
    {result: 'immersiveengineering:cokebrick', //焦炉砖
        pattern: ['ABA', 
                  'BCB', 
                  'ABA'], 
        ingredients: {
                A: 'minecraft:bricks', 
                B: 'minecraft:nether_bricks', 
                C: 'tconstruct:grout'
        }},
    {result: 'immersiveengineering:blastbrick_reinforced', //强化高炉砖
        pattern: ['ABA', 
                  'BAB', 
                  'ABA'], 
        ingredients: {
                A: 'immersiveengineering:blastbrick', 
                B: 'immersiveengineering:sheetmetal_steel', 
        }},
    {result: 'immersiveengineering:component_iron', //铁机械零件
        pattern: ['A A', 
                  ' B ', 
                  'A A'], 
        ingredients: {
                A: '#forge:plates/iron', 
                B: 'pneumaticcraft:plastic', 
        }},
    {result: 'immersiveengineering:component_steel', //钢机械零件
        pattern: ['A A', 
                  ' B ', 
                  'A A'], 
        ingredients: {
                A: '#forge:plates/steel', 
                B: 'pneumaticcraft:plastic', 
        }},
    {result: 'immersiveengineering:blastbrick', //高炉砖
        pattern: ['ABA', 
                  'BCB', 
                  'ABA'], 
        ingredients: {
                A: 'ceramics:lava_bricks',
                B: 'minecraft:nether_bricks',
                C: 'tconstruct:nether_grout'
        }},
    {result: 'minecraft:raw_gold', //粗金矿
        pattern: ['AAA', 
                  'AAA', 
                  'AAA'], 
        ingredients: {
                A: 'exnihilosequentia:gold_pieces'
        }},
    {result: 'minecraft:tuff', //凝灰岩
        pattern: ['AAA', 
                  'ABA', 
                  'AAA'], 
        ingredients: {
                A: 'minecraft:flint',
                B: 'minecraft:gravel'
        }},
    {result: 'minecraft:calcite', //方解石
        pattern: [' A ', 
                  'A A', 
                  ' A '], 
        ingredients: {
                A: 'exnihilosequentia:diorite_pebble'
        }},
    {result: 'minecraft:raw_copper', //粗铜矿
        pattern: ['AAA', 
                  'AAA', 
                  'AAA'], 
        ingredients: {
                A: 'exnihilosequentia:copper_pieces'
        }},
    {result: 'exnihilosequentia:raw_zinc', //粗锌矿
        pattern: ['AAA', 
                  'AAA', 
                  'AAA'],  
        ingredients: {
                A: 'exnihilosequentia:zinc_pieces'
        }},
    {result: 'exnihilosequentia:raw_silver', //粗锡矿
        pattern: ['AAA', 
                  'AAA', 
                  'AAA'], 
        ingredients: {
                A: 'exnihilosequentia:silver_pieces'
        }},
    {result: 'minecraft:raw_iron', //粗铁矿
        pattern: ['AAA', 
                  'AAA', 
                  'AAA'],  
        ingredients: {
                A: 'exnihilosequentia:iron_pieces'
        }},
    {result: 'exnihilosequentia:raw_platinum', //粗铂
        pattern: ['AAA', 
                  'AAA', 
                  'AAA'],  
        ingredients: {
                A: 'exnihilosequentia:platinum_pieces'
        }},
    {result: 'exnihilosequentia:string_mesh', //无中生有线筛网
        pattern: ['AAA', 
                  'ABA', 
                  'AAA'], 
        ingredients: {
                A: 'minecraft:string', 
                B: 'minecraft:stick'
        }},
    {result: 'minecraft:smithing_table', //锻造台
        pattern: ['QW ', 
                  'EE ', 
                  'EE '], 
        ingredients: {
                Q: 'minecraft:tuff', 
                E: '#minecraft:planks', 
                W: 'exnihilosequentia:stone_hammer'
        }},
    {result: 'ewcraft:jiyanchengxinggongju', //基岩成型工具
        pattern: ['  B', 
                  ' A ', 
                  'A  '], 
        ingredients: {
                A: 'immersiveengineering:stick_treated',
                B: 'minecraft:obsidian'
        }},
    {result: 'ewcraft:yiyanyichugongju', //基岩移除工具
        pattern: ['  B', 
                  ' A ', 
                  'A  '], 
        ingredients: {
                A: 'immersiveengineering:stick_treated',
                B: 'minecraft:ancient_debris'
        }},
    {result: 'createdieselgenerators:pumpjack_head', //抽油机驴头
        pattern: ['A A', 
                  'BCB', 
                  'A A'], 
        ingredients: {
                A: 'create:andesite_alloy',
                B: 'chemlib:molybdenum_nugget',
                C: 'minecraft:dried_kelp_block'
        }},
    {result: 'create:encased_chain_drive', //链式传动箱
        pattern: ['AB ', 
                  'BB ', 
                  '   '], 
        ingredients: {
                A: 'create:andesite_casing',
                B: 'chemlib:tungsten_nugget',
        }},
    {result: 'bloodmagic:sacrificialdagger', //牺牲匕首
        pattern: ['AAA', 
                  ' BA', 
                  'C A'], 
        ingredients: {
                A: '#forge:glass_panes',
                B: 'minecraft:netherite_ingot',
                C: 'chemlib:titanium_nugget'
        }},
    {result: '8x ars_nouveau:source_berry', //魔源浆果
        pattern: ['AAA', 
                  'ABA', 
                  'AAA'], 
        ingredients: {
                A: 'minecraft:sweet_berries',
                B: 'bloodmagic:etherealslate'
        }},
    {result: 'minecraft:moss_block', //苔藓块
        pattern: ['AAA', 
                  'ABA', 
                  'AAA'], 
        ingredients: {
                A: 'minecraft:mossy_cobblestone',
                B: 'minecraft:mycelium'
        }},
    {result: 'ae2extras:cell_component_1m', //1M 存储核心
        pattern: ['ADA', 
                  'BCB', 
                  'ABA'], 
        ingredients: {
                A: '#forge:dusts/redstone',
                B: 'ae2:cell_component_256k',
                C: 'ae2:quartz_glass',
                D: 'ae2:calculation_processor'
        }}

];
shapedRecipes.forEach(recipe => addShapedRecipe(event, recipe.result, recipe.pattern, recipe.ingredients));
});