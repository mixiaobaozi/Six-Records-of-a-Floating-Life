// priority: 100
///自然灵气诸神召唤
/**
 * 
 * @param {string} input 
 * @param {string} start_item 
 * @param {string} output 
 */
function offering(input,start_item,output){
    event.custom({
        "type": "naturesaura:offering",
        "input": {
        "item": input
        },
        "start_item": {
        "item": start_item
        },
        "output": {
        "item": output
        }
    })
}
///自然灵气祭坛
/**
 * 
 * @param {object} input 
 * @param {object} output 
 * @param {string} catalyst 
 * @param {number} aura 
 * @param {number} time 
 */
function altar(input,output,catalyst,aura,time){
    event.custom({
        "type": "naturesaura:altar",
        "input": {
        "item": input[0],
        "count": input[1]
        },
        "output": {
        "item": output[0],
        "count": output[1]
        },
        "catalyst": {
        "item": catalyst
        },
        "aura": aura,
        "time": time    
    })
}

/**
 * @param {fluid} Array
 * @param {input} Array
 * @param {output} Array
 *
function altar(fluid,input,output){
        heatRequirement="heated"
        var inputs = new String
        for(i in input){
            inputs.concat(
                {
                    "item": i
                },
            )
        }
        event.custom(
        {
            "type": "hexerei:mixingcauldron",
            "liquid": {
            "fluid": fluid[0]
            },
            "ingredients":[
                inputs
            ]
        },
            "output": {
            "item": output[0],
            "count": output[1]
        },
            "liquidOutput": {
            "fluid": fluid[0]
        }, 
            "fluidLevelsConsumed": fluid[1],
            "heatRequirement": "heated"      
        )
}
*/