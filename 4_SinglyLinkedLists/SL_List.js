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

    get(val){
        if(this.length < 0 || val >= this.length) return null;

        var node = this.head;
        var counter = 0;

        while(counter != val){
            node = node.next;
            counter++;
        }

        return node;
    }

    set(idx, val){
        var node = this.get(idx);
        if(!node) return false;
        else{
            node.val = val;
            return true;
        }
    }

    insert(idx, val){
        if(idx <0 || idx > this.length) return false;
        if(idx == this.length) return !!this.push(val);
        if(idx == 0) return !!this.unshift(val);
        
        var node = new Node(val);
        var pre = this.get(idx - 1);
        var aft = pre.next;

        pre.next = node;
        node.next = aft;
        this.length++;
        return true;
        
    }

    remove(idx){
        if(idx <0 || idx >= this.length) return false;
        if(idx == this.length - 1) return this.pop();
        if(idx == 0) return this.shift();

        var pre = this.get(idx - 1);
        var node = pre.next;
        pre.next = node.next;
        this.length--;

        return node;
    }

    reverse(){
        var node = this.head;
        var next = null;
        var prev;

        this.head = this.tail;
        this.tail = node;

        for(let i = 0; i < this.length; i++){
            prev = node.next;
            node.next = next;
            next = node;
            node = prev;
        }

        return this;
    }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("99");
/*console.log(list);
console.log(list.head);
console.log(list.head.next);
console.log(list.head.next.next);*/

console.log(list.insert(2, "999"));
console.log(list);

console.log(list.insert(5, "999"));
console.log(list);

console.log(list.insert(list.length, "777"));
console.log(list);

console.log(list.insert(0, "000"));
console.log(list);

console.log(list.remove(3));
console.log(list);

console.log(list.remove(list.length));
console.log(list);

console.log(list.remove(-1));
console.log(list);

console.log(list.reverse());