class Student{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    static EnrollStudents(){
        return "ENROLLING STUDENTS!"
    }
}

let firstStudent = new Student("Cezanne", "Lee");
let secondStudent = new Student("Van", "Lee");

let message = Student.EnrollStudents();
console.log(message);

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    static distance(a, b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

let dist = Point.distance(p1, p2);
console.log(dist);