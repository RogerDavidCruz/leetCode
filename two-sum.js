//Two-sum
//https://leetcode.com/problems/two-sum/

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// @param {number[]} nums
// @param {number} target
// @return {number[]}

 var twoSum = function(nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[j] == target - nums[i]) {
                return [ i, j ];
            }
        }
    }
  throw new IncorrectArgsException("No two sum solution");
}
