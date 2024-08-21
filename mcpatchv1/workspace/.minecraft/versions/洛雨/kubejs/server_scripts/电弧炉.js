onEvent('recipes', event => {
    event.custom({
        type:'immersiveengineering:arc_furnace',
        input:[{item:'minecraft:andesite'}],
        results:{item:'create:andesite_alloy'},
        additives:[{base_ingredient:{tag:'forge:nuggets/steel'}}],
        secondaries:[{chance:0.95,output:{item:'create:andesite_alloy'}}],
        time:40,energy:10800
    });
    event.custom({
        type:'immersiveengineering:arc_furnace',
        input:[{item:'create:andesite_alloy'}],
        results:{item:'create:shaft',count:4},
        additives:[{item:'chemlib:tungsten_nugget'}],
        secondaries:[{chance:0.95,output:{item:'create:shaft',count:4}}],
        time:40,energy:10800
    });
});