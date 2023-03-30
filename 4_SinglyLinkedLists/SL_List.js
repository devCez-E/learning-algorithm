// pice of data - val
// reference to next node = next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

/*
var first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("How");
first.next.next.next = new Node("are");
first.next.next.next.next = new Node("you");

console.log(first);
*/

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var node = new Node(val);
        if(!this.head) this.head = node;
        else this.tail.next = node;

        this.tail = node;
        this.length++;
        return this;
    }

    pop(){
        if(this.length == 0) return undefined;
        
        var current = this.head;
        var pre = null;

        while(current.next){
            pre = current;
            current = current.next;
        }

        if(this.length > 0) this.length--;

        if(pre != null) pre.next = null;
        else this.head = null;

        this.tail = pre;
    
        return current;
    }

    shift(){
        if(!this.head) return undefined;

        var temp = this.head;
        this.head = this.head.next;
        this.length--;

        if(this.length == 0) this.tail = null;

        return temp;
    }

    unshift(val){
        var node = new Node(val);

        if(!this.head) {
            this.head = node;
            this.tail = this.head;
        } else{
            node.next = this.head;
            this.head = node;
        }
        this.length++;

        return this;
    }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("99")

/*console.log(list);
console.log(list.head);
console.log(list.head.next);
console.log(list.head.next.next);*/

console.log(list);
list.unshift("WoW");
console.log(list);