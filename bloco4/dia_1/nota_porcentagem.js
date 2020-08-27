function notaPorcentagem(porcentagem){
    
    if(porcentagem >= 90 && porcentagem <= 100)
        return "A"
    if(porcentagem >= 80 && porcentagem < 90)
        return "B"
    if(porcentagem >= 70 && porcentagem < 80)
        return "C"
    if(porcentagem >= 60 && porcentagem < 70)
        return "D"
    if(porcentagem >= 50 & porcentagem < 60)
        return "F"
    if(porcentagem < 50 && porcentagem > 0)
        return "G"
    if(porcentagem <= 0 || porcentagem > 100)
        return "Erro"
}

let porcentagem = 80
console.log(notaPorcentagem(porcentagem))