//Java Solution

class Solution {
    public Node copyRandomList(Node head) {
        Map<Node, Node> map = new HashMap<>();
        map.put(null, null);
        
        Node curr = head;
        while (curr != null) {
            map.put(curr, new Node(curr.val, null, null));
            curr = curr.next;
        }
        
        curr = head;
        while (curr != null) {
            map.get(curr).random = map.get(curr.random);
            map.get(curr).next = map.get(curr.next);
            curr = curr.next;
        }
        
        return map.get(head);
    }
}