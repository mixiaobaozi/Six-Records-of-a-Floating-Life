// priority: 100
///自然灵气神灵仪式
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


