interface HasAge{
    age:number;
}
function getOldest(people:HasAge[]):HasAge{
    return people.sort((a,b)=>b.age-a.age)[0];

}
const people=[{age:30},{age:40},{age:10}]

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