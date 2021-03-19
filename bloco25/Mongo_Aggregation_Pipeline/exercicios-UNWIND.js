// O operador $unwind "desconstrói" um campo array do documento de entrada e gera como saída 
// um documento para cada elemento do array
db.inventory.insertOne({ _id: 7, item: "ABC1", sizes: ["S", "M", "L"] });
db.inventory.aggregate([{ $unwind : "$sizes" }]);
// saida
    //{ "_id" : 7, "item" : "ABC1", "sizes" : "S" }
   // { "_id" : 7, "item" : "ABC1", "sizes" : "M" }
    //{ "_id" : 7, "item" : "ABC1", "sizes" : "L" }