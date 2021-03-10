//Selecione e faça a contagem dos restaurantes presentes nos bairros (campo borough ) 
//Queens , Staten Island e Bronx .

db.restaurants.find(
  {borough: {$in: [ 'Queens', 'Staten', 'Bronx']}}
).count()

//Selecione e faça a contagem dos restaurantes que não possuem culinária (campo cuisine ) do tipo American
db.restaurants.find(
  {cuisine: {$ne: 'American'}}
).count()

//Selecione e faça a contagem dos restaurantes que possuem avaliação (campo rating ) maior ou igual a 8 .
db.restaurants.find({ rating: { $gte: 8 } }).count();

//Selecione e faça a contagem dos restaurantes que não possuem as avaliações 5 , 6 e 7 .
db.restaurants.find({ rating: { $nin: [5, 6, 7] } } ).count();


