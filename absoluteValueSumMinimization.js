function absoluteValueSumMinimization(data){ 
    const isEven = data.length % 2 === 0;
    return isEven ? data[(data.length / 2) - 1] : data[Math.floor(data.length / 2)] ; 
}

console.log(absoluteValueSumMinimization([2, 4, 6]));
console.log(absoluteValueSumMinimization([2, 4, 6, 7]));
console.log(absoluteValueSumMinimization([2, 4, 6,7,8]));
console.log(absoluteValueSumMinimization([2, 4, 6,7,8,9,11,1,5,76,77,98,54]));