onEvent('recipes', event => {
    event.custom({//击锤
        type: 'create:sequenced_assembly',
        ingredient: { item: 'chemlib:tungsten_ingot' },
        transitionalItem: { item: 'ewcraft:jichui' },
        sequence: [
            {
                type: "create:cutting",
                ingredients: [{ item: 'chemlib:tungsten_ingot' },],
                results: [{ item: 'ewcraft:jichui' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'chemlib:tungsten_ingot' },],
                results: [{ item: 'ewcraft:jichui' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'chemlib:tungsten_ingot' },],
                results: [{ item: 'ewcraft:jichui' }]
            },
        ],
        results: [
            { item: 'ewcraft:jichui', chance: 90.0 },
            { item: 'chemlib:tungsten_nugget', chance: 10.0 },
        ],
        loops: 6
    }); 
    event.custom({//机匣
        type: 'create:sequenced_assembly',
        ingredient: { item: 'prma:glock_17_receiver_blueprint' },
        transitionalItem: { item: 'prma:glock_17_receiver' },
        sequence: [
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:glock_17_receiver_blueprint' },],
                results: [{ item: 'prma:glock_17_receiver' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:glock_17_receiver_blueprint' },],
                results: [{ item: 'prma:glock_17_receiver' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:glock_17_receiver_blueprint' },],
                results: [{ item: 'prma:glock_17_receiver' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:glock_17_receiver_blueprint' },],
                results: [{ item: 'prma:glock_17_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:glock_17_receiver_blueprint' },
                    { item: 'immersiveengineering:plate_steel' }],
                results: [{ item: 'prma:glock_17_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:glock_17_receiver_blueprint' },
                    { item: 'prma:flat_head_screw' }],
                results: [{ item: 'prma:glock_17_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:glock_17_receiver_blueprint' },
                    { item: 'prma:flat_head_screw' }],
                results: [{ item: 'prma:glock_17_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:glock_17_receiver_blueprint' },
                    { item: 'prma:m_screw' }],
                results: [{ item: 'prma:glock_17_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:glock_17_receiver_blueprint' },
                    { item: 'prma:m_screw' }],
                results: [{ item: 'prma:glock_17_receiver' }]
            },

        ],
        results: [
            { item: 'prma:glock_17_receiver', chance: 90.0 },
            { item: 'chemlib:tungsten_nugget', chance: 10.0 },
        ],
        loops: 2
    });
    event.custom({//上机匣
        type: 'create:sequenced_assembly',
        ingredient: { item: 'prma:glock_17_upper_receiver_blueprint' },
        transitionalItem: { item: 'prma:glock_17_upper_receiver' },
        sequence: [
            {
                type: "create:pressing",
                ingredients: [{ item: 'immersiveengineering:plate_steel' },],
                results: [{ item: 'prma:glock_17_upper_receiver' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'immersiveengineering:plate_steel' },],
                results: [{ item: 'prma:glock_17_upper_receiver' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'immersiveengineering:plate_steel' },],
                results: [{ item: 'prma:glock_17_upper_receiver' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'immersiveengineering:plate_steel' },],
                results: [{ item: 'prma:glock_17_upper_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'immersiveengineering:plate_steel' },
                    { item: 'immersiveengineering:plate_steel' }],
                results: [{ item: 'prma:glock_17_upper_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'immersiveengineering:plate_steel' },
                    { item: 'prma:m_screw' }],
                results: [{ item: 'prma:glock_17_upper_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'immersiveengineering:plate_steel' },
                    { item: 'prma:m_screw' }],
                results: [{ item: 'prma:glock_17_upper_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'immersiveengineering:plate_steel' },
                    { item: 'prma:flat_head_screw' }],
                results: [{ item: 'prma:glock_17_upper_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'immersiveengineering:plate_steel' },
                    { item: 'prma:flat_head_screw' }],
                results: [{ item: 'prma:glock_17_upper_receiver' }]
            },
        ],
        results: [
            { item: 'prma:glock_17_upper_receiver', chance: 90.0 },
            { item: 'chemlib:tungsten_nugget', chance: 10.0 },
        ],
        loops: 2
    });
    event.custom({//弹匣
        type: 'create:sequenced_assembly',
        ingredient: { item: 'prma:glock_17_magazine_blueprint' },
        transitionalItem: { item: 'prma:glock_17_magazine' },
        sequence: [
            {
                type: 'create:deploying', ingredients: [
                    { item: 'industrialforegoing:plastic' },
                    { item: 'industrialforegoing:plastic' }],
                results: [{ item: 'prma:glock_17_magazine' }]
            },
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'industrialforegoing:plastic' },],
                results: [{ item: 'prma:glock_17_magazine' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'industrialforegoing:plastic' },
                    { item: 'vintageimprovements:steel_spring' }],
                results: [{ item: 'prma:glock_17_magazine' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'industrialforegoing:plastic' },
                    { item: 'industrialforegoing:plastic' }],
                results: [{ item: 'prma:glock_17_magazine' }]
            },
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'industrialforegoing:plastic' },],
                results: [{ item: 'prma:glock_17_magazine' }]
            },
        ],
        results: [
            { item: 'prma:glock_17_magazine', chance: 90.0 },
            { item: 'industrialforegoing:plastic', chance: 10.0 },
        ],
        loops: 2
    });
    event.custom({//扳机
        type: 'create:sequenced_assembly',
        ingredient: { item: 'prma:glock_17_trigger_blueprint' },
        transitionalItem: { item: 'prma:glock_17_trigger' },
        sequence: [
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'industrialforegoing:plastic' },],
                results: [{ item: 'prma:glock_17_trigger' }],
                energy: 2000,
	            maxChargeRate: 50
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'industrialforegoing:plastic' },
                    { item: 'create:precision_mechanism' }],
                results: [{ item: 'prma:glock_17_trigger' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'industrialforegoing:plastic' },
                    { item: 'vintageimprovements:steel_spring' }],
                results: [{ item: 'prma:glock_17_trigger' }]
            },
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'industrialforegoing:plastic' },],
                results: [{ item: 'prma:glock_17_trigger' }],
                energy: 2000,
	            maxChargeRate: 50
            },
        ],
        results: [
            { item: 'prma:glock_17_trigger', chance: 90.0 },
            { item: 'industrialforegoing:plastic', chance: 10.0 },
        ],
        loops: 2
    });
    event.custom({//射击选择器
        type: 'create:sequenced_assembly',
        ingredient: { item: 'prma:glock_17_fire_selector_blueprint' },
        transitionalItem: { item: 'prma:glock_17_fire_selector' },
        sequence: [
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'immersiveengineering:plate_steel' },],
                results: [{ item: 'prma:glock_17_fire_selector' }],
                energy: 2000,
	            maxChargeRate: 50
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'immersiveengineering:plate_steel' },
                    { item: 'create:precision_mechanism' }],
                results: [{ item: 'prma:glock_17_fire_selector' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'immersiveengineering:plate_steel' },
                    { item: 'immersiveengineering:plate_steel' }],
                results: [{ item: 'prma:glock_17_fire_selector' }]
            },
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'immersiveengineering:plate_steel' },],
                results: [{ item: 'prma:glock_17_fire_selector' }],
                energy: 2000,
	            maxChargeRate: 50
            },
        ],
        results: [
            { item: 'prma:glock_17_fire_selector', chance: 90.0 },
            { item: 'immersiveengineering:plate_steel', chance: 10.0 },
        ],
        loops: 1
    });
    event.custom({//把手
        type: 'create:sequenced_assembly',
        ingredient: { item: 'prma:glock_17_grip_blueprint' },
        transitionalItem: { item: 'prma:glock_17_grip' },
        sequence: [
            {
                type: 'create:deploying', ingredients: [
                    { item: 'immersiveengineering:plate_steel' },
                    { item: 'industrialforegoing:plastic' }],
                results: [{ item: 'prma:glock_17_grip' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'immersiveengineering:plate_steel' },
                    { item: 'immersiveengineering:plate_steel' }],
                results: [{ item: 'prma:glock_17_grip' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'immersiveengineering:plate_steel' },],
                results: [{ item: 'prma:glock_17_grip' }]
            },
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'immersiveengineering:plate_steel' },],
                results: [{ item: 'prma:glock_17_grip' }],
                energy: 2000,
	            maxChargeRate: 50
            },
        ],
        results: [
            { item: 'prma:glock_17_grip', chance: 90.0 },
            { item: 'immersiveengineering:plate_steel', chance: 5.0 },
            { item: 'industrialforegoing:plastic', chance: 5.0 },
        ],
        loops: 2
    });
//组合
    event.recipes.create.mechanical_crafting(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:glock_17"}'), [
        'IKBI',
        'ACDJ',
        'HEGF'
        ], {
        A: 'prma:glock_17_barrel',//枪管
        B: 'prma:glock_17_upper_receiver',//上机匣
        C:'prma:glock_17_receiver',//机匣
        D:'prma:glock_17_fire_selector',//选择器
        E:'prma:glock_17_trigger',//扳机
        F:'prma:glock_17_magazine',//弹匣
        G:'prma:glock_17_grip',//把手
        H:'pneumaticcraft:glycerol',//润滑油
        I:'prma:flat_head_screw',//螺丝
        J:'prma:m_screw',//M型螺丝
        K:'vintageimprovements:steel_spring'//弹簧
      });
});