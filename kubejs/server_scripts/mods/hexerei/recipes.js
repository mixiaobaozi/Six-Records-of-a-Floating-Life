ServerEvents.recipes(event=>{
    remove_recipes_output(event,[
       "hexerei:pestle_and_mortar",
       "hexerei:mixing_cauldron",
       'hexerei:witch_hazel_broom',
       'hexerei:willow_broom',
       'hexerei:mahogany_broom'

    ]),
    event.custom(
        {
            "type": "hexerei:pestle_and_mortar",
            "ingredients": [
              {
                "item": "minecraft:clay_ball"
              },
              {
                "item": "minecraft:clay_ball"
              },
              {
                "item": "minecraft:prismarine_crystals"
              },
              {
                "item": "minecraft:sand"
              },
              {
                "item": "minecraft:gravel"
              }
            ],
             "output": {
              "item": "embers:caminite_blend",
              "count": 8
            },
            "grindingTime": 300
        })
    
})