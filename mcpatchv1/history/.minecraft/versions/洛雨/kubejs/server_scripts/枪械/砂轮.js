onEvent('recipes', event => {
    event.custom({
    type:"vintageimprovements:polishing",
	speedLimits: 2,
	ingredients: [
		{
			tag: 'forge:nuggets/lead'
		}
	],
	results: [
		{
			item: 'ewcraft:qianzhu',
			count: 1
		}
	],
	processingTime: 20
    });
});