function removeRecipeByOutput(event, output) {event.remove({output: output});}// 定义一个用于删除指定输出物品配方的函数
function removeRecipeByInput(event, input) {event.remove({input: input});}// 定义一个用于删除指定输入物品配方的函数

onEvent('recipes', event => {
    event.smelting('ae2:silicon','ae2:certus_quartz_dust');
      // 删除-输出
      const outputsToRemove = [
          'minecraft:sea_pickle',
          'ae2extras:cell_component_1m',
          'ae2:tiny_tnt',
          'ae2:silicon',
          'ae2:inscriber',
          'ae2:interface',
          'ae2:crafting_unit',
          'ae2:pattern_provider',
          'ae2additions:super_cell_housing',
          'avaritiainfinity_helmet',
          'avaritia:infinity_chestplate',
          'avaritia:infinity_legs',
          'avaritia:infinity_boots',
          'avaritia:skullfire_sword',
          'avaritia:infinity_sword',
          'avaritia:infinity_bow',
          'avaritia:infinity_hoe',
          'avaritia:infinity_pickaxe',
          'avaritia:infinity_shovel',
          'avaritia:infinity_axe',
          'avaritia:infinity_ingot',
          'avaritia:infinity_helmet',
          'bloodmagic:sacrificialdagger',
          'botania:fertilizer',
          'create:andesite_alloy',
          'createdieselgenerators:pumpjack_head',
          'createdieselgenerators:pumpjack_crank',
          'create:shaft',
          'create:encased_chain_drive',
          'rainbowcompound:strange_colored_ingot',
          'createsifter:string_mesh',
          'createsifter:andesite_mesh',
          'createsifter:brass_mesh',
          'createsifter:zinc_mesh',
          'createsifter:custom_mesh',
          'exnihilosequentia:string_mesh',
          'exnihilosequentia:flint_mesh',
          'exnihilosequentia:iron_mesh',
          'exnihilosequentia:diamond_mesh',
          'exnihilosequentia:emerald_mesh',
          'minecraft:smithing_table',
          'exnihilosequentia:raw_lead',
          'exnihilosequentia:raw_nickel',
          'exnihilosequentia:raw_tin',
          'exnihilosequentia:raw_aluminum',
          'exnihilosequentia:raw_platinum',
          'exnihilosequentia:raw_uranium',
          'exnihilosequentia:raw_silver',
          'exnihilosequentia:raw_zinc',
          'exmachinis:flux_compactor',
          'excompressum:auto_compressor',
          'excompressum:rationing_auto_compressor',
          'create:cinder_flour',
          'extendedcrafting:black_iron_ingot',
          'immersiveengineering:cokebrick',
          'immersiveengineering:blastbrick',
          'immersiveengineering:blastbrick_reinforced',
          'immersiveengineering:alloybrick',
          'immersiveengineering:component_iron',
          'immersiveengineering:component_steel',
          'industrialforegoingfluid_extractor',
          'industrialforegoing:machine_frame_pity',
          'industrialforegoing:dissolution_chamber',
          'industrialforegoing:mob_slaughter_factory',
          'industrialforegoing:latex_processing_unit',
          'mekanism:ultimate_control_circuit',
          'mekanism:steel_casing',
          'mekanismgenerators:fission_reactor_casing',
          'mekanismgenerators:turbine_casing',
          'mekanismgenerators:control_rod_assembly',
          'thermal:machine_frame',
          'mekanismgenerators:wind_generator',
          'mekanism:dust_steel',
          'minecraft:tnt',
          'draconicevolution:draconium_core',
          'tiab:time_in_a_bottle',
          'minecraft:clock',
          'nuclearcraft:plate_basic',
          'nuclearcraft:chassis',
          'nuclearcraft:steel_frame',
          'pneumaticcraft:plastic',
          'pneumaticcraft:pressure_chamber_wall',
          'pneumaticcraft:printed_circuit_board',
          'tconstruct:scorched_brick',
          'tconstruct:seared_brick',
          'tconstruct:scorched_anvil',
          'industrialforegoing:pink_slime_ingot',
          'extendedcrafting:ultimate_singularity'
      ];
      outputsToRemove.forEach(output => removeRecipeByOutput(event, output));
      // 删除-输入
      const inputsToRemove = [
        'exnihilomekanism:osmium_pieces',
        'exnihilosequentia:iron_pieces',
        'exnihilosequentia:gold_pieces',
        'exnihilosequentia:copper_pieces',
        'exnihilosequentia:iron_pieces',
        'mekanism:hdpe_pellet'
      ];
      inputsToRemove.forEach(input => removeRecipeByInput(event, input));
      // 删除指定id配方
      event.remove({ id: 'bloodmagic:altar/slate' });
      event.remove({ id: 'botania:mana_infusion/manasteel_block' });
      event.remove({ id: 'botania:mana_infusion/manasteel' });
      event.remove({ id: 'botania:mana_infusion/mana_pearl' });
      event.remove({ id: 'createsifter:sifting/gravel_andesite_mesh' });
      event.remove({ id: 'createsifter:sifting/gravel_brass_mesh' });
      event.remove({ id: 'createsifter:sifting/gravel_zinc_mesh' });
      event.remove({ id: 'createsifter:sifting/sand_andesite_mesh' });
      event.remove({ id: 'createsifter:sifting/sand_string_mesh' });
      event.remove({ id: 'createsifter:sifting/sand_zinc_mesh' });
      event.remove({ id: 'vintageimprovements:crushing/basalt' });
      event.remove({ id: 'vintageimprovements:crushing/basalt_recycling' });
      event.remove({ id: 'mekanism:reaction/substrate/ethene_oxygen' });
      event.remove({ id: 'pneumaticcraft:thermopneumatic_processing_plant_example' });
      event.remove({ id: 'pneumaticcraft:refinery/oil_2' });
      event.remove({ id: 'pneumaticcraft:refinery/oil_3' });
      event.remove({ id: 'pneumaticcraft:refinery/oil_4' });
      event.remove({ id: 'pneumaticcraft:thermo_plant/plastic_from_lpg' });
      event.remove({ id: 'pneumaticcraft:thermo_plant/plastic_from_biodiesel' });
      event.remove({ id: 'pneumaticcraft:thermo_plant/lpg' });
      event.remove({ id: 'create:crushing/diorite' });
      event.remove({ id: 'create:crushing/diorite_recycling' });
      // 删除模组配方
      event.remove({ mod: 'alchemistry' });
      event.remove({ mod: 'solarpanels' });
      event.remove({ mod: 'tacz' });
      event.remove({ mod: 'prma' });
    });