//Using Restoperator
function addNumber(...num){
    let result = 0;
    num.forEach(num=>{ 
        result += num;
    });
    return result;
}

console.log(addNumber(5, 5));
console.log(addNumber(5, 5, 67, 76.34, 34, 45));
console.log(addNumber(4, 3, 2, 1));
console.log(addNumber(5, 5, 85, 5));