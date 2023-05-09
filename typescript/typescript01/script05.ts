//interfaces
// interfaces is shape of an object
interface Trasaction{
    payerAccountNumber:number;
    PayeeAccountNumber:number;
}
const tranction01:Trasaction={
    payerAccountNumber:321313,
    PayeeAccountNumber:31332   

};
const tranction02:Trasaction={
    payerAccountNumber:9798,
    PayeeAccountNumber:7978   

}
interface BankAccount{
    accountNumber:number;
    accountholder:string;
    balance:number;
    isActive:boolean;
    transactions:Trasaction[]
}
const bankaccount:BankAccount={
    accountNumber:123,
    accountholder:'john doe',
    balance:4000,    
    isActive:true,
    transactions:[tranction01,tranction02]

}
console.log(bankaccount)