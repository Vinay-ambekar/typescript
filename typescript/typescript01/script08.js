//the below given function is called 'Narrowing'
function printId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId('vinya');
printId(1);
