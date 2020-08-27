function maior_tres_numeros(A, B, C){ 
    if (A > B && A > C ) 
        return A 
    else if (B > A && B > C)  
        return B
    else  (C > A && C > B)   
        return C
  } 

let A = 2 ;B = 10 ;C = 100
    
console.log(maior_tres_numeros(A,B,C))