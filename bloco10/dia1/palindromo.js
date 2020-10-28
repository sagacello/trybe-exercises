const palindromo = (string) => {
    if (string.split('').reverse().join('') !== string) return false;
    return true
 }
 
 //console.log(palindromo("aba"))
 module.exports = palindromo;

