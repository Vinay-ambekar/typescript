//unians
type ID=number|string;//this is called unians either it is string or number but it can not be both string and number
//the below given function is called 'Narrowing'
function printId(id:ID){
    if(typeof id==='string'){
        console.log(id.toUpperCase());
    }else{
        console.log(id);
    }
}
printId('vinya')
printId(1)