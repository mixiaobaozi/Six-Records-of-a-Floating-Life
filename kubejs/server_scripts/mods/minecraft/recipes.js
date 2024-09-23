ServerEvents.recipes(event=>{
    remove_recipes_output(event,[
        "minecraft:conduit",
        "minecraft:furnace"
    ])
      remove_recipes_type(event,[
       "minecraft:smelting"
     ])

    event.shaped("minecraft:conduit",[
        "ABA",
        "BCB",
        "ABA"
    ],{
        A:  "#forge:raw_fishes",
        B:  "minecraft:prismarine_crystals",
        C:  "minecraft:heart_of_the_sea"
    })
    event.custom({
        "type": "hexerei:pestle_and_mortar",
        "ingredients": [
            {
                "item": "spelunkery:salt"
            },
            {
                "item": "minecraft:kelp"
            },
            {
                "item": "minecraft:kelp"
            },
            {
                "item": "minecraft:kelp"
            },
            {
                "item": "naturesaura:gold_powder"
            }
        ],
        "output": {
            "item": "minecraft:prismarine_crystals",
            "count": 2
        },
        "grindingTime": 300
    })
})