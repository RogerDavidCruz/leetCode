// 136. Single Number
// https://leetcode.com/problems/single-number/

// Given a non-empty array of integers, every element appears twice except for
// one. Find that single one.
//
// Note:
//
// Your algorithm should have a linear runtime complexity. Could you implement
// it without using extra memory?
//
// Example 1:
//
// Input: [2,2,1]
// Output: 1
// Example 2:
//
// Input: [4,1,2,1,2]
// Output: 4

var singleNumber = function(nums) {
     nums.sort();
    let num = [];
    for (let i = 0; i<nums.length-1; i++){
        if (nums[i] === nums[i+1]){
          num.push(nums[i])
          num.push(nums[i+1])
        }
    }
    let result = nums.filter(x => !num.includes(x));
    return result
};
