//genrics part 2
interface HasAge{
    age:number;
}
function getOldest<T extends HasAge>(people:T[]):T{
    return people.sort((a,b)=>b.age-a.age)[0];

}
const people:HasAge[]=[{age:30},{age:40},{age:10}]

interface Player{
    name:string;
    age:number;
}
const player:Player[]=[
    {name:'john',age:30},
    {name:'jane',age:35},
    {name:'joe',age:30},
]
getOldest(people).age
//assertion
//const person=getOldest(player)  as Player
//genrics
const person=getOldest(people);
person.age  