//Objective is to make a deep copy of a linked list with nodes that have a
//'next' and 'random' pointer

//A Node has the following construct:
//function Node(val, next, random) {
//   this.val = val;
//   this.next = next;
//   this.random = random;
//}

//O(n) solution that iterates over the linked list twice
//Once to set the values and once to set the pointers

let dic = new Map()
dic.set(null, null)

if (!head) {
    return null 
}

let curr = head
while (curr) {
    dic.set(curr, new Node(curr, null, null))
    curr = curr.next
}

curr = head
while (curr) {
    dic.get(curr).next = dic.get(curr.next)
    dic.get(curr).random = dic.get(curr.random)
    curr = curr.next
}

return dic.get(head)