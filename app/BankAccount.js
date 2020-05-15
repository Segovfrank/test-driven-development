class BankAccount{

    constructor(balance, history){
        this.balance = balance;
        this.history = history;
    }

    getCurrent(){
        return this.balance;
    }

    append(amount){
        if(amount < 0){
            return;
        }
        this.balance += amount;
        return this.balance;
    }

    
    substract(amount){
        if(amount < 0){
            return;
        }
        this.balance -= amount;
        return this.balance;
    }

    merge(account){
        this.balance += account.balance;

        Array.prototype.push.apply(this.history,account.history); 

        return this;
    }

    getHistory(){
        return this.history;
    }


}

module.exports = BankAccount;