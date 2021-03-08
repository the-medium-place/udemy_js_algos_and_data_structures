// IMPLEMENT A FUNCTION CALLED countUniqueValues() WHICH ACCEPTS A *SORTED* ARRAY
// AND COUNTS THE UNIQUE VALUES IN THE ARRAY.
// THERE CAN BE NEGATIVE NUMBERS IN THE ARRAY, 
// BUT IT WILL ALWAYS BE SORTED

// ===================================================
// MY SOLUTION:
// function countUniqueValues(arr){
//     if(!arr.length){
//         return 0;
//     } else if (arr.length === 1){
//         return 1;
//     }
//     let counter=1;
    
//     for(let i=0; i<arr.length-1; i++){
//         if(arr[i] !== arr[i+1]){
//             counter++
//         }
//     }
//     return counter;
// }

// TWO POINTERS SOLUTION:
function countUniqueValues(arr){
    if (!arr.length) return 0
    let i=0;
    for(let j=1; j<arr.length; j++){
        if(arr[i] !== arr[j]){
            i++
            arr[i] = arr[j];
        }
    }
    return i+1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))// 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4


