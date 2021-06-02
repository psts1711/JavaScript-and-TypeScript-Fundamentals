// CLASS TOPICS: Assignment

// Answer 1
class Bank{
    constructor(balance,accHolderName)
    {
        this.balance = balance;
        this.accHolderName = accHolderName;
    }
    checkBalance()
    {
        console.log('Your current balance is ' + this.balance);
    }
    withdrawAmount(amount)
    {
        this.balance -= amount
        console.log('Money withdraw successffully ' +this.balance);
    }
    depositeMoney(amount)
    {
        this.balance += amount
        console.log('Money deposite ' +amount);
        console.log('Current balnce after deposite ' +this.balance);

    }
}
bank = new Bank(1000, 'prafful');
bank.checkBalance();
bank.withdrawAmount(500);
bank.checkBalance();
bank.depositeMoney(1500)
bank.checkBalance();
console.log('----------------------------');

// Answer 2
class Student {
    constructor(sName, sRollNumber)
    {
        this.sName = sName;
        this.sRollNumber = sRollNumber;
    }

    setMarks(marks)
    {
        this.marks= marks;
    }
    setAge(age)
    {
        this.age = age;
    }
    displayAll()
    {
        console.log('Student Name: ' + this.sName);
        console.log('Student Roll.No: ' + this.sRollNumber);
        console.log('Student Age: ' + this.age);
        console.log('Student Marks: ' + this.marks);



    }
}

student = new Student('prafful', 1204);
student.setMarks(500);
student.setAge(25)
student.displayAll()
