//important topic 'generics'
//simple example
function logString<T>(arg:T):T{
    console.log(arg);
    return arg;
}
logString('logged in')
logString(78)
logString([1,2,3,2])
logString(true)


