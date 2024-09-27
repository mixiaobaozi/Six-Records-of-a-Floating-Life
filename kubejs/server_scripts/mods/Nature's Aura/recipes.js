ServerEvents.recipes(event=>{
    remove_recipes_output(event,[
        "naturesaura:gold_fiber"
    ])
    event.recipes.botania.petal_apothecary("naturesaura:gold_fiber",[
        "hexerei:sage",
        "minecraft:gold_nugget",
        "minecraft:gold_nugget",
        "minecraft:gold_nugget",
        "minecraft:gold_nugget",
        "hexerei:belladonna_flowers",
        "hexerei:mandrake_flowers",
        "hexerei:mugwort_flowers"
    ])

})