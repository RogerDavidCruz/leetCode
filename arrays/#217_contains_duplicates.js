// #217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    nums = nums.sort((a,b) => a - b)
    for(let i = 0; i<nums.length; i++){
        if(nums[i] === nums[i+1]){
            return true
        }
    }
    return false
};

//PREP

//P: an array of numbers
//R: boolean
//E: [1,3,4,4] => true
//P: use a for loop to check each index in the array, within
//   the for loop also iterate once more checking each element
//   against the index your on in the loop. Sorting the array
//   may help in returning false quicker.
