// FREQUENCY COUNTERs (avoiding nested loops)
// ==========================================
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {},
        frequencyCounter2 = {}

    // populating objects with frequency of each array item
    for (let val in arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    // check frequencyCounter2 for indices that match vals of frquencyCounter1
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}



// MULTIPLE POINTERS
// ================= 2 POINTER SOLUTION:
// Time complexity: O(n)
// Space complexity: O(1)

function sumZero(arr) {
    let left = 0,
        right = arr.length - 1;
    
    while(left < right){
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) // undefined
sumZero([1, 2, 3]) // undefined

// SLIDING WINDOW
// ==============

function maxSubarraySum(arr,num){
    let maxSum=0;
    let tempSum=0;
    if(arr.length<num) return null;
    
    // get first sum
    for(let i=0;i<num;i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;

    // move window - that is, subtract first value and add new end value
    for(let i=num;i<arr.length; i++){
        //tempsum = tempsum - first value + new end value
        tempSum=tempSum-arr[i-num]+arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)) // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)) // 13
console.log(maxSubarraySum([], 4)) // null

// DIVIDE AND CONQUER
// ==================
// (binary search)
function search(arr, val){  
    let min=0;
    let max=arr.length-1;

    while(min <= max){
        let middle = Math.floor((min+max) /2);
        let currentElement = arr[middle];

        if (currentElement < val){
            min = middle+1;
        } else if (currentElement > val){
            max=middle-1;
        } else {
            return middle;
        }
        return -1;
    }

}


search([1, 2, 3, 4, 5, 6], 4) // 3
search([1, 2, 3, 4, 5, 6], 6) // 5
search([1, 2, 3, 4, 5, 6], 11) // -1