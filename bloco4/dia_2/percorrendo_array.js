
function percorrer(){
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    for (let i = 0; i < numbers.length ; i++){
        console.log(numbers[i])
    }
}
    
function percorrer2(){
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    for (let item of numbers) {
        console.log(item); // 
    }
}

percorrer()
//percorrer2()


