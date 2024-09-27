ServerEvents.recipes(event=>{
    remove_recipes_output(event,[
       "hexerei:pestle_and_mortar",
       "hexerei:mixing_cauldron",
       'hexerei:witch_hazel_broom',
       'hexerei:willow_broom',
       'hexerei:mahogany_broom'
    ])
    event.recipes.create.item_application(
        "hexerei:mixing_cauldron",[
            "minecraft:cauldron",
            "minecraft:conduit"
        ]).id("hexerei:mixing_cauldron")
    event.shaped("hexerei:pestle_and_mortar",[
        "   ",
        "A A",
        "AAA"
    ],{
        A:"minecraft:cobblestone_slab"
    })
    
}) 
   