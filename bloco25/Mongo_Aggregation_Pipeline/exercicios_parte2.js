// 1 - Selecione todos os bancos;
db.transactions.aggregate(
    [
      {
        $group: {
          _id: "$bank"
        }
      }
    ]
  );

// 2 - Selecione o valor total das transações em cada banco e quantas são;
db.transactions.aggregate([
    { $group: {
      _id: null,
      total: { $sum: "$value" },
      count: { $sum: 1 }
    } }
   ]);


// 3 - Selecione o valor total de transações;
db.transactions.aggregate([
    { $group: {
      _id: null,
      total: { $sum: "$value" }
    } }
   ]);

// 4 - Selecione os bancos que têm o valor total de transações maior que 1000.
db.transactions.aggregate(
    [
      {
        $group: {
          _id: "$bank",
          total: { 
              $sum: "$value" 
            }, 
        }
      },
      {   $match: { "total": { $gt: 1000 } }}
    ]
  );
 