onEvent('recipes', event => {
    event.custom({//永恒之心
        "type": "extendedcrafting:shapeless_table",
        "tier":  4,
        "count":  1,
        "ingredients": [
          {"item": "create:creative_motor"},
          {"item": "bloodmagic:activationcrystalcreative"},
          {"item": "ars_nouveau:creative_source_jar"},
          {"item": "ars_nouveau:creative_spell_book"},
          {"item": "appmek:creative_chemical_cell"},
          {"item": "ae2:creative_fluid_cell"},
          {"item": "ae2:creative_item_cell"},
          {"item": "ae2:creative_energy_cell"},
          {"item": "appbot:creative_mana_cell"},
          {"item": "storagedrawers:creative_storage_upgrade"},
          {"item": "storagedrawers:creative_vending_upgrade"},
          {"item": "create:creative_fluid_tank"},
          {"item": "create:creative_crate"},
          {"item": "create:creative_blaze_cake"},
          {"item": "createaddition:creative_energy"},
          {"item": "immersiveengineering:capacitor_creative"},
          {"item": "mekanism:creative_bin"},
          {"item": "mekanism:creative_fluid_tank"},
          {"item": "thermal:fluid_tank_creative_augment"},
          {"item": "thermal:machine_efficiency_creative_augment"},
          {"item": "thermal:machine_catalyst_creative_augment"},
          {"item": "tconstruct:creative_slot"}, 
          {"item": "draconicevolution:creative_op_capacitor"},
          {"item": "draconicevolution:creative_capacitor"},
          {"item": "pneumaticcraft:creative_upgrade"},
          {"item": "pneumaticcraft:creative_compressor"},
          {"item": "psi:cad_assembly_creative"},
          {"item": "thermal:rf_coil_creative_augment"},
          {"item": "solarpanels:creative_solar_panel"},
          {"item": "solarpanels:creative_solar_element"},
          {"item": "solarpanels:creative_energy_tablet"},
          {"item": "create_sa:creative_filling_tank"},
          {"item": "pneumaticcraft:creative_compressed_iron_block"},
          {"item": "mekanism:creative_chemical_tank"},
          {"item": "mekanism:creative_energy_cube"},
          {"item": "tiab:time_in_a_bottle"}
        ],
        "result": {
          "item": 'ewcraft:yonghengzhixin'
        }
    });
    event.custom({//时间之瓶
            "type": "extendedcrafting:shaped_table",
            "pattern": [
              "   AAA   ",
              "  ABBBA  ",
              "  CABAC  ",
              "  CABAC  ",
              " CDDDDDC ",
              " CDEFEDC ",
              " CDEGEDC ",
              " CDDDDDC ",
              "  CCCCC  "
            ],
            "key": {
              "A": {"item": "minecraft:enchanted_golden_apple"},
              "B": {"item": "ae2:singularity"},
              "C": {"item": "thermal:enderium_glass"},
              "D": {"item": "mekaevolution:infinite_control_circuit"},
              "E": {"item": "avaritia:infinity_catalyst"},
              "F": {"item": "mekanism:qio_drive_time_dilating"},
              "G": {"item": "ewcraft:shijianhexin"}
            },
            "result": {
              "item": "tiab:time_in_a_bottle",
              "count": 1
            }
    });
    event.custom({//创造马达
            "type": "extendedcrafting:shaped_table",
            "pattern": [
              "    A    ",
              "ABBBABBBA",
              "ABCCACCBA",
              "ABCCACCBA",
              "ABCCACCBA",
              "ABCCCCCBA",
              "ABCCDCCBA",
              "ABCCCCCBA",
              "ABBBBBBBA"
            ],
            "key": {
              "A": {"item": "create:shaft"},
              "B": {"item": "ewcraft:jueduihejin"},
              "C": {"item": "ewcraft:yonghengchilun"},
              "D": {"item": "ars_creo:starbuncle_wheel"}
            },
            "result": {
              "item": "create:creative_motor",
              "count": 1
            }
    });
    event.custom({//复杂合金
        "type": "extendedcrafting:shapeless_table",
        "tier":  4,
        "count":  1,
        "ingredients": [
          {"item": "create:andesite_alloy"},
          {"item": "rainbowcompound:overcharged_alloy"},
          {"item": "minecraft:netherite_ingot"},
          {"item": "extendedcrafting:black_iron_ingot"},
          {"item": "immersiveengineering:ingot_hop_graphite"},
          {"item": "immersiveengineering:ingot_constantan"},
          {"item": "rainbowcompound:netherstar_ingot"},
          {"item": "create:brass_ingot"},
          {"item": "avaritia:neutronium_ingot"},
          {"item": "avaritia:crystal_matrix_ingot"},
          {"item": "bloodsmeltery:bloodbrass_ingot"},
          {"item": "extendedcrafting:ender_ingot"},
          {"item": "extendedcrafting:enhanced_ender_ingot"},
          {"item": "extendedcrafting:crystaltine_ingot"},
          {"item": "mekanism:ingot_refined_obsidian"},
          {"item": "mekanism:ingot_refined_glowstone"},
          {"item": "mekanism:ingot_bronze"},
          {"item": "materialis:fairy_ingot"},
          {"item": "immersiveengineering:ingot_electrum"},
          {"item": "thermal:rose_gold_ingot"},
          {"item": "thermal:signalum_ingot"},
          {"item": "thermal:lumium_ingot"},
          {"item": "thermal:invar_ingot"},
          {"item": "tconstruct:slimesteel_ingot"},
          {"item": "tconstruct:amethyst_bronze_ingot"},
          {"item": "psi:psimetal"},
          {"item": "psi:ebony_psimetal"},
          {"item": "psi:ivory_psimetal"},
          {"item": "pneumaticcraft:ingot_iron_compressed"},
          {"item": "industrialforegoing:pink_slime_ingot"},
          {"item": "tconstruct:hepatizon_ingot"},
          {"item": "tconstruct:manyullyn_ingot"},
          {"item": "tconstruct:queens_slime_ingot"},
          {"item": "tconstruct:pig_iron_ingot"},
          {"item": "vintageimprovements:vanadium_ingot"},
          {"item": "botania:manasteel_ingot"},
          {"item": "botania:terrasteel_ingot"},
          {"item": "botania:elementium_ingot"},
          {"item": "botania:gaia_ingot"},
          {"item": "draconicevolution:awakened_draconium_ingot"},
          {"item": "tconstruct:cheese_ingot"},
          {"item": "chemlib:titanium_ingot"},
          {"item": "create:shadow_steel"},
          {"item": "create:refined_radiance"},
          {"item": "create:chromatic_compound"},
          {"item": "rainbowcompound:polished_ender_quartz"},
          {"item": "create:polished_rose_quartz"},
          {"item": "mekanism:alloy_infused"},
          {"item": "mekanism:alloy_reinforced"},
          {"item": "mekanism:alloy_atomic"},
          {"item": "pneumaticcraft:plastic"},
          {"item": "industrialforegoing:plastic"},
          {"item": "mekanism:hdpe_sheet"},
          {"item": "minecraft:nether_brick"},
          {"item": "minecraft:brick"},
          {"item": "ceramics:porcelain_brick"}
        ],
        "result": {
          "item": 'ewcraft:fuzahejin'
        }
    });
});