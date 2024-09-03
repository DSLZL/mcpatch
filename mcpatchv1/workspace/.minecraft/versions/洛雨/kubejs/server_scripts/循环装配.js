onEvent('recipes', event => { 
    event.custom({//创造太阳能元件
        type: 'create:sequenced_assembly',
        ingredient: {item: 'rainbowcompound:rainbow_compound'},
        transitionalItem: {item: 'create:incomplete_precision_mechanism'},
        sequence: [
            {type: 'create:deploying',ingredients: [
                {item: 'create:incomplete_precision_mechanism'},
                {item: 'mekanismgenerators:solar_panel'}],
          results: [{item: 'create:incomplete_precision_mechanism'}]},
             {type: 'create:deploying',ingredients: [
                {item: 'create:incomplete_precision_mechanism'},
                {item: 'solarpanels:carbone_solar_element'}],
          results: [{item: 'create:incomplete_precision_mechanism'}]},
             {type: 'create:deploying',ingredients: [
                {item: 'create:incomplete_precision_mechanism'},
                {item: 'solarpanels:hybrid_solar_element'}],
          results: [{item: 'create:incomplete_precision_mechanism'}]},
             {type: 'create:deploying',ingredients: [
                {item: 'create:incomplete_precision_mechanism'},
                {item: 'solarpanels:improved_hybrid_solar_element'}],
          results: [{item: 'create:incomplete_precision_mechanism'}]},
             {type: 'create:deploying',ingredients: [
                {item: 'create:incomplete_precision_mechanism'},
                {item: 'solarpanels:quantum_solar_element'}],
          results: [{item: 'create:incomplete_precision_mechanism'}]},
             {type: 'create:deploying',ingredients: [
                {item: 'create:incomplete_precision_mechanism'},
                {item: 'solarpanels:spectral_solar_element'}],
          results: [{item: 'create:incomplete_precision_mechanism'}]},
             {type: 'create:deploying',ingredients: [
                {item: 'create:incomplete_precision_mechanism'},
                {item: 'solarpanels:photonic_solar_element'}],
          results: [{item: 'create:incomplete_precision_mechanism'}]},
             {type: 'create:deploying',ingredients: [
                {item: 'create:incomplete_precision_mechanism'},
                {item: 'solarpanels:singular_solar_element'}],
          results: [{item: 'create:incomplete_precision_mechanism'}]},
             {type: 'create:deploying',ingredients: [
                {item: 'create:incomplete_precision_mechanism'},
                {item: 'solarpanels:light_absorbing_solar_element'}],
          results: [{item: 'create:incomplete_precision_mechanism'}]},
        ],
        results: [
          {item: 'solarpanels:creative_solar_element',chance: 1.0},
          {item: 'rainbowcompound:rainbow_compound',chance: 99.0},
        ],
        loops: 100
    });
    event.custom({//印刷电路板蓝图
        type: 'create:sequenced_assembly',
        ingredient: {item: 'immersiveengineering:circuit_board'},
        transitionalItem: {item: 'create:incomplete_precision_mechanism'},
        sequence: [
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'minecraft:lapis_lazuli'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'immersiveengineering:plate_duroplast'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'pneumaticcraft:plastic'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]}],
        results: [
          {item: 'pneumaticcraft:pcb_blueprint',chance: 80.0},
          {item: 'immersiveengineering:circuit_board',chance: 20.0},
        ],
        loops: 2
    });
    event.custom({//装配程序：激光
      type: 'create:sequenced_assembly',
      ingredient: {tag: 'forge:plates/gold'},
      transitionalItem: {item: 'create:incomplete_precision_mechanism'},
      sequence: [
         {type: 'create:deploying',ingredients: [
            {item: 'create:incomplete_precision_mechanism'},
            {item: 'rainbowcompound:refined_radiance_neon'}],
          results: [{item: 'create:incomplete_precision_mechanism'}]},
         {type: 'create:deploying',ingredients: [
            {item: 'create:incomplete_precision_mechanism'},
            {item: 'pneumaticcraft:printed_circuit_board'}],
          results: [{item: 'create:incomplete_precision_mechanism'}]}],
      results: [
        {item: 'pneumaticcraft:assembly_program_laser',chance: 80.0},
        {item: 'create:golden_sheet',chance: 20.0},
      ],
      loops: 3
    });
    event.custom({//装配程序：钻头
      type: 'create:sequenced_assembly',
      ingredient: {tag: 'forge:plates/gold'},
      transitionalItem: {item: 'create:incomplete_precision_mechanism'},
      sequence: [
         {type: 'create:deploying',ingredients: [
            {item: 'create:incomplete_precision_mechanism'},
            {item: 'immersiveengineering:drillhead_steel'}],
          results: [{item: 'create:incomplete_precision_mechanism'}]},
         {type: 'create:deploying',ingredients: [
            {item: 'create:incomplete_precision_mechanism'},
            {item: 'pneumaticcraft:printed_circuit_board'}],
          results: [{item: 'create:incomplete_precision_mechanism'}]}],
      results: [
        {item: 'pneumaticcraft:assembly_program_drill',chance: 80.0},
        {item: 'create:golden_sheet',chance: 20.0},
      ],
      loops: 3
    });
    event.custom({//压力室墙壁
        type: 'create:sequenced_assembly',
        ingredient: {item: 'pneumaticcraft:ingot_iron_compressed'},
        transitionalItem: {item: 'create:incomplete_precision_mechanism'},
        sequence: [
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'minecraft:smooth_stone'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'minecraft:smooth_stone'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'minecraft:smooth_stone'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]}],
        results: [
          {item: 'pneumaticcraft:pressure_chamber_wall',chance: 80.0},
          {item: 'pneumaticcraft:ingot_iron_compressed',chance: 20.0},
        ],
        loops: 3
    });
    event.custom({//气动电路板
        type: 'create:sequenced_assembly',
        ingredient: {item: 'immersiveengineering:logic_circuit'},
        transitionalItem: {item: 'create:incomplete_precision_mechanism'},
        sequence: [
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'pneumaticcraft:unassembled_pcb'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'pneumaticcraft:capacitor'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'pneumaticcraft:transistor'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]}],
        results: [
          {item: 'pneumaticcraft:printed_circuit_board',chance: 80.0},
          {item: 'ae2:printed_silicon',chance: 20.0},
        ],
        loops: 2
    });
    event.custom({//钢质机壳
        type: 'create:sequenced_assembly',
        ingredient: {item: 'industrialforegoing:machine_frame_supreme'},
        transitionalItem: {item: 'create:incomplete_precision_mechanism'},
        sequence: [
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {tag: 'forge:storage_blocks/steel'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'immersiveengineering:logic_circuit'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'pneumaticcraft:printed_circuit_board'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {tag: 'forge:storage_blocks/osmium'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
        ],
        results: [
          {item: 'mekanism:steel_casing',chance: 100.0}
        ],
        loops: 2
    });
    event.custom({//终极控制电路
        type: 'create:sequenced_assembly',
        ingredient: {item: 'mekanism:elite_control_circuit'},
        transitionalItem: {item: 'create:incomplete_precision_mechanism'},
        sequence: [
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'pneumaticcraft:printed_circuit_board'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'mekanism:hdpe_sheet'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'mekanism:enriched_refined_obsidian'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'mekanism:alloy_atomic'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
        ],
        results: [
          {item: 'mekanism:ultimate_control_circuit',chance: 80.0},
          {item: 'mekanism:elite_control_circuit',chance: 20.0},
        ],
        loops: 2
    });
    event.custom({//逻辑电路
        type: 'create:sequenced_assembly',
        ingredient: {item: 'immersiveengineering:circuit_board'},
        transitionalItem: {item: 'create:incomplete_precision_mechanism'},
        sequence: [
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:logic_processor'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:calculation_processor'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:engineering_processor'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'immersiveengineering:wire_electrum'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]}],
        results: [
          {item: 'immersiveengineering:logic_circuit',chance: 80.0},
          {item: 'ae2:printed_silicon',chance: 20.0},
        ],
        loops: 6
    });
    event.custom({//绝对合金
        type: 'create:sequenced_assembly',
        ingredient: {item: 'ewcraft:fuzahejin'},
        transitionalItem: {item: 'create:incomplete_precision_mechanism'},
        sequence: [
                 {type: 'create:deploying',ingredients: [
                    {item: 'create:incomplete_precision_mechanism'},
                    {item: 'minecraft:nether_star'}],
              results: [{item: 'create:incomplete_precision_mechanism'}]},
                 {type: 'create:deploying',ingredients: [
                    {item: 'create:incomplete_precision_mechanism'},
                    {item: 'extendedcrafting:ender_star'}],
              results: [{item: 'create:incomplete_precision_mechanism'}]},
                 {type: 'create:deploying',ingredients: [
                    {item: 'create:incomplete_precision_mechanism'},
                    {item: 'toolbooster:toolbooster'}],
              results: [{item: 'create:incomplete_precision_mechanism'}]},
                 {type: 'create:deploying',ingredients: [
                    {item: 'create:incomplete_precision_mechanism'},
                    {item: 'toolbooster:legend_toolbooster'}],
              results: [{item: 'create:incomplete_precision_mechanism'}]},
                 {type: 'create:deploying',ingredients: [
                    {item: 'create:incomplete_precision_mechanism'},
                    {item: 'toolbooster:hammer_toolbooster'}],
              results: [{item: 'create:incomplete_precision_mechanism'}]}
        ],
        results: [
          {item: 'ewcraft:jueduihejin',chance: 50.0},
          {item: 'create:sturdy_sheet',chance: 50.0},
        ],
        loops: 100
    });
    event.custom({//永恒齿轮
        type: 'create:sequenced_assembly',
        ingredient: {item: 'thermal:enderium_gear'},
        transitionalItem: {item: 'create:incomplete_precision_mechanism'},
        sequence: [
            {type: 'create:deploying',ingredients: [
                {item: 'create:incomplete_precision_mechanism'},
                {item: 'econstruct:brass_cogwheel'}],
          results: [{item: 'create:incomplete_precision_mechanism'}]},
             {type: 'create:deploying',ingredients: [
                {item: 'create:incomplete_precision_mechanism'},
                {item: 'econstruct:large_brass_cogwheel'}],
          results: [{item: 'create:incomplete_precision_mechanism'}]},
             {type: 'create:deploying',ingredients: [
                {item: 'create:incomplete_precision_mechanism'},
                {item: 'steampowered:bronze_cogwheel'}],
          results: [{item: 'create:incomplete_precision_mechanism'}]},
             {type: 'create:deploying',ingredients: [
                {item: 'create:incomplete_precision_mechanism'},
                {item: 'steampowered:bronze_large_cogwheel'}],
          results: [{item: 'create:incomplete_precision_mechanism'}]},
             {type: 'create:deploying',ingredients: [
                {item: 'create:incomplete_precision_mechanism'},
                {item: 'steampowered:cast_iron_cogwheel'}],
          results: [{item: 'create:incomplete_precision_mechanism'}]},
             {type: 'create:deploying',ingredients: [
                {item: 'create:incomplete_precision_mechanism'},
                {item: 'steampowered:cast_iron_large_cogwheel'}],
          results: [{item: 'create:incomplete_precision_mechanism'}]},
             {type: 'create:deploying',ingredients: [
                {item: 'create:incomplete_precision_mechanism'},
                {item: 'econstruct:iron_cogwheel'}],
          results: [{item: 'create:incomplete_precision_mechanism'}]},
             {type: 'create:deploying',ingredients: [
                {item: 'create:incomplete_precision_mechanism'},
                {item: 'econstruct:large_iron_cogwheel'}],
          results: [{item: 'create:incomplete_precision_mechanism'}]},
             {type: 'create:deploying',ingredients: [
                {item: 'create:incomplete_precision_mechanism'},
                {item: 'steampowered:steel_cogwheel'}],
          results: [{item: 'create:incomplete_precision_mechanism'}]},
             {type: 'create:deploying',ingredients: [
                {item: 'create:incomplete_precision_mechanism'},
                {item: 'steampowered:steel_large_cogwheel'}],
          results: [{item: 'create:incomplete_precision_mechanism'}]},
        ],
        results: [
          {item: 'ewcraft:yonghengchilun',chance: 1.0},
          {item: 'create:cogwheel',chance: 99.0},
        ],
        loops: 100
    });
    event.custom({//运算模板
        type: 'create:sequenced_assembly',
        ingredient: {item: 'create:iron_sheet'},
        transitionalItem: {item: 'create:incomplete_precision_mechanism'},
        sequence: [
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:certus_quartz_crystal'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'minecraft:iron_nugget'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]}],
        results: [
          {item: 'ae2:calculation_processor_press',chance: 80.0},
          {item: 'create:iron_sheet',chance: 20.0},
        ],
        loops: 4
    });
    event.custom({//逻辑模板
        type: 'create:sequenced_assembly',
        ingredient: {item: 'create:iron_sheet'},
        transitionalItem: {item: 'create:incomplete_precision_mechanism'},
        sequence: [
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'minecraft:gold_ingot'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'minecraft:iron_nugget'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]}],
        results: [
          {item: 'ae2:logic_processor_press',chance: 80.0},
          {item: 'create:iron_sheet',chance: 20.0},
        ],
        loops: 4
    });
    event.custom({//工程模板
        type: 'create:sequenced_assembly',
        ingredient: {item: 'create:iron_sheet'},
        transitionalItem: {item: 'create:incomplete_precision_mechanism'},
        sequence: [
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'minecraft:diamond'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'minecraft:iron_nugget'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]}],
        results: [
          {item: 'ae2:engineering_processor_press',chance: 80.0},
          {item: 'create:iron_sheet',chance: 20.0},
        ],
        loops: 4
    });
    event.custom({//硅模板
        type: 'create:sequenced_assembly',
        ingredient: {item: 'create:iron_sheet'},
        transitionalItem: {item: 'create:incomplete_precision_mechanism'},
        sequence: [
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:silicon'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'minecraft:iron_nugget'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]}],
        results: [
          {item: 'ae2:silicon_press',chance: 80.0},
          {item: 'create:iron_sheet',chance: 20.0},
        ],
        loops: 4
    });
    event.custom({//压印机
        type: 'create:sequenced_assembly',
        ingredient: {item: 'immersiveengineering:rs_engineering'},
        transitionalItem: {item: 'create:incomplete_precision_mechanism'},
        sequence: [
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:fluix_crystal'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'minecraft:redstone'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'minecraft:piston'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]}],
        results: [
          {item: 'ae2:inscriber',chance: 80.0},
          {item: 'immersiveengineering:rs_engineering',chance: 20.0},
        ],
        loops: 3
    });
    event.custom({//ME接口
        type: 'create:sequenced_assembly',
        ingredient: {item: 'immersiveengineering:rs_engineering'},
        transitionalItem: {item: 'create:incomplete_precision_mechanism'},
        sequence: [
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:engineering_processor'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:formation_core'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:annihilation_core'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:calculation_processor'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:fluix_crystal'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:fluix_glass_cable'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]}],
        results: [
          {item: 'ae2:interface',chance: 80.0},
          {item: 'immersiveengineering:rs_engineering',chance: 20.0},
        ],
        loops: 5
    });
    event.custom({//样板终端
        type: 'create:sequenced_assembly',
        ingredient: {item: 'immersiveengineering:rs_engineering'},
        transitionalItem: {item: 'create:incomplete_precision_mechanism'},
        sequence: [
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:calculation_processor'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:formation_core'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:annihilation_core'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:engineering_processor'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:charged_certus_quartz_crystal'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:fluix_glass_cable'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]}],
        results: [
          {item: 'ae2:pattern_provider',chance: 80.0},
          {item: 'immersiveengineering:rs_engineering',chance: 20.0},
        ],
        loops: 5
    });
    event.custom({//合成单元
        type: 'create:sequenced_assembly',
        ingredient: {item: 'immersiveengineering:rs_engineering'},
        transitionalItem: {item: 'create:incomplete_precision_mechanism'},
        sequence: [
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:formation_core'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:annihilation_core'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:calculation_processor'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:engineering_processor'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:logic_processor'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:fluix_crystal'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ae2:fluix_glass_cable'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]}],
        results: [
          {item: 'ae2:crafting_unit',chance: 80.0},
          {item: 'immersiveengineering:rs_engineering',chance: 20.0},
        ],
        loops: 5
    });
    event.custom({//ME超级存储外壳
      type: 'create:sequenced_assembly',
      ingredient: {item: 'ae2:blank_pattern'},
      transitionalItem: {item: 'create:incomplete_precision_mechanism'},
      sequence: [
        {type: 'create:deploying',ingredients: [
          {item: 'create:incomplete_precision_mechanism'},
          {item: 'ae2:item_cell_housing'}],
        results: [{item: 'create:incomplete_precision_mechanism'}]},,
       {type: 'create:deploying',ingredients: [
          {item: 'create:incomplete_precision_mechanism'},
          {item: 'ae2:fluid_cell_housing'}],
        results: [{item: 'create:incomplete_precision_mechanism'}]},,
       {type: 'create:deploying',ingredients: [
          {item: 'create:incomplete_precision_mechanism'},
          {item: 'appmek:chemical_cell_housing'}],
        results: [{item: 'create:incomplete_precision_mechanism'}]},,
       {type: 'create:deploying',ingredients: [
          {item: 'create:incomplete_precision_mechanism'},
          {item: 'ae2things:disk_housing'}],
        results: [{item: 'create:incomplete_precision_mechanism'}]},,
       {type: 'create:deploying',ingredients: [
          {item: 'create:incomplete_precision_mechanism'},
          {item: 'megacells:mega_item_cell_housing'}],
        results: [{item: 'create:incomplete_precision_mechanism'}]},,
       {type: 'create:deploying',ingredients: [
          {item: 'create:incomplete_precision_mechanism'},
          {item: 'megacells:mega_fluid_cell_housing'}],
        results: [{item: 'create:incomplete_precision_mechanism'}]},,
       {type: 'create:deploying',ingredients: [
          {item: 'create:incomplete_precision_mechanism'},
          {item: 'megacells:mega_chemical_cell_housing'}],
        results: [{item: 'create:incomplete_precision_mechanism'}]},,
       {type: 'create:deploying',ingredients: [
          {item: 'create:incomplete_precision_mechanism'},
          {item: 'ae2additions:disk_chemical_housing'}],
        results: [{item: 'create:incomplete_precision_mechanism'}]},,
       {type: 'create:deploying',ingredients: [
          {item: 'create:incomplete_precision_mechanism'},
          {item: 'ae2additions:disk_fluid_housing'}],
        results: [{item: 'create:incomplete_precision_mechanism'}]},,
       {type: 'create:deploying',ingredients: [
          {item: 'create:incomplete_precision_mechanism'},
          {item: 'appbot:mana_cell_housing'}],
        results: [{item: 'create:incomplete_precision_mechanism'}]}],
      results: [
        {item: 'ae2additions:super_cell_housing',chance: 50.0},
        {item: 'ae2:blank_pattern',chance: 50.0},
      ],
      loops: 2
  });
    event.custom({//花肥
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:bone_meal'},
        transitionalItem: {item: 'create:incomplete_precision_mechanism'},
        sequence: [
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ars_nouveau:abjuration_essence'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ars_nouveau:conjuration_essence'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ars_nouveau:air_essence'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ars_nouveau:earth_essence'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ars_nouveau:fire_essence'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ars_nouveau:manipulation_essence'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'create:incomplete_precision_mechanism'},
              {item: 'ars_nouveau:water_essence'}],
            results: [{item: 'create:incomplete_precision_mechanism'}]}
        ],
        results: [
          {item: 'botania:fertilizer',chance: 50.0},
          {item: 'minecraft:bone_meal',chance: 50.0},
        ],
        loops: 10
    });
    event.custom({//精密构件
        "type": "create:sequenced_assembly",
        "ingredient": {"tag": "forge:plates/gold"},
        "transitionalItem": {"item": "create:incomplete_precision_mechanism"},
        "sequence": [
          {"type": "create:deploying",
            "ingredients": [
              {"item": "create:incomplete_precision_mechanism"},
              {"item": "create:cogwheel"}],
            "results": [
              {"item": "create:incomplete_precision_mechanism"}]},
              {"type": "create:deploying",
            "ingredients": [
              {"item": "create:incomplete_precision_mechanism"},
              {"item": "create:large_cogwheel"}],
            "results": [
              {"item": "create:incomplete_precision_mechanism"}]},
              {"type": "create:deploying",
            "ingredients": [
              {"item": "create:incomplete_precision_mechanism"},
              {"tag": "forge:nuggets/iron"}],
            "results": [
              {"item": "create:incomplete_precision_mechanism"}]}],
        "results": [
          {"item": "create:precision_mechanism","chance": 120.0},
          {"item": "create:golden_sheet","chance": 8.0},
          {"item": "create:andesite_alloy","chance": 8.0},
          {"item": "create:cogwheel","chance": 5.0},
          {"item": "minecraft:gold_nugget","chance": 3.0},
          {"item": "create:shaft","chance": 2.0},
          {"item": "create:crushed_raw_gold","chance": 2.0},
          {"item": "minecraft:iron_ingot"},
          {"item": "minecraft:clock"}],
        "loops": 5
    });
});