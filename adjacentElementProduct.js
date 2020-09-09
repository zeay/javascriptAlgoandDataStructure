function adjacentElementProduct(nums){ 
    let largestProduct = nums[0] * nums[1];
    for(let i=1; i<nums.length - 1; i++){
        const product = nums[i] * nums[i+1];

        largestProduct =  largestProduct < product ? product : largestProduct;
    }

    return largestProduct;
}

console.log(adjacentElementProduct([6, 3, -2, -5, 7, 3]));
console.log(adjacentElementProduct([7, 4, 6, 9, 7, 3, 7, 4, -9, 4, 8, -4, 9, 0, -2, 8, -8, -9]));
