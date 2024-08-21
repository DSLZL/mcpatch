onEvent('recipes', event => {
	event.smithing('exnihilosequentia:flint_mesh', 'exnihilosequentia:string_mesh', 'minecraft:tuff');
	event.smithing('exnihilosequentia:iron_mesh', 'exnihilosequentia:flint_mesh', 'minecraft:iron_block');
	event.smithing('exnihilosequentia:diamond_mesh', 'exnihilosequentia:iron_mesh', 'minecraft:diamond_block');
	event.smithing('exnihilosequentia:emerald_mesh', 'exnihilosequentia:diamond_mesh', 'minecraft:emerald_block');
    event.smithing('immersiveengineering:alloybrick', 'minecraft:bricks', 'immersiveengineering:sheetmetal_copper');
});