// ANAGRAMS! 
// Given two strings, write a function to determine if the second string is an anagram of the first
// using the 'frequency counters' pattern


function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let counter1 = {},
        counter2 = {};

    for (let i = 0; i < str1.length; i++) {
        counter1[str1[i]] = (counter1[str1[i]] || 0) + 1;
    }
    for (let i = 0; i < str2.length; i++) {
        counter2[str2[i]] = (counter2[str2[i]] || 0) + 1;
    }
    for (let key in counter1) {
        if (!(counter1[key] === counter2[key])) {
            return false;
        }
    }
    return true;
}

console.log(isAnagram('', '')) //true
console.log(isAnagram('aaz', 'zza')) // false
console.log(isAnagram('anagram', 'nagaram')) // true
console.log(isAnagram('asdfghjklasdfghjkl', 'aassddffgghhjjkkll')) // true
console.log(isAnagram('abcde', 'bcedaf')) // false