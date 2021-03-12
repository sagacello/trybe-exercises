

use('test');

db.inventory.updateOne(
  { item: "paper" },
  { $set: { "size.uom": "cm" , status: "p"}}
)

db.inventory.updateMany(
  { "qty": { $lt: 50 } },
  { $set: { "size.uom": "in", status: "P" } }
);


// quando o id = 100 , faz as alteraçoes
db.products.update(
  { _id: 100 },
  { $set: {
      quantity: 500,
      details: { model: "14Q3", make: "xyz" },
      tags: [ "coats", "outerwear", "clothing" ]
    }
  }
);

db.products.update(
  { _id: 100 },
  { $set: {
      quantity: 500,
      details: { model: "14Q3", make: "xyz" },
      "details.2": { algumaCoisa: "14Q3"},// adiciono na posição 3 
      tags: [ "coats", "outerwear", "clothing" ]
    }
  }
);

//O operador $mul multiplica o valor de um campo por um número especificado, 
//persistindo o resultado dessa operação sem a necessidade do operador $set .
db.products.update(
  { _id: 1 },
  { $mul: { price: NumberDecimal("1.25"), qty: 2 } }
);

// se não existir ele cria o campo com o tipo do valor 
db.products.update(
  { _id: 2 },
  { $mul: { price: NumberLong("100") } }
);
// resposta, supondo que price nao existe =>>> { "_id": 2, "item": "Unknown", "price": NumberLong(0) }
//ou
db.products.update(
  { _id: 3 },
  { $mul: { price: NumberInt(5) } } // posso multiplicar campos de diferentes tipos numericos como o int e o long
);

//Com o operador $inc , você pode incrementar ou decrementar 
//valores em um campo específico, utilizando tanto valores positivos quanto negativos.
db.increment.update(
  { sku: "abc123" },
  { $inc: { quantity: -2, "metrics.orders": 1 } }
);


//$min : altera o valor do campo para o valor especificado se esse valor especificado é 
//menor do que o atual valor do campo;

//$max : faz o mesmo, porém altera o valor do campo se o valor especificado é maior do que o atual valor do campo.

// com o {} atualizo todo os valores
db.collection.updateMany({}, { $max: { campo: 75 } });
// Atualizando todos os valores do atributo "campo"
// para 75 caso sejam menores


// operador $currentDate atribui ao valor de um campo a data corrente , utilizando um tipo Date ou timestamp

db.customers.updateOne(
  { _id: 1 },
  { $currentDate: {
      lastModified: true, // recebe a data corrente, so precisa estar true, ja tinha o campo com alguma data
      "cancellation.date": { $type: "timestamp" } // cria o campo o tempo corrent
    }, $set: { // alteração normal para os dois abaixo
      "cancellation.reason": "user request", 
      status: "D"
    }
  }
);

//Você pode querer renomear um determinado atributo de um ou mais documentos. 
//Para isso, utilize o operador $rename .
db.fruits.updateOne(
  { name: "Banana" },
  { $rename: { // altera o name para productName
      "name": "productName"
    }
  }
);

//Para remover um ou mais campos de um documento, utilize o operador $unset 
db.fruits.updateMany(
  { productName: "Banana" },
  { $unset: { quantity: "" } } // removo o campo quantity
);

