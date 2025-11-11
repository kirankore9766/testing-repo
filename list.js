// Iterative javascript program 
// to search an element
// in linked list

//Node class
class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}

// Linked list class

// Head of list
let head;

// Inserts a new node at the front of the list
function push(new_data) {
    // Allocate new node and putting data
    let new_node = new Node(new_data);

    // Make next of new node as head
    new_node.next = head;

    // Move the head to point to new Node
    head = new_node;
}

// Checks whether the value 
// x is present in linked list
function search(head, x) {
    // Initialize current
    let current = head;

    while (current != null) {
        if (current.data == x)

            // Data found
            return true;
        current = current.next;
    }

    // Data not found
    return false;
}

// Driver code 

// Start with the empty list
// Use push() to construct list
// 14->21->11->30->10
push(10);
push(30);
push(11);
push(21);
push(14);

if (search(head, 21))
    console.log("Yes");
else
    console.log("No");
// This code contributed by aashish1995
