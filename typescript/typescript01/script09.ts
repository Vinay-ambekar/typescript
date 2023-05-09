function getFirstThree(x:string|number[]){
    return x.slice(0,3)

}
console.log(getFirstThree('hello'))
console.log(getFirstThree([1,2,3,4,5,6]))