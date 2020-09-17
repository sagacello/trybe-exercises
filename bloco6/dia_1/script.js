let entradaNome = document.querySelector('#nome')
let entradaEmail = document.querySelector("#email")
let entradaCpf = document.querySelector("#cpf")
let botaoApagarLista = document.querySelector("#apaga-tudo")
let listaDados = document.querySelector("#lista")


//Colocar estados no combobox
function inserir(){
    let estados = [
        'Acre',
        'Alagoas',
        'Amapá',
        'Amazonas',
        'Bahia',
        'Ceará',
        'Distrito Federal',
        'Espírito Santo',
        'Goiás',
        'Maranhão',
        'Mato Grosso',
        'Mato Grosso do Sul',
        'Minas Gerais',
        'Pará',
        'Paraíba',
        'Paraná',
        'Pernambuco',
        'Piauí',
        'Rio de Janeiro',
        'Rio Grande do Norte',
        'Rio Grande do Sul',
        'Rondônia',
        'Roraima',
        'Santa Catarina',
        'São Paulo',
        'Sergipe',
        'Tocantins'
    ];
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
//apagar entradas
botaoApagarLista.addEventListener("click" , function(){
        let tudo = document.querySelectorAll('input')
        for(elementos in tudo){
            tudo[elementos].value = ""
        }
})