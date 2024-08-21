onEvent('recipes', event => {
event.custom({//魔力钢
    type: 'botania:mana_infusion',
    input: {
      item: 'mekanism:ingot_refined_obsidian'
    },
    output: {
      item: 'botania:manasteel_ingot'
    },
    mana: 3000
  });
  event.custom({//魔力珍珠
    type: 'botania:mana_infusion',
    input: {
      item: 'mekanism:hdpe_pellet'
    },
    output: {
      item: 'botania:mana_pearl'
    },
    mana: 3000
  });
});