// LC #1 - Two Sum 
// https://leetcode.com/problems/two-sum/

//Attempt #1
//Correct Solution - passed all tests

function twoSum(arr, target) {
    let indexes = [];
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if (arr[j] === target - arr[i]){
                return [ i, j ];
            }
        }
    }
    return indexes
}

module.exports = twoSum;

//PREP

//P: an array of numbers, and an integer
//R: an array with two elements
//E: [2,7,11,15], 9 => [0,1]
//P: create two for loops with a one iterating with i and the other loop with j.
//   Have the j for loop start and be always 1 more than i. Next make a comparison
//   if the element during the j iteration equals to the target value minus the 
//   i iteration element. If so, then return both i and j within an array since they
//   will represent the indexes of the two numbers added to equal the target.
