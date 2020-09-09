function addTwoDigit(number){ 
    let numString = number.toString();
    let numStringArray = numString.split("");
    if(numStringArray.length < 2){
        return parseInt(numStringArray[0]);
    }

    let sum = 0;
    numStringArray.forEach(num =>{ 
        sum += parseInt(num);
    });
    return sum;
}

console.log(addTwoDigit(85));