onEvent('recipes', event => {
  event.custom({//底火
    type: "create:mixing",
    ingredients: [
    {item: 'minecraft:redstone'},
    {tag: 'forge:dusts/copper'},
    {fluid: "chemlib:nitric_acid_fluid",
     amount: 200}],
  results: [
    {item: 'prma:gunpowder_pellets'}
  ],
  heatRequirement: "heated"
  });
    event.custom({//9mm
        type: 'create:sequenced_assembly',
        ingredient: {item: 'prma:9mm_casing'},
        transitionalItem: {item: 'prma:9mm_unfinished'},
        sequence: [
           {type: 'create:deploying',ingredients: [
              {item: 'prma:9mm_unfinished'},
              {item: 'prma:gunpowder_pellets'}],
            results: [{item: 'prma:9mm_unfinished'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'prma:9mm_unfinished'},
              {item: 'minecraft:gunpowder'}],
            results: [{item: 'prma:9mm_unfinished'}]},
           {type: 'create:deploying',ingredients: [
              {item: 'prma:9mm_unfinished'},
              {item: 'prma:9mm_head'}],
            results: [{item: 'prma:9mm_unfinished'}]},
           {type: "create:pressing",
            ingredients: [{ item: 'prma:9mm_unfinished' },],
            results: [{ item: 'prma:9mm_casing' }]}],
        results: [
          {item: "tacz:ammo", nbt: {"AmmoId": "tacz:9mm"}, chance: 84.0},
          {item: 'prma:9mm_casing', chance: 16.0},
        ],
        loops: 1
    });
    event.custom({//7.62x39
      type: 'create:sequenced_assembly',
      ingredient: {item: 'prma:762x39_casing'},
      transitionalItem: {item: 'prma:762x39_unfinished'},
      sequence: [
         {type: 'create:deploying',ingredients: [
            {item: 'prma:762x39_unfinished'},
            {item: 'prma:gunpowder_pellets'}],
          results: [{item: 'prma:762x39_unfinished'}]},
         {type: 'create:deploying',ingredients: [
            {item: 'prma:762x39_unfinished'},
            {item: 'minecraft:gunpowder'}],
          results: [{item: 'prma:762x39_unfinished'}]},
         {type: 'create:deploying',ingredients: [
            {item: 'prma:762x39_unfinished'},
            {item: 'prma:762x39_head'}],
          results: [{item: 'prma:762x39_unfinished'}]},
         {type: "create:pressing",
          ingredients: [{ item: 'prma:762x39_unfinished' },],
          results: [{ item: 'prma:762x39_casing' }]}],
      results: [
        {item: "tacz:ammo", nbt: {"AmmoId": "tacz:762x39"}, chance: 80.0},
        {item: 'prma:762x39_casing', chance: 20.0},
      ],
      loops: 1
    });
    event.custom({//12霰弹
    type: 'create:sequenced_assembly',
    ingredient: {item: 'prma:12g_casing'},
    transitionalItem: {item: 'prma:12g_unfinished'},
    sequence: [
      {type: 'create:deploying',ingredients: [
        {item: 'prma:12g_unfinished'},
        {item: 'pneumaticcraft:plastic'}],
      results: [{item: 'prma:12g_unfinished'}]},
       {type: 'create:deploying',ingredients: [
          {item: 'prma:12g_unfinished'},
          {item: 'prma:gunpowder_pellets'}],
        results: [{item: 'prma:12g_unfinished'}]},
       {type: 'create:deploying',ingredients: [
          {item: 'prma:12g_unfinished'},
          {item: 'minecraft:gunpowder'}],
        results: [{item: 'prma:12g_unfinished'}]},
       {type: 'create:deploying',ingredients: [
          {item: 'prma:12g_unfinished'},
          {item: 'ewcraft:ludan'}],
        results: [{item: 'prma:12g_unfinished'}]},
       {type: "create:pressing",
        ingredients: [{ item: 'prma:12g_unfinished' },],
        results: [{ item: 'prma:12g_casing' }]}],
    results: [
      {item: "tacz:ammo", nbt: {"AmmoId": "tacz:12g"}, chance: 84.0},
      {item: 'prma:12g_casing', chance: 16.0},
    ],
    loops: 1
    });
    event.custom({//7.62x39
          type: 'create:sequenced_assembly',
          ingredient: {item: 'prma:762x39_casing'},
          transitionalItem: {item: 'prma:762x39_unfinished'},
          sequence: [
             {type: 'create:deploying',ingredients: [
                {item: 'prma:762x39_unfinished'},
                {item: 'prma:gunpowder_pellets'}],
              results: [{item: 'prma:762x39_unfinished'}]},
             {type: 'create:deploying',ingredients: [
                {item: 'prma:762x39_unfinished'},
                {item: 'minecraft:gunpowder'}],
             results: [{item: 'prma:762x39_unfinished'}]},
             {type: 'create:deploying',ingredients: [
                {item: 'prma:762x39_unfinished'},
                {item: 'prma:762x39_head'}],
              results: [{item: 'prma:762x39_unfinished'}]},
             {type: "create:pressing",
             ingredients: [{ item: 'prma:762x39_unfinished' },],
             results: [{ item: 'prma:762x39_casing' }]}],
          results: [
            {item: "tacz:ammo", nbt: {"AmmoId": "tacz:762x39"}, chance: 80.0},
            {item: 'prma:762x39_casing', chance: 20.0},
          ],
          loops: 1
    });
    event.custom({//5.56x45
      type: 'create:sequenced_assembly',
      ingredient: {item: 'prma:556x45_casing'},
      transitionalItem: {item: 'prma:556x45_unfinished'},
      sequence: [
         {type: 'create:deploying',ingredients: [
            {item: 'prma:556x45_unfinished'},
            {item: 'prma:gunpowder_pellets'}],
          results: [{item: 'prma:556x45_unfinished'}]},
         {type: 'create:deploying',ingredients: [
            {item: 'prma:556x45_unfinished'},
            {item: 'minecraft:gunpowder'}],
          results: [{item: 'prma:556x45_unfinished'}]},
         {type: 'create:deploying',ingredients: [
            {item: 'prma:556x45_unfinished'},
            {item: 'prma:556x45_head'}],
          results: [{item: 'prma:556x45_unfinished'}]},
         {type: "create:pressing",
          ingredients: [{ item: 'prma:556x45_unfinished' },],
          results: [{ item: 'prma:556x45_casing' }]}],
      results: [
        {item: "tacz:ammo", nbt: {"AmmoId": "tacz:556x45"}, chance: 80.0},
        {item: 'prma:556x45_casing', chance: 20.0},
      ],
      loops: 1
    });
    event.custom({//338
      type: 'create:sequenced_assembly',
      ingredient: {item: 'prma:338_casing'},
      transitionalItem: {item: 'prma:338_unfinished'},
      sequence: [
          {type: 'create:deploying',ingredients: [
            {item: 'prma:338_unfinished'},
            {item: 'prma:gunpowder_pellets'}],
          results: [{item: 'prma:338_unfinished'}]},
          {type: 'create:deploying',ingredients: [
            {item: 'prma:338_unfinished'},
            {item: 'prma:gunpowder_pellets'}],
          results: [{item: 'prma:338_unfinished'}]},
          {type: 'create:deploying',ingredients: [
            {item: 'prma:338_unfinished'},
            {item: 'minecraft:gunpowder'}],
          results: [{item: 'prma:338_unfinished'}]},
          {type: 'create:deploying',ingredients: [
            {item: 'prma:338_unfinished'},
            {item: 'minecraft:gunpowder'}],
          results: [{item: 'prma:338_unfinished'}]},
          {type: 'create:deploying',ingredients: [
            {item: 'prma:338_unfinished'},
            {item: 'prma:338_head'}],
          results: [{item: 'prma:338_unfinished'}]},
          {type: "create:pressing",
          ingredients: [{ item: 'prma:338_unfinished' },],
          results: [{ item: 'prma:338_unfinished' }]}],
      results: [
        {item: "tacz:ammo", nbt: {"AmmoId": "tacz:338"}, chance: 80.0},
        {item: 'prma:338_casing', chance: 20.0},
        {item: 'prma:338_head', chance: 20.0},
      ],
      loops: 1
    });
});