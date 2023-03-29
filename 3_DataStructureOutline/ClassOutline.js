/* ES2015 Class Syntax */

/*
Understand how JavaScrtip implements the idea of classes
Define terms like abstraction, encapsulation and polymorphism
*/

/*
WHAT IS A CLASS?

A blueprint for creating objects with pre-defined properties and methods
*/


/* The method to create new objects must be called constructor. */
class Student{
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
}

let firstStudent = new Student("Cezanne", "Lee", 5);
let secondStudent = new Student("Van", "Lee", 4);

console.log(firstStudent);
console.log(firstStudent.firstName);
console.log(firstStudent.lastName);
console.log(firstStudent.grade);

console.log(secondStudent);
console.log(secondStudent.firstName);
console.log(secondStudent.lastName);
console.log(secondStudent.grade);