const calcularDivisao = (n1,n2) => {
   if( n2 === 0 ) {
       throw new Error(" Não pode ")
   }
   const resultado = n1 / n2 
   return resultado;
}

try {
    const resultado = calcularDivisao(1,2);
    console.log("Resultado:",resultado)
    
} catch (error) {
    console.log("errouuuuu: " ,  error)
}