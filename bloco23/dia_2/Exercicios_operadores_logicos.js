
//Essa query seleciona todos os documentos da coleção inventory em que o valor do campo qty é menor 
//do que 20 ou o valor do campo price é igual a 10
db.inventory.find({ $or: [{ qty: { $lt: 20 } }, { price: 10 }] })

//não é maior que 1.99
// somente em um valor 
db.inventory.find({ price: { $not: { $gt: 1.99 } } })

// negação par mais de um valor
db.inventory.find({ $nor: [{ price: 1.99 }, { sale: true }] })


//Essa query seleciona todos os documentos da coleção inventory em que o valor do campo 
//price é diferente de 1.99 e o campo price existe.
db.inventory.find({
    $and: [
        { price: { $ne: 1.99 } },
        { price: { $exists: true } }
    ]
})



//Essa query seleciona todos os documentos da coleção inventory em que o valor do campo price é maior que 0.99 
//ou menor que 1.99 , e o valor do campo sale é igual a true ou o valor do campo qty é menor do que 20 .
// Ou seja, essa expressão é equivalente a (price > 0.99 ou price < 1.99) e (sale = true ou qty < 20).
db.inventory.find({
    $and: [
        {
            $or: [
                { price: { $gt: 0.99, $lt: 1.99 } }
            ]
        },
        {
            $or: [
                { sale : true },
                { qty : { $lt : 20 } }
            ]
        }
    ]
})


//Exercicios 
//Selecione e faça a contagem dos restaurantes que não possuem avaliação menor ou igual a 5 , 
//essa query também deve retornar restaurantes que não possuem o campo avaliação.
db.restaurants.find(
    {rating: {$not: { $lte: 5}}}
  )

//Selecione e faça a contagem dos restaurante em que a avaliação seja maior ou igual a 6 , 
//ou restaurantes localizados no bairro Brooklyn .
db.restaurants.find(
    {$or: [{ rating: { $gte: 6 }},{ borough: 'Brooklyn'}]}
  )

//Selecione e faça a contagem dos restaurantes localizados nos bairros Queens , 
//Staten Island e Broklyn e possuem avaliação maior que 4 .
db.restaurants.find({
    $and: [
      { borough: { $in: ['Queens', 'Staten Island', 'Brooklyn'] } },
      { rating: { $gt: 4 } },
    ],
  }).count();

  //Selecione e faça a contagem dos restaurantes onde nem o campo avaliação seja igual a 1 ,
  //nem o campo culinária seja do tipo American .
  db.restaurants.find(
    {$nor: [{ rating: { $eq: 1 }},{ cuisine: 'American'}]}
  ).count()

  //Selecione e faça a contagem dos resturantes em que a avaliação seja maior que 6 ou menor que 10 , e esteja localizado no 
  //bairro Brooklyn ou não possuem culinária do tipo Delicatessen .
  db.restaurants.find({
    $and: [
      { $or: [{ rating: { $gte: 6, $lt: 10 } }] },
      { $or: [{ borough: 'Brooklyn' }, { cuisine: { $ne: 'Delicatessen' } }] },
    ],
  }).count();

//Essa query seleciona todos os documentos da coleção inventory em que o campo qty existe 
//e seu valor é diferente de 5 e 15 .
  db.inventory.find({ qty: { $exists: true, $nin: [ 5, 15 ] } })