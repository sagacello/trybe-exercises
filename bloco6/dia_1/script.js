let entradaNome = document.querySelector('#nome')
let entradaEmail = document.querySelector("#email")
let entradaCpf = document.querySelector("#cpf")
let botaoApagarLista = document.querySelector("#apaga-tudo")
let listaDados = document.querySelector("#lista")


//Colocar estados no combobox
function inserir(){
    const estados = ["Sao Paulo" , "Rio de Janeiro" , "Mato Grosso","Acre", "Minas Gerais"]
    let listaEstados = document.querySelector("#estado")
    for(estado in estados){
        let novoOption = document.createElement("option")
        listaEstados.appendChild(novoOption)
        novoOption.innerHTML = estados[estado]
    }
}
inserir()

//inserir nome
entradaNome.addEventListener('keydown' ,function(enter){
    if(enter.which == 13){    
        let novoElemento = document.createElement("li")
        novoElemento.classList.add("list-group-item")                           
        novoElemento.innerHTML = entradaNome.value
        listaDados.appendChild(novoElemento)
      }
})
//inserir email
entradaEmail.addEventListener('keydown' ,function(enter){
    if(enter.which == 13){    
        let novoElemento = document.createElement("li")
        novoElemento.classList.add("list-group-item")                           
        novoElemento.innerHTML = entradaEmail.value
        listaDados.appendChild(novoElemento)
      }
})
//inserir CPF
entradaCpf.addEventListener('keydown' ,function(enter){
    if(enter.which == 13){    
        let novoElemento = document.createElement("li")
        novoElemento.classList.add("list-group-item")                           
        novoElemento.innerHTML = entradaCpf.value
        listaDados.appendChild(novoElemento)
      }
})
