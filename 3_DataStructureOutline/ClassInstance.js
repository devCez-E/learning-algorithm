class Student{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    makeLate(){
        this.tardies += 1;
        if(this.tardies >= 3){
            return "YOU ARE EXPELLED!!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScores(score){
        this.scores.push(score);
        return this.scores;
    }
    calcuateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b})
        return sum/this.scores.length;
    }
}

let firstStudent = new Student("Cezanne", "Lee");
let secondStudent = new Student("Van", "Lee");

console.log(firstStudent.fullName());

console.log(firstStudent.makeLate());
console.log(firstStudent.makeLate());
console.log(firstStudent.makeLate());
console.log(firstStudent.makeLate());

secondStudent.addScores(92);
secondStudent.addScores(87);
secondStudent.addScores(76);
secondStudent.addScores(100);
console.log(secondStudent.calcuateAverage());