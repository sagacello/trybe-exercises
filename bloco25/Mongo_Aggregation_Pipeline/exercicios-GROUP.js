//$addToSet : retorna um array com os valores únicos da expressão para cada grupo;
//$avg : retorna a média de valores numéricos. Valores não numéricos são ignorados;
//$first : retorna um valor do primeiro documento de cada grupo;
//$last : retorna um valor do último documento de cada grupo;
//$max : retorna o maior valor de cada grupo;
//$sum : retorna a soma de valores numéricos. Valores não numéricos são ignorados.


//O operador $group também pode ser utilizado para encontrar os valores distintos de um campo. 
//Por exemplo, se quiser saber todos os valores únicos do campo item e quantos são
db.sales.aggregate([
    {
      $group : {
        _id : "$item",
        count: { $sum: 1 } //  sum 1 significa que os valores seram somados 
      }
    }
  ]);

//Para saber o valor das vendas, você deve utilizar o operador $sum , que, por sua vez, aceita mais modificadores. 
// No exemplo que se segue, multiplica-se o valor do campo price pelo valor do campo quantity 

db.sales.aggregate([
    {
      $group : {
        _id : "$item",
        totalSaleAmount: {
          $sum: {
            $multiply: ["$price", "$quantity"] // price x quantity
          }
        }
      }
    }
  ]);

  //Por exemplo, se você quiser manter o agrupamento anterior, 
  //mas saber apenas as vendas que possuem valores maiores do que 100 , é só adicionar mais um estágio no pipeline :

  // ---------------------------------------------HAVING -------------------------
  db.sales.aggregate([
    // Primeiro Estágio
    {
      $group: {
        _id : "$item",
        totalSaleAmount: {
          $sum: {
            $multiply: ["$price", "$quantity"]
          }
        }
      }
    },
    // Segundo Estágio
    {
      $match: { "totalSaleAmount": { $gte: 100 } } // FAZ O PAPEL DO HAVING
    }
  ]);

  // ------------------------------------------------$group------------------------------
  // agrupa valores de diversas formas

  //  --------------------------------------------null----------------------------------------
  //Você pode executar operações matemáticas em todos os documentos de uma coleção.
  //Basta passar null no _id e seguir com os operadores de acumulação.

  //No exemplo a seguir, a operação de agregação retornará um documento com o valor total da venda, 
  //a quantidade média de itens vendidos e o total de vendas:

  db.sales.aggregate([
    {
      $group : {
        _id : null,
        totalSaleAmount: { // totalSaleAmount e averageQuantity são os apelidos
          $sum: { $multiply: ["$price", "$quantity"] }
        },
        averageQuantity: { $avg: "$quantity" },
        count: { $sum: 1 }
      }
    }
  ]);

