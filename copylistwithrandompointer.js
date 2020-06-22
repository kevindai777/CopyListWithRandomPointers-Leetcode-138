//Objective is to make a deep copy of a linked list with nodes that have a
//'next' and 'random' pointer

class Node {
    constructor(val, next, random) {
        this.val = val 
        this.next = next 
        this.random = random
    }
}


//O(n) solution that iterates over the linked list twice
//Once to set the values and once to set the pointers

let dic = new Map()
dic.set(null, null)

if (!head) {
    return null 
}

//First iteration over the linked list to make a deep copy of the node
//and have a reference to itself
let curr = head
while (curr) {
    dic.set(curr, new Node(curr, null, null))
    curr = curr.next
}

//Second iteration over the linked list to give each node the correct
//next and random pointers
curr = head
while (curr) {
    dic.get(curr).next = dic.get(curr.next)
    dic.get(curr).random = dic.get(curr.random)
    curr = curr.next
}

return dic.get(head)