const assert = require('assert');
const BankAccount = require('../app/BankAccount');

describe('Bank account', () => {
    describe('#current', () => {

        let account = new BankAccount(1000, [{"movements": -100, "date": "04-05-2020"}]);

        it('Should return current balance vectors', () => {
            assert.equal(account.getCurrent(), 1000);
        })
    })

    describe('#append', () => {

        let account = new BankAccount(1000, [{"movements": -100, "date": "04-05-2020"}]);


        it('Should append balance', () => {
            assert.equal(account.append(350), 1350)
        })
    })

    describe('#substract', () => {

        let account = new BankAccount(1000, [{"movements": -100, "date": "04-05-2020"}]);

        it('Should substract balance', () => {
            assert.equal( account.substract(500), 500)
        })
    })

    describe('#history', () => {

        let account = new BankAccount(1000, [{"movements": -100, "date": "04-05-2020"}]);

        it('Should get bank account history', () => {
            assert.deepEqual(account.getHistory(), [{"movements": -100, "date": "04-05-2020"}]);
        })
    })

    describe('#merge', () => {

        let account = new BankAccount(1000, [{"movements": -100, "date": "04-05-2020"}]);
        let account2 = new BankAccount(-500, [{"movements": -450, "date": "02-03-2019"}]);

        let accountRes = new BankAccount(500, [{"movements": -100, "date": "04-05-2020"}, {"movements": -450, "date": "02-03-2019"}]);

        it('Should merge accounts', () => {
            assert.deepEqual(account.merge(account2), accountRes);
        })
    })
})