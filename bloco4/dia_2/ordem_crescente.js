function ordem_crescente(){
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    for (let i = 1; i < numbers.length; i++) { //vai percorrer a lista
        for (let j = 0; j < i; j++) { // vai percorrer o i , começa no elemento 0 e vai percorrendo até j < i de 1 em 1 
        if (numbers[i] < numbers[j]) { // comparação dos elementos , se o elemento da lista numbers na posição i for menor que o elemento da lista numbers na posição j
            let posicao = numbers[i]; //a posicao recebe o menor elemento , serve como support 
            numbers[i] = numbers[j]; //no mesmo if sendo o elemento na posição i menor que o da posição j então eles trocam de posição na lista
            //como o elemento a frente é o i , ele passa a ser o elemento anterior que é o j , isso tudo na mesma lista,
            //assim continua a varredura para o segundo elemento , se o elemento na posição i for menor que o da posição j ele se mantem no lugar 
            numbers[j] = posicao;//como o elemento na posição j é maior a posicao de contagem agora vai começar a partir dele
        }
        }
       
    }
    console.log(numbers) 
}  

ordem_crescente()