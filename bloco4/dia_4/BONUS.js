function numerosRomanos(string) {
  let  soma  = 0
  let romanos = string.toLowerCase()
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
for(let r in romanos){
  listaComparar.push(romanos[r])
}console.log(listaComparar)

for(let valores in listaChaveValor){
  for(let numeros in listaComparar )
  if(valores.toLowerCase() == listaComparar[numeros]){
    soma += listaChaveValor[valores]
  }
}console.log(soma)

}
numerosRomanos("Vvmmdmc")