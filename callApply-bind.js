const normalPerson = {
    firstName: "Munsef",
    lastName: "Ahmed",
    salary: 15000,
    getFullName: function() {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount) {
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}
const richPerson = {
    firstName: "Jon",
    lastName: "Kit",
    salary: 50000,
}
const richChargeBill = normalPerson.chargeBill.bind(richPerson);
richChargeBill(2000);
richChargeBill(3000);
console.log(richPerson.salary);
console.log(normalPerson.salary);