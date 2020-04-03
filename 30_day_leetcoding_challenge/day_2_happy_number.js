// Happy Number
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3284/

// Write an algorithm to determine if a number is "happy".
// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by
// the sum of the squares of its digits, and repeat the process
// until the number equals 1 (where it will stay), or it loops
// endlessly in a cycle which does not include 1. Those numbers for
// which this process ends in 1 are happy numbers.
//
// Example:
//
// Input: 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function(n, checked) {
    let sumUp = 0
    if(checked === undefined){
      checked = [];
    }
    let seperateNumbers = n.toString().split("").map(x => parseInt(x*x))
    for(i=0; i < seperateNumbers.length ; i++){
        let sumUp = seperateNumbers.reduce(function(a,b){
        return a+b;
      }, 0)
    if(sumUp === 1){
      return true;
    }
     else if (checked.includes(sumUp)){
       return false;
     }
      checked.push(sumUp);
      return isHappy(sumUp, checked);
    }
};
