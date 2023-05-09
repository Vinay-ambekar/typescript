//type alias //we can creat custom types
type User={
    name:string;
    age:number;
    address?:string;//optional either it may string or undefind
}

const user:User={
    name:'Rakesh k',
    age:30,
}
console.log(user)
function login(userData:User):User{
    return userData;

}
console.log(login({name:'jhon doe',age:20}))

type a=number
const b:a=123//we cannot use string here
console.log(b)

type x=number |string
const y:x="vinay" //either i have to string or number 
console.log(y)