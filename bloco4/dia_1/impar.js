function par(A,B,C){
    if(A % 2 != 0 || B % 2 != 0 || C % 2 != 0 )
        return "Alguma é impar"
    else
        return "tudo par"
}

let A = 2 ; B = 4; C = 44

console.log(par(A,B,C))