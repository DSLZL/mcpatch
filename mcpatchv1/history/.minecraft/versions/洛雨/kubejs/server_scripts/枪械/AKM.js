onEvent('recipes', event => {
    event.custom({//上机身
        type: 'create:sequenced_assembly',
        ingredient: { item: 'prma:ak47_upper_receiver_blueprint' },
        transitionalItem: { item: 'prma:ak47_upper_receiver' },
        sequence: [
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:ak47_upper_receiver_blueprint' },],
                results: [{ item: 'prma:ak47_upper_receiver' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:ak47_upper_receiver_blueprint' },],
                results: [{ item: 'prma:ak47_upper_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ak47_upper_receiver_blueprint' },
                    { item: 'immersiveengineering:plate_steel' }],
                results: [{ item: 'prma:ak47_upper_receiver' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:ak47_upper_receiver_blueprint' },],
                results: [{ item: 'prma:ak47_upper_receiver' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:ak47_upper_receiver_blueprint' },],
                results: [{ item: 'prma:ak47_upper_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ak47_upper_receiver_blueprint' },
                    { item: 'immersiveengineering:plate_steel' }],
                results: [{ item: 'prma:ak47_upper_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ak47_upper_receiver_blueprint' },
                    { item: 'prma:flat_head_screw' }],
                results: [{ item: 'prma:ak47_upper_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ak47_upper_receiver_blueprint' },
                    { item: 'prma:flat_head_screw' }],
                results: [{ item: 'prma:ak47_upper_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ak47_upper_receiver_blueprint' },
                    { item: 'prma:m_screw' }],
                results: [{ item: 'prma:ak47_upper_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ak47_upper_receiver_blueprint' },
                    { item: 'prma:m_screw' }],
                results: [{ item: 'prma:ak47_upper_receiver' }]
            },

        ],
        results: [
            { item: 'prma:ak47_upper_receiver', chance: 90.0 },
            { item: 'chemlib:tungsten_nugget', chance: 10.0 },
        ],
        loops: 2
    });
    event.custom({//下机身
        type: 'create:sequenced_assembly',
        ingredient: { item: 'prma:ak47_lower_receiver_blueprint' },
        transitionalItem: { item: 'prma:ak47_lower_receiver' },
        sequence: [
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:ak47_lower_receiver_blueprint' },],
                results: [{ item: 'prma:ak47_lower_receiver' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:ak47_lower_receiver_blueprint' },],
                results: [{ item: 'prma:ak47_lower_receiver' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:ak47_lower_receiver_blueprint' },],
                results: [{ item: 'prma:ak47_lower_receiver' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:ak47_lower_receiver_blueprint' },],
                results: [{ item: 'prma:ak47_lower_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ak47_lower_receiver_blueprint' },
                    { item: 'immersiveengineering:plate_steel' }],
                results: [{ item: 'prma:ak47_lower_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ak47_lower_receiver_blueprint' },
                    { item: 'prma:m_screw' }],
                results: [{ item: 'prma:ak47_lower_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ak47_lower_receiver_blueprint' },
                    { item: 'prma:m_screw' }],
                results: [{ item: 'prma:ak47_lower_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ak47_lower_receiver_blueprint' },
                    { item: 'prma:flat_head_screw' }],
                results: [{ item: 'prma:ak47_lower_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ak47_lower_receiver_blueprint' },
                    { item: 'prma:flat_head_screw' }],
                results: [{ item: 'prma:ak47_lower_receiver' }]
            },
        ],
        results: [
            { item: 'prma:ak47_lower_receiver', chance: 90.0 },
            { item: 'chemlib:tungsten_nugget', chance: 10.0 },
        ],
        loops: 2
    });
    event.custom({//弹匣
        type: 'create:sequenced_assembly',
        ingredient: { item: 'prma:ak47_magazine_blueprint' },
        transitionalItem: { item: 'prma:ak47_magazine' },
        sequence: [
            {
                type: 'create:deploying', ingredients: [
                    { item: 'industrialforegoing:plastic' },
                    { item: 'industrialforegoing:plastic' }],
                results: [{ item: 'prma:ak47_magazine' }]
            },
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'industrialforegoing:plastic' },],
                results: [{ item: 'prma:ak47_magazine' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'industrialforegoing:plastic' },
                    { item: 'vintageimprovements:steel_spring' }],
                results: [{ item: 'prma:ak47_magazine' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'industrialforegoing:plastic' },
                    { item: 'industrialforegoing:plastic' }],
                results: [{ item: 'prma:ak47_magazine' }]
            },
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'industrialforegoing:plastic' },],
                results: [{ item: 'prma:ak47_magazine' }]
            },
        ],
        results: [
            { item: 'prma:ak47_magazine', chance: 90.0 },
            { item: 'industrialforegoing:plastic', chance: 10.0 },
        ],
        loops: 2
    });
    event.custom({//护手
        type: 'create:sequenced_assembly',
        ingredient: { item: 'prma:ak47_handguard_blueprint' },
        transitionalItem: { item: 'prma:ak47_handguard' },
        sequence: [
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'industrialforegoing:plastic' },],
                results: [{ item: 'prma:ak47_handguard' }],
                energy: 2000,
	            maxChargeRate: 50
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'industrialforegoing:plastic' },
                    { item: 'create:precision_mechanism' }],
                results: [{ item: 'prma:ak47_handguard' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ak47_upper_receiver_blueprint' },
                    { item: 'immersiveengineering:plate_steel' }],
                results: [{ item: 'prma:ak47_upper_receiver' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'industrialforegoing:plastic' },
                    { item: 'vintageimprovements:steel_spring' }],
                results: [{ item: 'prma:ak47_handguard' }]
            },
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'industrialforegoing:plastic' },],
                results: [{ item: 'prma:ak47_handguard' }],
                energy: 2000,
	            maxChargeRate: 50
            },
        ],
        results: [
            { item: 'prma:ak47_handguard', chance: 90.0 },
            { item: 'industrialforegoing:plastic', chance: 10.0 },
        ],
        loops: 2
    });
    event.custom({//把手
        type: 'create:sequenced_assembly',
        ingredient: { item: 'prma:ak47_grip_blueprint' },
        transitionalItem: { item: 'prma:ak47_grip' },
        sequence: [
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ak47_grip_blueprint' },
                    { item: 'industrialforegoing:plastic' }],
                results: [{ item: 'prma:ak47_grip' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ak47_grip_blueprint' },
                    { item: 'immersiveengineering:plate_steel' }],
                results: [{ item: 'prma:ak47_grip' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:ak47_grip_blueprint' },],
                results: [{ item: 'prma:ak47_grip' }]
            },
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'prma:ak47_grip_blueprint' },],
                results: [{ item: 'prma:ak47_grip' }],
                energy: 2000,
	            maxChargeRate: 50
            },
        ],
        results: [
            { item: 'prma:ak47_grip', chance: 90.0 },
            { item: 'immersiveengineering:plate_steel', chance: 5.0 },
            { item: 'industrialforegoing:plastic', chance: 5.0 },
        ],
        loops: 2
    });
//组合
    event.recipes.create.mechanical_crafting(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:ak47",HasBulletInBarrel:0b}'), [
        ' IKJI',
        'ACBDE',
        ' HFGH'
        ], {
        A:'prma:ak47_barrel',//枪管
        B:'prma:ak47_handguard',//护手
        C:'prma:ak47_upper_receiver',//上机身
        D:'prma:ak47_lower_receiver',//下机身
        E:'minecraft:stripped_oak_log',//护木
        F:'prma:ak47_magazine',//弹匣
        G:'prma:ak47_grip',//把手
        H:'pneumaticcraft:glycerol',//润滑油
        I:'prma:flat_head_screw',//螺丝
        J:'prma:m_screw',//M型螺丝
        K:'vintageimprovements:steel_spring'//弹簧
      });
});