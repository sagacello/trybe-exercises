//Quando você utiliza um modificador, o processo de push ocorre na seguinte ordem, independentemente 
//da ordem em que os modificadores aparecem:
//Altera o array para adicionar os elementos na posição correta;
//Aplica a ordenação ( $sort ), se especificada;
//Limita o array ( $slice ), se especificado;
//Armazena o array .


// ---------------------------------------- PUSH ----------------------------------------
db.supplies.updateOne( // adicionando um item
    {_id: 1 },
    { $push:
      {
        items: {
          "name": "notepad",
          "price":  35.29,
          "quantity": 2
        },
      }
    },
    { upsert: true }
  );


  db.supplies.updateOne(// dois elementos a esse array
    {},
    { $push: {
        items:
        { $each: [
           {
            "name": "pens",
            "price": 56.12,
            "quantity": 5
          },
          {
            "name": "envelopes",
            "price": 19.95,
            "quantity": 8
          }
        ] }
      }
    },
    { upsert: true }
  );

  //O modificador $each para adicionar múltiplos documentos ao array items ;
  //O modificador $sort para ordenar todos os elementos alterados no array items pelo campo quantity em ordem descendente;
  //E o modificador $slice para manter apenas os dois primeiros elementos ordenados no array items .
  db.supplies.updateOne(
    { _id: 1},
    { $push: {
        items: {
          $each: [
            {
              "name" : "notepad",
              "price" : 35.29,
              "quantity" : 2
            },
            {
              "name": "envelopes",
              "price": 19.95,
              "quantity": 8
            },
            {
              "name": "pens",
              "price": 56.12,
              "quantity": 5
            }
        ],
        $sort: { quantity: -1 },
        $slice: 2
      }
      }
    },
    { upsert: true }
  );

  
// ---------------------------------------- POP ----------------------------------------

db.supplies.updateOne({ _id: 1 }, { $pop: { items: -1 } }); // REMOVE O PRIMEIRO ELEMENTO DO ARRAY
db.supplies.updateOne({ _id: 1 }, { $pop: { items: 1 } });// REMOVE O ULTIMO ELEMENTO DO ARRAY


// ---------------------------------------- PULL ----------------------------------------
//O operador $pull remove de um array existente todos os 
//elementos com um ou mais valores que atendam à condição especificada.

db.supplies.updateMany( //Digamos que você queira remover do array items os elementos pens e envelopes :
    { },
    {
      $pull: {
        "items": {
          "name": { $in: ["pens", "envelopes"] }
        },
      }
    }
  );

  //Você pode remover todos os elementos do array votes que sejam maiores ou iguais a ( $gte ) 6
  db.profiles.updateOne(
    { _id: 1 },
    {
      $pull: {
        votes: { $gte: 6 }
      }
    }
  );


  db.survey.updateMany(// REMOVE DO ARRAY RESULTS TODOS ELEMENTOS COM COM O CAMPO SCORE 8 E ITEM B
    { },
    {
      $pull: {
        results: { score: 8 , item: "B" }
      }
    }
  );


  // ---------------------------------------- addToSet ----------------------------------------
  //operação abaixo adiciona o elemento "accessories" ao array tags desde que "accessories" não exista no array 
  // não deixa duplicar

  db.inventory.update(
    { _id: 1 },
    { $addToSet: { tags: "accessories" } }
  );

  //A operação abaixo utiliza o operador $addToSet e o modificador $each para adicionar 
  //alguns elementos a mais no array tags :
  db.inventory.updateOne(
    { _id: 2 },
    {
      $addToSet: {
        tags: {
            $each: ["camera", "electronics", "accessories"]
        }
      }
    }
  );

  // ------------------------ arrays filters --------------------------------------------------
  db.recipes.updateMany( // Passamos de updateOne para updateMany.
    {}, // Retiramos a restrição do título.
    { $set : {
      "ingredients.$[elemento].unit": "xícara", // Setamos `unit` como "xícara",
      "ingredients.$[elemento].name": "Farinha Integral"// `name` como "Farinha Integral".
      }
    },
    { arrayFilters: [ { "elemento.name": "Farinha" } ]} // Filtramos os arrays que o valor da propriedade `name` seja "Farinha".
  )