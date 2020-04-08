// Group Anagrams
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3288/

// Given an array of strings, group anagrams together.
//
// Example:
//
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:
//
// All inputs will be in lowercase.
// The order of your output does not matter.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 
var groupAnagrams = function(strs) {
    const groupMap = {};
    for (let str of strs) {
        let sum = 0;
        for (let i = 0; i<str.length; i+= 1){
            sum += str.charCodeAt(i) ** 4;
        }
        if (!groupMap[sum]){
            groupMap[sum] = [];
        }
        groupMap[sum].push(str);
    }
    return Object.values(groupMap)
};
