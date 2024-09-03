onEvent('recipes', event => {//彩虹方块
    event.custom({
        "type":"immersiveengineering:crusher",
        "secondaries":[
            {"chance":0.7,"output":{"item":"16x ewcraft:suigukuang"}},
            {"chance":0.7,"output":{"item":"16x ewcraft:suiwukuang"}},
            {"chance":0.7,"output":{"item":"16x ewcraft:suitukuang"}},
            {"chance":0.7,"output":{"item":"16x ewcraft:suipengkuang"}},
            {"chance":0.7,"output":{"item":"16x ewcraft:suimukuang"}},
            {"chance":0.7,"output":{"item":"16x ewcraft:suilikuang"}},
            {"chance":0.7,"output":{"item":"16x ewcraft:suipikuang"}},
            {"chance":0.7,"output":{"item":"16x ewcraft:suimeikuang"}},
            {"chance":0.7,"output":{"item":"16x ewcraft:suitaikuang"}},
            {"chance":0.7,"output":{"item":"16x ewcraft:suimengkuang"}},
            {"chance":0.7,"output":{"item":"16x ewcraft:suigekuang"}},
            {"chance":0.7,"output":{"item":"16x ewcraft:suifankuang"}},
            {"chance":0.7,"output":{"item":"16x exnihilomekanism:osmium_pieces"}},
            {"chance":0.7,"output":{"item":"16x exnihilosequentia:iron_pieces"}},
            {"chance":0.7,"output":{"item":"16x exnihilosequentia:gold_pieces"}},
            {"chance":0.7,"output":{"item":"16x exnihilosequentia:copper_pieces"}},
            {"chance":0.7,"output":{"item":"16x exnihilosequentia:lead_pieces"}},
            {"chance":0.7,"output":{"item":"16x exnihilosequentia:nickel_pieces"}},
            {"chance":0.7,"output":{"item":"16x exnihilosequentia:silver_pieces"}},
            {"chance":0.7,"output":{"item":"16x exnihilosequentia:tin_pieces"}},
            {"chance":0.7,"output":{"item":"16x exnihilosequentia:aluminum_pieces"}},
            {"chance":0.7,"output":{"item":"16x exnihilosequentia:platinum_pieces"}},
            {"chance":0.7,"output":{"item":"16x exnihilosequentia:uranium_pieces"}},
            {"chance":0.7,"output":{"item":"16x exnihilosequentia:zinc_pieces"}},
        ],
        "result":{"item":"ewcraft:caihongfangkuai"},
        "input":{"item":"ewcraft:caihongfangkuai"},
        "energy":6000
        });
});
onEvent('recipes', event => {//无暇水晶
    event.custom({
        "type":"immersiveengineering:crusher",
        "secondaries":[
            {"chance":0.8,"output":{"item":"thermal:apatite"}},
            {"chance":0.8,"output":{"item":"thermal:cinnabar"}},
            {"chance":0.8,"output":{"item":"thermal:niter"}},
            {"chance":0.8,"output":{"item":"thermal:sulfur"}},
            {"chance":0.8,"output":{"item":"minecraft:quartz"}},
            {"chance":0.8,"output":{"item":"ae2:certus_quartz_crystal"}},
            {"chance":0.8,"output":{"item":"minecraft:emerald"}},
            {"chance":0.8,"output":{"item":"minecraft:coal"}},
            {"chance":0.8,"output":{"item":"minecraft:redstone"}},
            {"chance":0.8,"output":{"item":"minecraft:lapis_lazuli"}},
            {"chance":0.8,"output":{"item":"minecraft:diamond"}},
            {"chance":0.8,"output":{"item":"minecraft:glowstone_dust"}},
            {"chance":0.8,"output":{"item":"tconstruct:ichor_slime_crystal"}},
            {"chance":0.8,"output":{"item":"tconstruct:sky_slime_crystal"}},
            {"chance":0.8,"output":{"item":"tconstruct:ender_slime_crystal"}},
            {"chance":0.8,"output":{"item":"tconstruct:earth_slime_crystal"}},
            {"chance":0.8,"output":{"item":"minecraft:amethyst_shard"}}
        ],
        "result":{"item":"ewcraft:wuxiashuijin"},
        "input":{"item":"ewcraft:wuxiashuijin"},
        "energy":6000
        });
});