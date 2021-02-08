

// Understanding The Problem:
// ==========================
// WRITE A FUNCTION THAT TAKES TWO NUMBERS AND RETURNS THEIR SUM
// * Can i restate the problem in my own words?
//// "implement addition"

// * What are the inputs that go into the problem?
//// really big numbers? how many numbers coming in? floats?

// * What are the outputs that should come from the solution to the problem?
//// should it be an integer? float?

// * Can the outputs be determined from the inputs? (Do I have enough info?)
//// most of the time, yes. but, what happens if less than 2 numbers entered? Are we worrying about edge cases?

// * How should I label the important pieces of data that are a part of the problem?
//// 


// Exploring concrete Examples:
// ============================
// WRITE A FUNCTION WHICH TAKES IN A STING AND RETURNS COUNTS OF EACH CHARACTER IN THE STRING
// -coming up with examples to understand the problem beter
// -examples also provide sanity checks that your eventual solution works how it should
// -User Stories! Unit Tests! 

// * Start with *simple* examples
// charCount('aaaa') //{a:4}
// charCount('hello') //{h:1, e:1: l:2, o:1} should output include letters that don't appear??

// * progress to more complex examples
// charCount('my phone number is 18492498') //include spaces? 
// charCount('Hello hi') //capital vs lowercase?

// * explore examples with empty inputs
// charCount() //?
// charCount('') //?

// * explore examples with invalid inputs
// charCount([1, 2, 3]) //?

// Break It Down:
// ==============

// function charCount(str){
    // make object to return at end

    // loop over string, for each character...
        // if char is a number/letter and a key in object, add 1 to count

        // if char is a number/letter and is not in object, add the key and set value to 1

        // if char is something else (not num/ltr) don't do anything

    // return object at end
// }


// Solve or Simplify:
// ==================
function charCount(str){
 // make object to return at end
    const result={};
    // loop over string, for each character...
    for (let i=0; i<str.length; i++){
        const char = str[i].toLowerCase();
        // if char is a number/letter and a key in object, add 1 to count
        if (result[char] > 0){
            result[char]++
        }
        // if char is a number/letter and is not in object, add the key and set value to 1
        else {
            result[char] = 1;
        }
        // if char is something else (not num/ltr) don't do anything
        
    }
    // return object at end
    return result;
}

console.log(charCount('hello'))
console.log(charCount('Hi there')) 