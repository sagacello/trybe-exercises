//Dada uma matriz de matrizes, transforme em uma única matriz.
    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];




function flatten1() {
    let novo = []
    for(let i = 0 ; i < arrays.length ; i+=1){
        for(let j in arrays[i])
            if(arrays[i][j] !== ']' && arrays[i][j] !== '['){
                novo.push(arrays[i][j])
        }        
    }
    return novo 
  }

function flatten() {
    return arrays.reduce((acc, curr)=> acc.concat(curr), []);
  }

function flatten2() {
    return arrays.reduce((acumulador, item) => {
        item.map((busca) => {
            acumulador.push(busca)
        })
        return acumulador

    },[]); 
}


console.log(flatten3())
//assert.deepStrictEqual(flatten1(), ["1", "2", "3", true, 4, 5, 6]);