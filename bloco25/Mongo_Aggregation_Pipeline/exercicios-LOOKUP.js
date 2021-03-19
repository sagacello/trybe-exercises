//Existem quatro parâmetros básicos para montar um $lookup :
// from : uma coleção no mesmo database para executar o join ;
// localField : o campo da coleção de onde a operação de agregação está sendo executada. Será comparado por igualdade com o campo especificado no parâmetro foreingField ;
// foreingField : o campo da coleção especificada no parâmetro from que será comparado com o campo localField por igualdade simples;
//as : o nome do novo array que será adicionado.

// TIPO O JOIN
db.orders.aggregate([ // coleçao orders 
    {
      $lookup: { // para juntar os campos 
        from: "inventory", // essa coleções inventory
        localField: "item", // campo de orders chama item , localField e a sintaxe
        foreignField: "sku", // O campo de inventory que se quer relacionar é sku
        as: "inventory_docs"
      }
    }
  ]);

// 1 Selecione todos os clientes com as suas respectivas transações feitas;

db.clients.aggregate([  
    {
      $lookup: { 
        from: "transactions", 
        localField: "name", 
        foreignField: "from", 
        as: "transações"
      }
    }
  ]);

// 2 Selecione quatro clientes com as suas respectivas transações recebidas;
db.clients.aggregate([  
    {
      $lookup: { 
        from: "transactions", 
        localField: "name", 
        foreignField: "to", 
        as: "transações"
      }
    },
    {
        $limit: 4,
      },
  ]);

// 3 Selecione todos os cliente do estado da "Florida" e suas respectivas 
// transações recebidas.
db.clients.aggregate([
    {
      $match: { State: 'Florida' },
    },
    {
      $lookup: {
        from: "transactions",
        localField: "name",
        foreignField: "to",
        as: "transactions_history"
      },
    },
  ]);