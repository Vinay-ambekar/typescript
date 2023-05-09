/* function getToatal(numbers:number[]){
    return numbers.reduce((acc,item)=>{
        return acc + item;
    },0)
}
console.log(getToatal([3,2,1])) */
//or
function gettoatal(numbers) {
    return numbers.reduce(function (acc, item) {
        return acc + item;
    }, 0);
}
console.log(gettoatal([3, 2, 1]));
