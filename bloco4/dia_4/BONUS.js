function numerosRomanos(string) {
  let  soma  = 0
  string = string.toLowerCase()
  let listaComparar = []
  let listaChaveValor = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

for(let valores in listaChaveValor){
  for(let numeros in string )
  if(valores.toLowerCase() == string[numeros]){
    soma += listaChaveValor[valores]
  }
}console.log(soma)

}
numerosRomanos("VmD")