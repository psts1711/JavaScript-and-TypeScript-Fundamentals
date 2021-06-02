// Class Topic: encapsulation and abstraction

enum TransectionType{
    DEPOSITE = 1,
    DEDUCT = 2
}


class Bank{
   private accountHolderName: string;
   private balance: number;
    constructor(accountHolderName: string, balance: number)
    {
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    depositMoney(money: number)
    {
        this.doTransaction(money,TransectionType.DEPOSITE)
        console.log('transection successful.', 'Your updated balance is: '+ this.balance)
    }

    widthdrawMoney(money: number)
    {
        this.doTransaction(money,TransectionType.DEDUCT)
        console.log('transection successful.', 'Your updated balance is: '+ this.balance)
    }

    private doTransaction(money: number, type: number)
    {
        if(type==TransectionType.DEPOSITE)
        {
            this.balance += money;
        }
        else{
            this.balance -= money;
        }
    }

}

const bank = new Bank('prafful', 2000);
bank.depositMoney(500)
bank.widthdrawMoney(1000)
