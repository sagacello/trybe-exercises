function par(A,B,C){
    if(A % 2 == 0 || B % 2 == 0 || C % 2 == 0 )
        return "TEM PAR"
    else
        return "Todas imapares "
}

let A = 3 ; B = 3; C = 43

console.log(par(A,B,C))