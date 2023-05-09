//structural typing or duck typing
interface ICreadential{
    username:string;
    password:string;
    isAdmin?:boolean;
}

function login(credentials:ICreadential):boolean{
    console.log(credentials);
    return true;
}
const user:ICreadential={
    username:'codersgyan',
    password:'sceret',
    isAdmin:true,

}
const users={ //it dont show error
    username:'codersgyan',
    password:'sceret',
    isAdmin:true,

}
login(user)
login(users)//it dont show error