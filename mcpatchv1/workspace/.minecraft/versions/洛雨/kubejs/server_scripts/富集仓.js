onEvent('recipes', event => {
    event.custom({
    "type":"mekanism:enriching",
    "input":{"ingredient":{"item":'ewcraft:youbing'}},
    "output":{"item":"mekanism:yellow_cake_uranium","count":30}
    });
});