ServerEvents.recipes(event=>{
    remove_recipes_output(event,[
        "minecraft:conduit",
        "minecraft:furnace",
        "quark:blackstone_furnace",
        "quark:deepslate_furnace",
        "minecraft:blast_furnace"
    ])
      remove_recipes_type(event,[
    ///   "minecraft:smelting"
     ])

    event.shaped("minecraft:conduit",[
        "ABA",
        "BCB",
        "ABA"
    ],{
        A:  "#forge:raw_fishes",
        B:  "minecraft:prismarine_crystals",
        C:  "minecraft:heart_of_the_sea"
    }).id("shaped:conduit")
    event.shaped("minecraft:furnace",[
        "AAA",
        "ABA",
        "BCB"
    ],{
        A:"minecraft:cobblestone",
        B:"embers:caminite_brick",
        C:"minecraft:campfire"
    }).id("shaped:furnace")
    event.shaped("minecraft:blast_furnace",[
        "AAA",
        "ABA",
        "CCC"
    ],{
        A: "create:iron_sheet",
        B: "minecraft:furnace",
        C: "embers:ember_crystal"
    }).id("shaped:blast_furnace")
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
    }).id("pestle:prismarine_crystals")
})