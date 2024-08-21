onEvent('recipes', event => {
    event.custom({
        type:'mekanism:combining',
        mainInput:{ingredient:{item:'minecraft:sunflower'}},
        extraInput:{ingredient:{item:'extendedcrafting:luminessence_block'}},
        output:{item:'ewcraft:xiaokuaiyangguanghuahewu'},
        energyRequired:1000000
      });
      event.custom({
        type:'mekanism:combining',
        mainInput:{ingredient:{item:'minecraft:sunflower'}},
        extraInput:{ingredient:{item:'mekanism:block_refined_glowstone'}},
        output:{item:'ewcraft:yangguanghuahewu'},
        energyRequired:9000000
      });
      event.custom({
          type:'mekanism:combining',
          mainInput:{ingredient:{item:'2x mekanism:hdpe_pellet'}},
          extraInput:{ingredient:{item:'mekanism:substrate'}},
          output:{item:'mekanism:hdpe_rod'}
      });
      event.custom({
          type:'mekanism:combining',
          mainInput:{ingredient:{item:'4x mekanism:hdpe_rod'}},
          extraInput:{ingredient:{item:'mekanism:substrate'}},
          output:{item:'mekanism:hdpe_sheet'}
      });
      event.custom({
          type:'mekanism:combining',
          mainInput:{ingredient:{item:'9x chemlib:titanium_nugget'}},
          extraInput:{ingredient:{item:'chemlib:titanium_nugget'}},
          output:{item:'chemlib:titanium_ingot'}
      });
});