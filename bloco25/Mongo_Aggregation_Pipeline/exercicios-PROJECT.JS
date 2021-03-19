//------------------------------- PROJECT PROJETA SO OS CAMPOS QUE VC DESEJAR 
db.books.aggregate([
    {
      $project : {
        _id: 0, // 0 eu tiro o campo e 1 eu coloco o campo
        title : 1,
        author : 1
      }
    }
  ]);

  db.books.aggregate([
    {
      $project : {
        "author.first": 0,
        copies: 0 // dessa forma aparece todos menos os selecionados 
        // porque nao mandei aparecer nem um 
      }
    }
  ]);