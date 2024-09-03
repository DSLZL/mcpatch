onEvent('recipes', event => {
    event.custom({//长机身
        type: 'create:sequenced_assembly',
        ingredient: { item: 'prma:ai_awp_long_body_blueprint' },
        transitionalItem: { item: 'prma:ai_awp_long_body' },
        sequence: [
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:ai_awp_long_body_blueprint' },],
                results: [{ item: 'prma:ai_awp_long_body' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:ai_awp_long_body_blueprint' },],
                results: [{ item: 'prma:ai_awp_long_body' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:ai_awp_long_body_blueprint' },],
                results: [{ item: 'prma:ai_awp_long_body' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:ai_awp_long_body_blueprint' },],
                results: [{ item: 'prma:ai_awp_long_body' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ai_awp_long_body_blueprint' },
                    { item: 'immersiveengineering:plate_steel' }],
                results: [{ item: 'prma:ai_awp_long_body' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ai_awp_long_body_blueprint' },
                    { item: 'prma:m_screw' }],
                results: [{ item: 'prma:ai_awp_long_body' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ai_awp_long_body_blueprint' },
                    { item: 'prma:m_screw' }],
                results: [{ item: 'prma:ai_awp_long_body' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ai_awp_long_body_blueprint' },
                    { item: 'prma:flat_head_screw' }],
                results: [{ item: 'prma:ai_awp_long_body' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ai_awp_long_body_blueprint' },
                    { item: 'prma:flat_head_screw' }],
                results: [{ item: 'prma:ai_awp_long_body' }]
            },
        ],
        results: [
            { item: 'prma:ai_awp_long_body', chance: 90.0 },
            { item: 'chemlib:tungsten_nugget', chance: 10.0 },
        ],
        loops: 2
    });    
    event.custom({//机匣
        type: 'create:sequenced_assembly',
        ingredient: { item: 'prma:ai_awp_bolt_blueprint' },
        transitionalItem: { item: 'prma:ai_awp_bolt' },
        sequence: [
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:ai_awp_bolt_blueprint' },],
                results: [{ item: 'prma:ai_awp_bolt' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:ai_awp_bolt_blueprint' },],
                results: [{ item: 'prma:ai_awp_bolt' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:ai_awp_bolt_blueprint' },],
                results: [{ item: 'prma:ai_awp_bolt' }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: 'prma:ai_awp_bolt_blueprint' },],
                results: [{ item: 'prma:ai_awp_bolt' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ai_awp_bolt_blueprint' },
                    { item: 'immersiveengineering:plate_steel' }],
                results: [{ item: 'prma:ai_awp_bolt' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ai_awp_bolt_blueprint' },
                    { item: 'prma:flat_head_screw' }],
                results: [{ item: 'prma:ai_awp_bolt' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ai_awp_bolt_blueprint' },
                    { item: 'prma:flat_head_screw' }],
                results: [{ item: 'prma:ai_awp_bolt' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ai_awp_bolt_blueprint' },
                    { item: 'prma:m_screw' }],
                results: [{ item: 'prma:ai_awp_bolt' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ai_awp_bolt_blueprint' },
                    { item: 'prma:m_screw' }],
                results: [{ item: 'prma:ai_awp_bolt' }]
            },

        ],
        results: [
            { item: 'prma:ai_awp_bolt', chance: 90.0 },
            { item: 'chemlib:tungsten_nugget', chance: 10.0 },
        ],
        loops: 2
    });
    event.custom({//弹匣
        type: 'create:sequenced_assembly',
        ingredient: { item: 'prma:ai_awp_magazine_blueprint' },
        transitionalItem: { item: 'prma:ai_awp_magazine' },
        sequence: [
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ai_awp_magazine_blueprint' },
                    { item: 'industrialforegoing:plastic' }],
                results: [{ item: 'prma:ai_awp_magazine' }]
            },
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'prma:ai_awp_magazine_blueprint' },],
                results: [{ item: 'prma:ai_awp_magazine' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ai_awp_magazine_blueprint' },
                    { item: 'vintageimprovements:steel_spring' }],
                results: [{ item: 'prma:ai_awp_magazine' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ai_awp_magazine_blueprint' },
                    { item: 'industrialforegoing:plastic' }],
                results: [{ item: 'prma:ai_awp_magazine' }]
            },
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'prma:ai_awp_magazine_blueprint' },],
                results: [{ item: 'prma:ai_awp_magazine' }]
            },
        ],
        results: [
            { item: 'prma:ai_awp_magazine', chance: 90.0 },
            { item: 'prma:ai_awp_magazine_blueprint', chance: 10.0 },
        ],
        loops: 2
    });
    event.custom({//扳机
        type: 'create:sequenced_assembly',
        ingredient: { item: 'prma:ai_awp_trigger_blueprint' },
        transitionalItem: { item: 'prma:ai_awp_trigger' },
        sequence: [
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'prma:ai_awp_trigger_blueprint' },],
                results: [{ item: 'prma:ai_awp_trigger' }],
                energy: 2000,
	            maxChargeRate: 50
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ai_awp_trigger_blueprint' },
                    { item: 'create:precision_mechanism' }],
                results: [{ item: 'prma:ai_awp_trigger' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ai_awp_trigger_blueprint' },
                    { item: 'vintageimprovements:steel_spring' }],
                results: [{ item: 'prma:ai_awp_trigger' }]
            },
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'prma:ai_awp_trigger_blueprint' },],
                results: [{ item: 'prma:ai_awp_trigger' }],
                energy: 2000,
	            maxChargeRate: 50
            },
        ],
        results: [
            { item: 'prma:ai_awp_trigger', chance: 90.0 },
            { item: 'prma:ai_awp_trigger_blueprint', chance: 10.0 },
        ],
        loops: 2
    });
    event.custom({//枪托
        type: 'create:sequenced_assembly',
        ingredient: { item: 'prma:ai_awp_stock_blueprint' },
        transitionalItem: { item: 'prma:ai_awp_stock' },
        sequence: [
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ai_awp_stock_blueprint' },
                    { item: 'industrialforegoing:plastic' }],
                results: [{ item: 'prma:ai_awp_stock' }]
            },
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'prma:ai_awp_stock_blueprint' },],
                results: [{ item: 'prma:ai_awp_stock' }],
                energy: 2000,
	            maxChargeRate: 50
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ai_awp_stock_blueprint' },
                    { item: 'create:precision_mechanism' }],
                results: [{ item: 'prma:ai_awp_stock' }]
            },
            {
                type: 'create:deploying', ingredients: [
                    { item: 'prma:ai_awp_stock_blueprint' },
                    { item: 'immersiveengineering:plate_steel' }],
                results: [{ item: 'prma:ai_awp_stock' }]
            },
            {
                type: "vintageimprovements:laser_cutting",
                ingredients: [{ item: 'prma:ai_awp_stock_blueprint' },],
                results: [{ item: 'prma:ai_awp_stock' }],
                energy: 2000,
	            maxChargeRate: 50
            },
        ],
        results: [
            { item: 'prma:ai_awp_stock', chance: 90.0 },
            { item: 'prma:ai_awp_stock_blueprint', chance: 10.0 },
        ],
        loops: 1
    });
//组合
    event.recipes.create.mechanical_crafting(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:ai_awp",HasBulletInBarrel:0b}'), [
        'GKIJI',
        'ABCBE',
        'HIFDI'
        ], {
        A:'prma:ai_awp_barrel',//枪管
        B:'prma:ai_awp_long_body',//长机身
        C:'prma:ai_awp_bolt',//机匣
        D:'prma:ai_awp_trigger',//扳机
        E:'prma:ai_awp_stock',//枪托
        F:'prma:ai_awp_magazine',//弹匣
        G:'industrialforegoing:plastic',//塑料
        H:'pneumaticcraft:glycerol',//润滑油
        I:'prma:flat_head_screw',//螺丝
        J:'prma:m_screw',//M型螺丝
        K:'vintageimprovements:steel_spring'//弹簧
      });
});