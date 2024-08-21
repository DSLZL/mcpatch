onEvent('recipes', event => {
    event.custom({
        type:'mekanism:reaction',
        itemInput:{
        ingredient:{item:'industrialforegoing:plastic'}},
        fluidInput:{tag:'forge:ethene',amount:500},
        gasInput:{gas:'mekanism:oxygen',amount:1000},
        energyRequired:100000,
        duration:120,
        itemOutput:{item:'mekanism:hdpe_pellet'}
    });
    event.custom({
      "type":"mekanism:reaction",
      "itemInput":{"ingredient":["ewcraft:yangguanghuahewu"]},
      "fluidInput":{"amount":1000,"fluid":"immersiveengineering:phenolic_resin"},
      "gasInput":{"amount":1000,"gas":"mekanism:fissile_fuel"},
      "duration":900,
      "itemOutput":{"item":"ewcraft:fujiyangguanghuahewu"},
      "gasOutput":{"gas":"mekanism:spent_nuclear_waste","amount":1000}
    });
});