console.log("Punam")
const AccountId=12345
let AccountEmail="punam@gmail.com"
var AccountPassword="123456"
accountCity="Pandharpur"
console.log(AccountId)
console.table([AccountId,AccountEmail,AccountPassword,accountCity])

//let keyword we use because scope problem in javascript

"use strict";//use all code as newer version
//alert("hello") we are using node js no browser that why it will show error
console.log(3+3)

//datatypes
//numbers= 2 to the power 53
//bigint
//string
//boolean=true/false
//null=standalone value
//undefined
//symbol=unique value representations like components of web like that
// object

console.log(typeof "Punam")
console.log(typeof null)//null is a object

//video 6 notes

let score=3
console.log(typeof score);
console.log(typeof(score));

let valurInNumber=Number(score)//convert the number 
console.log(valurInNumber)//if value is null then output 0,if undefined then NaN
//"56"=56
//"33aabc"=NaN
//true=1;false=0

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)//converting in boolean
console.log(booleanIsLoggedIn)

//string conversion

let someNumber=33
let stringvariable=String(someNumber)
console.log(stringvariable);

//Operations video 7

let value =3
let negvalue=-value
console.log(negvalue);

let str1="hello"
let str2="punam"
let str3=str1+str2
console.log(str3);


//comparisions video 8

console.log("2"===2)//it will check its type also data type it will be better way to compare

//video 9  

//primitive type-call by value it will create copies and changes are being in that copy

//7 types: String,Number,Boolean,null,Undefined,symbols,bigint

// reference (Non primitive)
//Array,Objecs,Functions 

//javascript is dynamic 

//example

const heros=["Ironman","shaktiman","spiderman"]

let myObj={
    nmae:"punam",
    age:22
}
console.log(myObj)
 
const myfunction=function(){
    console.log("punamhello");
}
return myfunction();

//video 10 
//stack (primitive) heap(non primitive)


//video 11

// strings

//const pname="punam"
//const Repocount="20"

//const newLocal = ('hello my name is ${pname} and my repo count is ${Repocount}');

const gamename=new String('Punam')
console.log(gamename);

//methods of string 
const newString=gamename.substring(0,4)
console.log(newString);


//trim()start and end of it will used on white spaces
//replace()
const url="https://google.com"
console.log(url.replace('go','-'))
   