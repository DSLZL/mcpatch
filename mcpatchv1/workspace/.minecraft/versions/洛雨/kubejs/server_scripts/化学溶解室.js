onEvent('recipes', event => {
    event.custom({
        "input": [
          {"tag": "forge:ingots/iron"},
          {"tag": "forge:ingots/iron"},
          {"tag": "forge:ingots/gold"},
          {"tag": "forge:ingots/gold"},
          {"tag": "forge:ingots/bronze"},
          {"tag": "forge:ingots/bronze"}
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:1000}",
        "processingTime": 300,
        "output": 
        {"item": "industrialforegoing:pink_slime_ingot","count": 1},
        "type": "industrialforegoing:dissolution_chamber"
    });
});