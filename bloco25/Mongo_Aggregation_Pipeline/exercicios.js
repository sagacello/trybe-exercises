//É recomendado sempre priorizar o $match o mais "cedo" possível no pipeline .
// Isso melhora muito a performance, uma vez que o $match limita o número de documentos passados para o próximo estágio

db.articles.aggregate(
    [
      {
        $match: {
          $or: [
            { score: { $gt: 70, $lt: 90 } },
            { views: { $gte: 1000 } }
          ]
        }
      }
    ]
  );
  //Nessa operação de agregação, o primeiro estágio seleciona todos os documentos da coleção articles 
  //em que o score seja maior que 70 e menor que 90 , ou o campo views seja maior ou igual a 1000 

  // 1 - Selecione todas as transações feitas pelo cliente chamado "Dave America";
  db.transactions.aggregate(
    [
      {
        $match: {
          from : "Dave America"
        }
      }
    ]
  );

  // 2 - Selecione todas as transações com o valor entre 700 e 6000, ou que sejam recebidas pela cliente "Lisa Simpson";
  db.transactions.aggregate(
    [
      {
        $match: {
          $or: [
            { value: { $gte: 700, $lte: 6000 } },
            { to: "Lisa Simpson" }
          ]
        }
      }
    ]
  );

// 3 - Selecione três transações com o valor acima de 1000

db.transactions.aggregate(
    [
      {
        $match: {
          value : { $gte: 1000 }
        }
      
      },
     { $limit : 3 }
    ]
  );