// Class Topic: encapsulation and abstraction
var TransectionType;
(function (TransectionType) {
    TransectionType[TransectionType["DEPOSITE"] = 1] = "DEPOSITE";
    TransectionType[TransectionType["DEDUCT"] = 2] = "DEDUCT";
})(TransectionType || (TransectionType = {}));
var Bank = /** @class */ (function () {
    function Bank(accountHolderName, balance) {
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }
    Bank.prototype.depositMoney = function (money) {
        this.doTransaction(money, TransectionType.DEPOSITE);
        console.log('transection successful.', 'Your updated balance is: ' + this.balance);
    };
    Bank.prototype.widthdrawMoney = function (money) {
        this.doTransaction(money, TransectionType.DEDUCT);
        console.log('transection successful.', 'Your updated balance is: ' + this.balance);
    };
    Bank.prototype.doTransaction = function (money, type) {
        if (type == TransectionType.DEPOSITE) {
            this.balance += money;
        }
        else {
            this.balance -= money;
        }
    };
    return Bank;
}());
var bank = new Bank('prafful', 2000);
bank.depositMoney(500);
bank.widthdrawMoney(1000);
