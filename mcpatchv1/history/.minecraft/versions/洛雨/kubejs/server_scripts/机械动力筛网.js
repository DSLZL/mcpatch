onEvent('recipes', event => {
    const siftingRecipes = [
        {
            type: 'createsifter:sifting',
            ingredients: [
                {item: 'minecraft:gravel'},
                {item: 'createsifter:zinc_mesh'}
            ],
            results: [
                {item: 'exnihilosequentia:nickel_pieces', chance: 0.15},
                {item: 'exnihilosequentia:platinum_pieces', chance: 0.05},
                {item: 'exnihilosequentia:andesite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:basalt_pebble', chance: 0.2},
                {item: 'exnihilosequentia:blackstone_pebble', chance: 0.2},
                {item: 'exnihilosequentia:diorite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:granite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:stone_pebble', chance: 0.2}
            ],
            processingTime: 500,
            waterlogged: true
        },
        {
            type: 'createsifter:sifting',
            ingredients: [
                {item: 'minecraft:gravel'},
                {item: 'createsifter:zinc_mesh'}
            ],
            results: [
                {item: 'exnihilosequentia:nickel_pieces', chance: 0.15},
                {item: 'exnihilosequentia:platinum_pieces', chance: 0.05},
                {item: 'exnihilosequentia:andesite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:basalt_pebble', chance: 0.2},
                {item: 'exnihilosequentia:blackstone_pebble', chance: 0.2},
                {item: 'exnihilosequentia:diorite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:granite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:stone_pebble', chance: 0.2}
            ],
            processingTime: 500,
            waterlogged: true
        },
        {
            type: 'createsifter:sifting',
            ingredients: [
                {item: 'minecraft:flowering_azalea_leaves'},
                {item: 'createsifter:zinc_mesh'}
            ],
            results: [
                {item: 'ars_nouveau:blue_archwood_sapling', chance: 0.05},
                {item: 'ars_nouveau:green_archwood_sapling', chance: 0.05},
                {item: 'ars_nouveau:purple_archwood_sapling', chance: 0.05},
                {item: 'ars_nouveau:red_archwood_sapling', chance: 0.05},
                {item: 'ars_elemental:yellow_archwood_sapling', chance: 0.05},
                {item: 'minecraft:oak_sapling', chance: 0.05},
                {item: 'minecraft:spruce_sapling', chance: 0.05},
                {item: 'minecraft:birch_sapling', chance: 0.05},
                {item: 'minecraft:jungle_sapling', chance: 0.05},
                {item: 'minecraft:acacia_sapling', chance: 0.05},
                {item: 'minecraft:dark_oak_sapling', chance: 0.05},
                {item: 'culturaldelights:avocado_sapling', chance: 0.05},
                {item: 'tconstruct:earth_slime_sapling', chance: 0.05},
                {item: 'tconstruct:sky_slime_sapling', chance: 0.05},
                {item: 'tconstruct:ender_slime_sapling', chance: 0.05}
            ],
            processingTime: 500,
            waterlogged: false
        },
        {
            type: 'createsifter:sifting',
            ingredients: [
                {item: 'minecraft:gravel'},
                {item: 'createsifter:andesite_mesh'}
            ],
            results: [
                {item: 'exnihilosequentia:aluminum_pieces', chance: 0.2},
                {item: 'exnihilosequentia:tin_pieces', chance: 0.3},
                {item: 'exnihilosequentia:copper_pieces', chance: 0.35},
                {item: 'exnihilosequentia:andesite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:basalt_pebble', chance: 0.2},
                {item: 'exnihilosequentia:blackstone_pebble', chance: 0.2},
                {item: 'exnihilosequentia:diorite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:granite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:stone_pebble', chance: 0.2}
            ],
            processingTime: 500,
            waterlogged: true
        },
        {
            type: 'createsifter:sifting',
            ingredients: [
                {item: 'createsifter:brass_mesh'},
                {item: 'exnihilosequentia:crushed_andesite'}
            ],
            results: [
                {item: 'ewcraft:suilikuang', chance: 0.2},
                {item: 'ewcraft:suigekuang', chance: 0.2},
                {item: 'ewcraft:suimengkuang', chance: 0.2},
                {item: 'exnihilosequentia:iron_pieces', chance: 0.2},
                {item: 'exnihilosequentia:andesite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:basalt_pebble', chance: 0.2},
                {item: 'exnihilosequentia:blackstone_pebble', chance: 0.2},
                {item: 'exnihilosequentia:diorite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:granite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:stone_pebble', chance: 0.2}
            ],
            processingTime: 500,
            waterlogged: true
        },
        {
            type: 'createsifter:sifting',
            ingredients: [
                {item: 'createsifter:brass_mesh'},
                {item: 'exnihilosequentia:crushed_diorite'}
            ],
            results: [
                {item: 'ewcraft:suimeikuang', chance: 0.2},
                {item: 'ewcraft:suiwukuang', chance: 0.2},
                {item: 'exnihilosequentia:aluminum_pieces', chance: 0.2},
                {item: 'exnihilosequentia:iron_pieces', chance: 0.2},
                {item: 'exnihilosequentia:andesite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:basalt_pebble', chance: 0.2},
                {item: 'exnihilosequentia:blackstone_pebble', chance: 0.2},
                {item: 'exnihilosequentia:diorite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:granite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:stone_pebble', chance: 0.2}
            ],
            processingTime: 500,
            waterlogged: true
        },
        {
            type: 'createsifter:sifting',
            ingredients: [
                {item: 'createsifter:brass_mesh'},
                {item: 'exnihilosequentia:crushed_granite'}
            ],
            results: [
                {item: 'ewcraft:suipikuang', chance: 0.2},
                {item: 'exnihilosequentia:platinum_pieces', chance: 0.2},
                {item: 'exnihilosequentia:iron_pieces', chance: 0.2},
                {item: 'exnihilosequentia:andesite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:basalt_pebble', chance: 0.2},
                {item: 'exnihilosequentia:blackstone_pebble', chance: 0.2},
                {item: 'exnihilosequentia:diorite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:granite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:stone_pebble', chance: 0.2}
            ],
            processingTime: 500,
            waterlogged: true
        },
        {
            type: 'createsifter:sifting',
            ingredients: [
                {item: 'createsifter:custom_mesh'},
                {item: 'exnihilosequentia:crushed_netherrack'}
            ],
            results: [
                {item: 'ewcraft:suigukuang', chance: 0.2},
                {item: 'exnihilosequentia:silver_pieces', chance: 0.2},
                {item: 'exnihilosequentia:gold_pieces', chance: 0.2},
                {item: 'exnihilosequentia:andesite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:basalt_pebble', chance: 0.2},
                {item: 'exnihilosequentia:blackstone_pebble', chance: 0.2},
                {item: 'exnihilosequentia:diorite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:granite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:stone_pebble', chance: 0.2}
            ],
            processingTime: 500,
            waterlogged: true
        },
        {
            type: 'createsifter:sifting',
            ingredients: [
                {item: 'createsifter:custom_mesh'},
                {item: 'exnihilosequentia:crushed_end_stone'}
            ],
            results: [
                {item: 'ewcraft:suifankuang', chance: 0.2},
                {item: 'ewcraft:suimukuang', chance: 0.2},
                {item: 'exnihilosequentia:uranium_pieces', chance: 0.2},
                {item: 'exnihilosequentia:andesite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:basalt_pebble', chance: 0.2},
                {item: 'exnihilosequentia:blackstone_pebble', chance: 0.2},
                {item: 'exnihilosequentia:diorite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:granite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:stone_pebble', chance: 0.2}
            ],
            processingTime: 500,
            waterlogged: true
        },
        {
            type: 'createsifter:sifting',
            ingredients: [
                {item: 'createsifter:custom_mesh'},
                {item: 'exnihiloae:crushed_skystone'}
            ],
            results: [
                {item: 'tetra:geode', chance: 0.05},
                {item: 'ewcraft:suipengkuang', chance: 0.2},
                {item: 'ewcraft:suitukuang', chance: 0.2},
                {item: 'ewcraft:suitaikuang', chance: 0.05},
                {item: 'exnihilosequentia:nickel_pieces', chance: 0.2},
                {item: 'exnihilosequentia:iron_pieces', chance: 0.2},
                {item: 'exnihilosequentia:andesite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:basalt_pebble', chance: 0.2},
                {item: 'exnihilosequentia:blackstone_pebble', chance: 0.2},
                {item: 'exnihilosequentia:diorite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:granite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:stone_pebble', chance: 0.2}
            ],
            processingTime: 500,
            waterlogged: true
        },
        {
            type: 'createsifter:sifting',
            ingredients: [
                {item: 'minecraft:gravel'},
                {item: 'createsifter:brass_mesh'}
            ],
            results: [
                {item: 'exnihilosequentia:lead_pieces', chance: 0.2},
                {item: 'exnihilosequentia:iron_pieces', chance: 0.4},
                {item: 'exnihilosequentia:zinc_pieces', chance: 0.35},
                {item: 'exnihilosequentia:andesite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:basalt_pebble', chance: 0.2},
                {item: 'exnihilosequentia:blackstone_pebble', chance: 0.2},
                {item: 'exnihilosequentia:diorite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:granite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:stone_pebble', chance: 0.2}
            ],
            processingTime: 500,
            waterlogged: true
        },
        {
            type: 'createsifter:sifting',
            ingredients: [
                {item: 'minecraft:gravel'},
                {item: 'createsifter:custom_mesh'}
            ],
            results: [
                {item: 'exnihilomekanism:osmium_pieces', chance: 0.2},
                {item: 'exnihilosequentia:uranium_pieces', chance: 0.2},
                {item: 'exnihilosequentia:andesite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:basalt_pebble', chance: 0.2},
                {item: 'exnihilosequentia:blackstone_pebble', chance: 0.2},
                {item: 'exnihilosequentia:diorite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:granite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:stone_pebble', chance: 0.2}
            ],
            processingTime: 500,
            waterlogged: true
        },
        {
            type: 'createsifter:sifting',
            ingredients: [
                {item: 'minecraft:gravel'},
                {item: 'createsifter:string_mesh'}
            ],
            results: [
                {item: 'exnihilosequentia:silver_pieces', chance: 0.2},
                {item: 'exnihilosequentia:gold_pieces', chance: 0.2},
                {item: 'exnihilosequentia:andesite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:basalt_pebble', chance: 0.2},
                {item: 'exnihilosequentia:blackstone_pebble', chance: 0.2},
                {item: 'exnihilosequentia:diorite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:granite_pebble', chance: 0.2},
                {item: 'exnihilosequentia:stone_pebble', chance: 0.2}
            ],
            processingTime: 500,
            waterlogged: true
        }];
    siftingRecipes.forEach(recipe => {event.custom(recipe)});
});