// New Class Formet:
class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const specialPerson = new Person('Afzal', 'Hussain', 30000);
console.log(specialPerson);
const richPerson = new Person('Munsef', 'Ahmed', 2000);
console.log(richPerson);

// Old Class Formet:
function Person1(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const oldPerson = new Person1("Grand", "Father", 1500);
console.log(oldPerson);