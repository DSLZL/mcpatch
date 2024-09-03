function addShapedRecipe(event, result, pattern, ingredients) {event.shaped(result, pattern, ingredients);}// 定义一个用于添加3*3合成配方的函数

onEvent('recipes', event => {
const shapedRecipes = [
        {result: 'ewcraft:ludan', 
        pattern: ['AAA', 
                  'A A', 
                  'AAA'], 
        ingredients: {
            A: 'ewcraft:qianzhu',  
    }}];
    event.custom({//氨
        type: "vintageimprovements:pressurizing",
        heatRequirement: "heated",
        ingredients: [
                {fluid: 'chemlib:nitrogen_fluid',amount: 50},
                {fluid: 'mekanism:hydrogen',amount: 150}],
        results: [
                {fluid: 'chemlib:ammonia_fluid',amount: 150}],
        processingTime: 400
    });
    event.custom({//一氧化氮
        type: "vintageimprovements:pressurizing",
        heatRequirement: "heated",
        ingredients: [
                {fluid: 'chemlib:ammonia_fluid',amount: 70},
                {fluid: 'mekanism:oxygen',amount: 130}],
        results: [
                {fluid: 'chemlib:nitric_oxide_fluid',amount: 150},
                {fluid: 'minecraft:water',amount: 50}],
        processingTime: 400
    });
    event.custom({//二氧化氮
        type: "vintageimprovements:pressurizing",
        heatRequirement: "heated",
        ingredients: [
                {fluid: 'chemlib:nitric_oxide_fluid',amount: 100},
                {fluid: 'mekanism:oxygen',amount: 50}],
        results: [
                {fluid: 'chemlib:nitrogen_dioxide_fluid',amount: 150}],
        processingTime: 400
    });
    event.custom({//硝酸
        type: "vintageimprovements:pressurizing",
        heatRequirement: "heated",
        ingredients: [
                {fluid: 'chemlib:nitrogen_dioxide_fluid',amount: 150},
                {fluid: 'minecraft:water',amount: 50}],
        results: [
                {fluid: 'chemlib:nitric_acid_fluid',amount: 200}],
        processingTime: 400
    });
    event.custom({//12g
        type: "vintageimprovements:pressurizing",
        heatRequirement: "heated",
        ingredients: [
                {tag: 'forge:ingots/brass'},
                {item: 'prma:12g_casing_cast'}],
        results: [
                {item: 'prma:12g_casing_cast', chance: 0.8},
                {item:'8x prma:12g_casing'}],
        processingTime: 100
    });
    event.custom({//9mm弹壳
        type: "vintageimprovements:pressurizing",
        heatRequirement: "heated",
        ingredients: [
                {tag: 'forge:ingots/brass'},
                {item: 'prma:9mm_casing_cast'}],
        results: [
                {item: 'prma:9mm_casing_cast', chance: 0.8},
                {item:'8x prma:9mm_casing'}],
        processingTime: 100
    });
    event.custom({//9mm弹头
        type: "vintageimprovements:pressurizing",
        heatRequirement: "heated",
        ingredients: [
                {tag: 'forge:ingots/copper'},
                {item: 'prma:9mm_head_cast'}],
        results: [
                {item: 'prma:9mm_head_cast', chance: 0.8},
                {item:'6x prma:9mm_head'}],
        processingTime: 100
    });
    event.custom({//7.62x39弹壳
        type: "vintageimprovements:pressurizing",
        heatRequirement: "heated",
        ingredients: [
                {tag: 'forge:ingots/brass'},
                {item: 'prma:762x39_casing_cast'}],
        results: [
                {item: 'prma:762x39_casing_cast', chance: 0.8},
                {item:'8x prma:762x39_casing'}],
        processingTime: 100
    });
    event.custom({//7.62x39弹头
        type: "vintageimprovements:pressurizing",
        heatRequirement: "heated",
        ingredients: [
                {tag: 'forge:ingots/copper'},
                {item: 'prma:762x39_head_cast'}],
        results: [
                {item: 'prma:762x39_head_cast', chance: 0.8},
                {item:'6x prma:762x39_head'}],
        processingTime: 100
    });
    event.custom({//556x45弹壳
        type: "vintageimprovements:pressurizing",
        heatRequirement: "heated",
        ingredients: [
                {tag: 'forge:ingots/brass'},
                {item: 'prma:762x39_casing_cast'}],
        results: [
                {item: 'prma:762x39_casing_cast', chance: 0.8},
                {item:'8x prma:556x45_casing'}],
        processingTime: 100
    });
    event.custom({//556x45弹头
        type: "vintageimprovements:pressurizing",
        heatRequirement: "heated",
        ingredients: [
                {tag: 'forge:ingots/copper'},
                {item: 'prma:762x39_head_cast'}],
        results: [
                {item: 'prma:762x39_head_cast', chance: 0.8},
                {item:'6x prma:556x45_head'}],
        processingTime: 100
    });
    event.custom({//338弹壳
        type: "vintageimprovements:pressurizing",
        heatRequirement: "heated",
        ingredients: [
                {tag: 'forge:ingots/brass'},
                {item: 'prma:338_casing_cast'}],
        results: [
                {item: 'prma:338_casing_cast', chance: 0.8},
                {item:'6x prma:338_casing'}],
        processingTime: 100
    });
    event.custom({//338弹头（钨弹头）
        type: "vintageimprovements:pressurizing",
        heatRequirement: "heated",
        ingredients: [
                {tag: 'forge:ingots/tungsten'},
                {item: 'prma:338_head_cast'}],
        results: [
                {item: 'prma:338_head_cast', chance: 0.8},
                {item:'4x prma:338_head'}],
        processingTime: 100
    });
    shapedRecipes.forEach(recipe => addShapedRecipe(event, recipe.result, recipe.pattern, recipe.ingredients));
});