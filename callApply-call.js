const specialMan = {
    firstName: "Mars",
    lastName: "Rian",
    salary: 40000,
    chargeBill: function(amount, tips, tax) {
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const friendlyMan = {
    firstName: 'Ruhul',
    lastName: 'Amin',
    salary: 20000,
}
specialMan.chargeBill.call(friendlyMan, 3000, 500, 50);
console.log(friendlyMan.salary);

const bestFriend = {
    firstName: 'Sadik',
    lastName: 'Ahmed',
    salary: 30000
}
specialMan.chargeBill.apply(bestFriend, [4000, 1000, 100]);
console.log(bestFriend.salary);
console.log(specialMan.salary);