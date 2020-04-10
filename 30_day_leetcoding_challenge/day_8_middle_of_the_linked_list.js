// Middle of the linked list
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/529/week-2/3290/

// Given a non-empty, singly linked list with head node head, return a middle node of linked list.
//
// If there are two middle nodes, return the second middle node.
//
//
//
// Example 1:
//
// Input: [1,2,3,4,5]
// Output: Node 3 from this list (Serialization: [3,4,5])
// The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
// Example 2:
//
// Input: [1,2,3,4,5,6]
// Output: Node 4 from this list (Serialization: [4,5,6])
// Since the list has two middle nodes with values 3 and 4, we return the second one.
//
//
// Note:
//
// The number of nodes in the given list will be between 1 and 100.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


 /**
  * Definition for singly-linked list.
  * function ListNode(val) {
  *     this.val = val;
  *     this.next = null;
  * }
  */
 /**
  * @param {ListNode} head
  * @return {ListNode}
  */

 const listSize = nodeSize(head);
   let middleNodeNumber = Math.ceil(listSize / 2);
   let resultMiddleNode = head;
   if (listSize %2 == 0){
     middleNodeNumber = middleNodeNumber +1;
   }
   for (let i = 1; i < middleNodeNumber; i++ )
   {
       resultMiddleNode = resultMiddleNode.next;
   }
   return resultMiddleNode;
 }

 var middleNode = function(head) {
       const listSize = nodeSize(head);
   let middleNodeNumber = Math.ceil(listSize / 2);
   let resultMiddleNode = head;
   if (listSize %2 == 0){
     middleNodeNumber = middleNodeNumber +1;
   }
   for (let i = 1; i < middleNodeNumber; i++ )
   {
       resultMiddleNode = resultMiddleNode.next;
   }
   return resultMiddleNode;
 }

 /**
  * @param {ListNode} head
  * @return {Number}
  */
 function nodeSize(head) {
   let size = 1;
   let node = head;
   if (node == null)
   {
     return 0;
   }
   else
   {
     while (node.next != null)
     {
       node = node.next;
       size++;
     }
   }
   return size;
 };
