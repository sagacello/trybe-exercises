const soNumeros = async (n1,n2,n3) => {
    const resposta = await new Promise((resolve, reject) => {
        typeof (n1) && typeof (n2) && typeof (n3) === 'number' ?
            resolve(n1 + n2) :
            reject(new Error("Digite apenas números"));

    });
    // essa parte so acontece depois da resposta
    ((resposta) * n3) > 50 ?
        console.log("Resposta", resposta * n3) :
        Promise.reject(new Error('Valor muito baixo'));
}

soNumeros(3,2,30)

