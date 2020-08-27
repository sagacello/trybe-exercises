function angulosInternos(A,B,C){
    if (A + B + C == 180)
        return true

    else if (A + B + C != 0)  
        return false
}
let A = 90 ; B = 10 ; C = 800

console.log(angulosInternos(A,B,C))
