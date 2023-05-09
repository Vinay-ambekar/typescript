var tranction01 = {
    payerAccountNumber: 321313,
    PayeeAccountNumber: 31332
};
var tranction02 = {
    payerAccountNumber: 9798,
    PayeeAccountNumber: 7978
};
var bankaccount = {
    accountNumber: 123,
    accountholder: 'john doe',
    balance: 4000,
    isActive: true,
    transactions: [tranction01, tranction02]
};
console.log(bankaccount);
