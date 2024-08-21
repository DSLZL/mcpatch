onEvent('recipes', event => {
    event.custom({//时间核心
        "type": "extendedcrafting:compressor",
         "powerCost": 500000000,
         "inputCount": 1000000,
         "ingredient": {    "item": "minecraft:clock"  },
         "catalyst": {    "item": 'extendedcrafting:the_ultimate_catalyst'  },
         "result": {    "item": "ewcraft:shijianhexin"  }
     });
});