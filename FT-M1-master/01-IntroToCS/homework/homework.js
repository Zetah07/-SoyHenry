"use strict";

function BinarioADecimal(num){
  let numero = num.toString()
  let sum = 0;
  console. log(numero)
  10110
  for (let i = 0; i < numero.length; i++) {
  
  sum += numero[i] * 2 ** (numero.length -1 -i)
  }
  return sum
}



function DecimalABinario(num) {
  //num => 22
  // hacer los pasos que tenga que hacer...
  //return numBinario
  let temp = []
  let result= ''
  while (num > 0){
    let tempNumero = parseInt(num / 2);
    let residuo = parseInt(num%2)
    num = tempNumero
    temp.push(residuo)
  }
  temp.reverse().map(numero =>{result += numero})
  return result
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
BinarioADecimal('10110')
DecimalABinario(22)