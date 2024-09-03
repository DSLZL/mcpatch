onEvent('recipes', event => {
    event.custom({//上机匣
        type: 'create:sequenced_assembly',
        ingredient: { item: 'prma:m249_upper_receiver_blueprint' },
        transitionalItem: { item: 'prma:m249_upper_receiver' },
        sequence: [
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:m249_upper_receiver_blueprint' },],
                results: [{ item: 'prma:m249_upper_receiver' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:m249_upper_receiver_blueprint' },],
                results: [{ item: 'prma:m249_upper_receiver' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:m249_upper_receiver_blueprint' },],
                results: [{ item: 'prma:m249_upper_receiver' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:m249_upper_receiver_blueprint' },],
                results: [{ item: 'prma:m249_upper_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:m249_upper_receiver_blueprint' },
                    { item: 'immersiveengineering:plate_steel' }],
                results: [{ item: 'prma:m249_upper_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:m249_upper_receiver_blueprint' },
                    { item: 'prma:m_screw' }],
                results: [{ item: 'prma:m249_upper_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:m249_upper_receiver_blueprint' },
                    { item: 'prma:m_screw' }],
                results: [{ item: 'prma:m249_upper_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:m249_upper_receiver_blueprint' },
                    { item: 'prma:flat_head_screw' }],
                results: [{ item: 'prma:m249_upper_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:m249_upper_receiver_blueprint' },
                    { item: 'prma:flat_head_screw' }],
                results: [{ item: 'prma:m249_upper_receiver' }]
            },
        ],
        results: [
            { item: 'prma:m249_upper_receiver', chance: 90.0 },
            { item: 'chemlib:tungsten_nugget', chance: 10.0 },
        ],
        loops: 2
    });    
    event.custom({//下机匣
        type: 'create:sequenced_assembly',
        ingredient: { item: 'prma:m249_lower_receiver_blueprint' },
        transitionalItem: { item: 'prma:m249_lower_receiver' },
        sequence: [
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:m249_lower_receiver_blueprint' },],
                results: [{ item: 'prma:m249_lower_receiver' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:m249_lower_receiver_blueprint' },],
                results: [{ item: 'prma:m249_lower_receiver' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:m249_lower_receiver_blueprint' },],
                results: [{ item: 'prma:m249_lower_receiver' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:m249_lower_receiver_blueprint' },],
                results: [{ item: 'prma:m249_lower_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:m249_lower_receiver_blueprint' },
                    { item: 'immersiveengineering:plate_steel' }],
                results: [{ item: 'prma:m249_lower_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:m249_lower_receiver_blueprint' },
                    { item: 'prma:flat_head_screw' }],
                results: [{ item: 'prma:m249_lower_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:m249_lower_receiver_blueprint' },
                    { item: 'prma:flat_head_screw' }],
                results: [{ item: 'prma:m249_lower_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:m249_lower_receiver_blueprint' },
                    { item: 'prma:m_screw' }],
                results: [{ item: 'prma:m249_lower_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:m249_lower_receiver_blueprint' },
                    { item: 'prma:m_screw' }],
                results: [{ item: 'prma:m249_lower_receiver' }]
            },

        ],
        results: [
            { item: 'prma:m249_lower_receiver', chance: 90.0 },
            { item: 'chemlib:tungsten_nugget', chance: 10.0 },
        ],
        loops: 2
    });
    event.custom({//弹匣
        type: 'create:sequenced_assembly',
        ingredient: { item: 'prma:m249_magazine_blueprint' },
        transitionalItem: { item: 'prma:m249_magazine' },
        sequence: [
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:m249_magazine_blueprint' },
                    { item: 'industrialforegoing:plastic' }],
                results: [{ item: 'prma:m249_magazine' }]
            },
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'prma:m249_magazine_blueprint' },],
                results: [{ item: 'prma:m249_magazine' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:m249_magazine_blueprint' },
                    { item: 'vintageimprovements:steel_spring' }],
                results: [{ item: 'prma:m249_magazine' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:m249_magazine_blueprint' },
                    { item: 'industrialforegoing:plastic' }],
                results: [{ item: 'prma:m249_magazine' }]
            },
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'prma:m249_magazine_blueprint' },],
                results: [{ item: 'prma:m249_magazine' }]
            },
        ],
        results: [
            { item: 'prma:m249_magazine', chance: 90.0 },
            { item: 'prma:m249_magazine_blueprint', chance: 10.0 },
        ],
        loops: 2
    });
    event.custom({//护木
        type: 'create:sequenced_assembly',
        ingredient: { item: 'prma:m249_handguard_blueprint' },
        transitionalItem: { item: 'prma:m249_handguard' },
        sequence: [
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'prma:m249_handguard_blueprint' },],
                results: [{ item: 'prma:m249_handguard' }],
                energy: 2000,
	            maxChargeRate: 50
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:m249_handguard_blueprint' },
                    { item: 'create:precision_mechanism' }],
                results: [{ item: 'prma:m249_handguard' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:m249_handguard_blueprint' },
                    { item: 'vintageimprovements:steel_spring' }],
                results: [{ item: 'prma:m249_handguard' }]
            },
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'prma:m249_handguard_blueprint' },],
                results: [{ item: 'prma:m249_handguard' }],
                energy: 2000,
	            maxChargeRate: 50
            },
        ],
        results: [
            { item: 'prma:m249_handguard', chance: 90.0 },
            { item: 'prma:m249_handguard_blueprint', chance: 10.0 },
        ],
        loops: 2
    });
    event.custom({//枪托
        type: 'create:sequenced_assembly',
        ingredient: { item: 'prma:m249_stock_blueprint' },
        transitionalItem: { item: 'prma:m249_stock' },
        sequence: [
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'prma:m249_stock_blueprint' },],
                results: [{ item: 'prma:m249_stock' }],
                energy: 2000,
	            maxChargeRate: 50
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:m249_stock_blueprint' },
                    { item: 'create:precision_mechanism' }],
                results: [{ item: 'prma:m249_stock' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:m249_stock_blueprint' },
                    { item: 'immersiveengineering:plate_steel' }],
                results: [{ item: 'prma:m249_stock' }]
            },
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'prma:m249_stock_blueprint' },],
                results: [{ item: 'prma:m249_stock' }],
                energy: 2000,
	            maxChargeRate: 50
            },
        ],
        results: [
            { item: 'prma:m249_stock', chance: 90.0 },
            { item: 'prma:m249_stock_blueprint', chance: 10.0 },
        ],
        loops: 1
    });
    event.custom({//把手
        type: 'create:sequenced_assembly',
        ingredient: { item: 'prma:m249_grip_blueprint' },
        transitionalItem: { item: 'prma:m249_grip' },
        sequence: [
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:m249_grip_blueprint' },
                    { item: 'industrialforegoing:plastic' }],
                results: [{ item: 'prma:m249_grip' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:m249_grip_blueprint' },
                    { item: 'immersiveengineering:plate_steel' }],
                results: [{ item: 'prma:m249_grip' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:m249_grip_blueprint' },],
                results: [{ item: 'prma:m249_grip' }]
            },
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'prma:m249_grip_blueprint' },],
                results: [{ item: 'prma:m249_grip' }],
                energy: 2000,
	            maxChargeRate: 50
            },
        ],
        results: [
            { item: 'prma:m249_grip', chance: 90.0 },
            { item: 'prma:m249_grip_blueprint', chance: 5.0 },
            { item: 'industrialforegoing:plastic', chance: 5.0 },
        ],
        loops: 2
    });
//组合
    event.recipes.create.mechanical_crafting(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:m249",HasBulletInBarrel:1b}'), [
        'HIKJI',
        'ADBCE',
        'HIFGI'
        ], {
        A:'prma:m249_barrel',//枪管
        B:'prma:m249_upper_receiver',//上机匣
        C:'prma:m249_lower_receiver',//机匣
        D:'prma:m249_handguard',//护木
        E:'prma:m249_stock',//枪托
        F:'prma:m249_magazine',//弹匣
        G:'prma:m249_grip',//把手
        H:'pneumaticcraft:glycerol',//润滑油
        I:'prma:flat_head_screw',//螺丝
        J:'prma:m_screw',//M型螺丝
        K:'vintageimprovements:steel_spring'//弹簧
      });
});