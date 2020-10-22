//1. O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?
//2. Quando você tem que enfileirar várias callbacks, que problema surge?
//3. Por que as Promises são uma forma de se resolver esse problema?
//4. Quando você vai se comunicar com uma API, tal comunicação deve ser síncrona ou assíncrona? 
//Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc
//5. Dada a resposta anterior, o que é fetch e para que ele serve?

// 1 - Quando você executa algo de forma síncrona, aguarda o término antes de prosseguir para outra tarefa.
// Quando você executa algo de forma assíncrona, pode passar para outra tarefa antes que ela termine.

// 2 - callbacks hell , varios callbacks enfileirados que fazem o código ser dificil de ler 

//3 - promises são assíncronas,e não travam o fluxo do código , elas tem funçoes 
// extras embutidas que facilitam o controle e a organização do código, facilitando a leitura

//4 - API deve ser  sincrona , esperar cada operação ter seu tempo de execução para funcionar corretamente
// ter sincronia

//função fetch envia as requisiçoes e tem a capacidade de tratar os dados e os erros 
 