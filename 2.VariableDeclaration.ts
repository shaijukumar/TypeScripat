
var count = 5;
var count = 'a'; //get warning in ts

//better declare variable with let
let  count1 = 5;

let a;//by default type in a:any

let b:string;
let c:number;

let arr:number[] = [1,2,3];

const ColorRed = 0;
const ColorGreen = 1;


enum Color {Red, Blue, Green};//by default first value 0
enum ColorNew {Red = 0, Blue=1, Green=3};//by default first value 0
let BackgrounfColor = Color.Blue;