function xadrez(peca){    
    peca = peca.toLowerCase()
    if(peca == "peao")
        return "Para frente uma casa"
    if(peca == "bispo")
        return "Diagonal"
    if(peca == "rainha")
        return "Move-se ao longo da horizontal, vertical e diagonais"
    if(peca == "rei")
        return "Move-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez."
    if(peca == "cavalo")
        return "É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa."
    if(peca == "torre")
        return "A torre movimenta-se pela vertical ou horizontal"
    else
        return 'invalido'
}

let peca = "BPO"
console.log(xadrez(peca))