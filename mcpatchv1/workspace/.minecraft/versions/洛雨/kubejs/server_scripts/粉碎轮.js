onEvent('recipes', event => {
    event.recipes.create.crushing([//缤纷彩石
        Item.of('minecraft:raw_iron').withChance(0.5), 
        Item.of('minecraft:raw_copper').withChance(0.5), 
        Item.of('minecraft:raw_gold').withChance(0.5), 
        Item.of('mekanism:raw_osmium').withChance(0.5), 
        Item.of('mekanism:raw_tin').withChance(0.5), 
        Item.of('create:raw_zinc').withChance(0.5), 
        Item.of('immersiveengineering:raw_lead').withChance(0.5), 
        Item.of('immersiveengineering:raw_silver').withChance(0.5), 
        Item.of('ewcraft:bingfengcaishi').withChance(1.00)], 'ewcraft:bingfengcaishi');
    event.recipes.create.crushing([
        Item.of('create:cinder_flour').withChance(1.00),
        Item.of('create:cinder_flour').withChance(0.50)], 'exnihilosequentia:crushed_netherrack');
    event.recipes.create.crushing([
        Item.of('exnihilosequentia:crushed_netherrack').withChance(1.00)], 'minecraft:netherrack');
    event.recipes.create.crushing([
        Item.of('exnihilosequentia:crushed_end_stone').withChance(1.00)], 'minecraft:end_stone');
    event.recipes.create.crushing([
        Item.of('exnihilosequentia:crushed_andesite').withChance(1.00)], 'minecraft:andesite');
    event.recipes.create.crushing([
        Item.of('exnihilosequentia:crushed_diorite').withChance(1.00)], 'minecraft:diorite');
    event.recipes.create.crushing([
        Item.of('exnihilosequentia:crushed_granite').withChance(1.00)], 'minecraft:granite');
    event.recipes.create.crushing([
        Item.of('exnihiloae:crushed_skystone').withChance(1.00)], 'ae2:sky_stone_block');
    event.recipes.create.crushing([//方解石-紫水晶
        Item.of('exnihilosequentia:stone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:andesite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:basalt_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:blackstone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:diorite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:granite_pebble').withChance(0.2), 
        Item.of('minecraft:amethyst_shard').withChance(0.01)], 'minecraft:calcite');
    event.recipes.create.crushing([
        Item.of('exnihilosequentia:stone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:andesite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:basalt_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:blackstone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:diorite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:granite_pebble').withChance(0.2), 
        Item.of('chemlib:thorium_nugget').withChance(0.95)], 'ewcraft:suitukuang');
    event.recipes.create.crushing([
        Item.of('exnihilosequentia:stone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:andesite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:basalt_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:blackstone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:diorite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:granite_pebble').withChance(0.2), 
        Item.of('chemlib:lithium_nugget').withChance(0.95)], 'ewcraft:suilikuang');
    event.recipes.create.crushing([
        Item.of('exnihilosequentia:stone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:andesite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:basalt_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:blackstone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:diorite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:granite_pebble').withChance(0.2), 
        Item.of('mekanism:nugget_osmium').withChance(0.95)], 'exnihilomekanism:osmium_pieces');
    event.recipes.create.crushing([
        Item.of('exnihilosequentia:stone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:andesite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:basalt_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:blackstone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:diorite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:granite_pebble').withChance(0.2), 
        Item.of('thermal:lead_nugget').withChance(0.95)], 'exnihilosequentia:lead_pieces');
    event.recipes.create.crushing([
        Item.of('exnihilosequentia:stone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:andesite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:basalt_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:blackstone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:diorite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:granite_pebble').withChance(0.2), 
        Item.of('thermal:nickel_nugget').withChance(0.95)], 'exnihilosequentia:nickel_pieces');
    event.recipes.create.crushing([
        Item.of('exnihilosequentia:stone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:andesite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:basalt_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:blackstone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:diorite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:granite_pebble').withChance(0.2), 
        Item.of('thermal:tin_nugget').withChance(0.95)], 'exnihilosequentia:tin_pieces');
    event.recipes.create.crushing([
        Item.of('exnihilosequentia:stone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:andesite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:basalt_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:blackstone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:diorite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:granite_pebble').withChance(0.2), 
        Item.of('immersiveengineering:nugget_aluminum').withChance(0.95)], 'exnihilosequentia:aluminum_pieces');
    event.recipes.create.crushing([
        Item.of('exnihilosequentia:stone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:andesite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:basalt_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:blackstone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:diorite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:granite_pebble').withChance(0.2), 
        Item.of('immersiveengineering:nugget_uranium').withChance(0.95)], 'exnihilosequentia:uranium_pieces');
    event.recipes.create.crushing([
        Item.of('exnihilosequentia:stone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:andesite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:basalt_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:blackstone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:diorite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:granite_pebble').withChance(0.2), 
        Item.of('chemlib:beryllium_nugget').withChance(0.95)], 'ewcraft:suipikuang');
    event.recipes.create.crushing([
        Item.of('exnihilosequentia:stone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:andesite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:basalt_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:blackstone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:diorite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:granite_pebble').withChance(0.2), 
        Item.of('chemlib:magnesium_nugget').withChance(0.95)], 'ewcraft:suimeikuang');
    event.recipes.create.crushing([
        Item.of('exnihilosequentia:stone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:andesite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:basalt_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:blackstone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:diorite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:granite_pebble').withChance(0.2), 
        Item.of('chemlib:manganese_nugget').withChance(0.95)], 'ewcraft:suimengkuang');
    event.recipes.create.crushing([
        Item.of('exnihilosequentia:stone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:andesite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:basalt_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:blackstone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:diorite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:granite_pebble').withChance(0.2), 
        Item.of('chemlib:vanadium_nugget').withChance(0.95)], 'ewcraft:suifankuang');
    event.recipes.create.crushing([
        Item.of('exnihilosequentia:stone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:andesite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:basalt_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:blackstone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:diorite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:granite_pebble').withChance(0.2), 
        Item.of('chemlib:chromium_nugget').withChance(0.95)], 'ewcraft:suigekuang');
    event.recipes.create.crushing([
        Item.of('exnihilosequentia:stone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:andesite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:basalt_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:blackstone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:diorite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:granite_pebble').withChance(0.2), 
        Item.of('chemlib:cobalt_nugget').withChance(0.95)], 'ewcraft:suigukuang');
    event.recipes.create.crushing([
        Item.of('exnihilosequentia:stone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:andesite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:basalt_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:blackstone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:diorite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:granite_pebble').withChance(0.2), 
        Item.of('chemlib:tungsten_nugget').withChance(0.95)], 'ewcraft:suiwukuang');
    event.recipes.create.crushing([
        Item.of('exnihilosequentia:stone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:andesite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:basalt_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:blackstone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:diorite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:granite_pebble').withChance(0.2), 
        Item.of('chemlib:molybdenum_nugget').withChance(0.95)], 'ewcraft:suimukuang');
    event.recipes.create.crushing([
        Item.of('exnihilosequentia:stone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:andesite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:basalt_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:blackstone_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:diorite_pebble').withChance(0.2), 
        Item.of('exnihilosequentia:granite_pebble').withChance(0.2), 
        Item.of('chemlib:titanium_nugget').withChance(0.95)], 'ewcraft:suitaikuang');
    event.recipes.create.crushing(['exnihilosequentia:dust'], 'minecraft:sand');
});