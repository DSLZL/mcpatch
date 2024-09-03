
onEvent('recipes', event => {
    event.custom({//g17枪管
        type: "vintageimprovements:turning",
        ingredients: [{
            tag: 'forge:rods/steel'
        }],
        results: [{
            item: 'prma:glock_17_barrel',
            count: 1
        }]
    });
    event.custom({//akm枪管
        type: "vintageimprovements:turning",
        ingredients: [{
            tag: 'forge:rods/steel'
        }],
        results: [{
            item: 'prma:ak47_barrel',
            count: 1
        }]
    });
    event.custom({//m249枪管
        type: "vintageimprovements:turning",
        ingredients: [{
            tag: 'forge:rods/steel'
        }],
        results: [{
            item: 'prma:m249_barrel',
            count: 1
        }]
    });
    event.custom({//awp枪管
        type: "vintageimprovements:turning",
        ingredients: [{
            tag: 'forge:rods/steel'
        }],
        results: [{
            item: 'prma:ai_awp_barrel',
            count: 1
        }]
    });
    event.custom({//螺丝
        type: "vintageimprovements:turning",
        ingredients: [{
            tag: 'forge:rods/steel'
        }],
        results: [{
            item: 'prma:flat_head_screw',
            count: 4
        }]
    });
    event.custom({//M型螺丝
        type: "vintageimprovements:turning",
        ingredients: [{
            tag: 'forge:rods/steel'
        }],
        results: [{
            item: 'prma:m_screw',
            count: 2
        }]
    });
    event.custom({//扳机
        type: "vintageimprovements:turning",
        ingredients: [{
            tag: 'materialis:plastic_material'
        }],
        results: [{
            item: 'prma:glock_17_trigger_blueprint',
            count: 1
        }]
    });
    event.custom({//弹匣
        type: "vintageimprovements:turning",
        ingredients: [{
            tag: 'materialis:plastic_material'
        }],
        results: [{
            item: 'prma:glock_17_magazine_blueprint',
            count: 1
        }]
    });
    
});