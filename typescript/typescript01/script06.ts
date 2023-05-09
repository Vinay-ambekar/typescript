//extend interfaces
interface Book{
    name:string;
    price:number;
}
interface EBook extends Book{
    fileSize:number;
    format:string;
}
interface AudioBook extends EBook{
    duration: number;
}
const book01:Book={
    name:'atomi habits',
    price:1200,
}
const book02:EBook={
    name:'atomi habits',
    price:1200,
    fileSize:1313,
    format:'sdsfdf',
}
const book03:AudioBook={
    name:'atomi habits',
    price:1200,
    fileSize:1313,
    format:'sdsfdf',
    duration: 5,
}