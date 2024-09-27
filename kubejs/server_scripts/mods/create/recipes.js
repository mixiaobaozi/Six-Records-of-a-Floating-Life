ServerEvents.recipes(event=>{
    remove_recipes_output(event,[
        "minecraft:redstone",
        "create:andesite_alloy"

    ])
    event.recipes.create.milling(
    "minecraft:redstone",
    "spelunkery:cinnabar"
    ).id("milling:redstone")
    event.recipes.create.crushing(
      ["2x minecraft:redstone",
      Item.of("minecraft:redstone").withChance(0.5)],
      "spelunkery:cinnabar"
    ).id("crushing:redstone")
    ///安山合金
    event.custom(
        {
          "type": "hexerei:mixingcauldron",
          "liquid": {
          "fluid": "minecraft:lava"
          },
          "ingredients": [
          {
            "item": "minecraft:prismarine_crystals"
          },
          {
           "item": "minecraft:andesite"
          },
          {
            "item": "create:raw_zinc"
          },
          {
            "item": "minecraft:andesite"
          },
          {
            "item": "embers:ember_shard"
          },
          {
            "item": "minecraft:andesite"
          },
          {
            "item": "create:raw_zinc"
          },
          {
            "item": "minecraft:andesite"
          },
          
          ],
          "output": {
            "item": "create:andesite_alloy",
            "count": 16
          },
          "liquidOutput": {
            "fluid": "minecraft:lava"
          },
          "fluidLevelsConsumed": 500,
          "heatRequirement": "heated"
        }).id("mixingcauldron:andesite_alloy")
})