ServerEvents.recipes(event=>{
    remove_recipes_output(event,[
        'embers:caminite_blend',
        'embers:raw_caminite_plate',
        'embers:caminite_brick'
    ])
    ///卡米尼特混合物
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
        }).id("pestle:caminite_blend")
    event.campfireCooking(
    "embers:caminite_brick",
    "embers:caminite_blend").id("campfireCooking:caminte_brick")
})