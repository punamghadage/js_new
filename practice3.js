//scope

//let var const
// scope problem of var 


//video 23

//this and arrow function

// const user={
//     username:"Punam",
//     price:20,
//     welcomeMessage:function(){
//         return this.username;
//     }
// };
// user.welcomeMessage 
//Regular functions have their own this context. 
// And this is determined dynamically depending 
// on how you call or execute the function. Arrow functions, 
// on the other hand, do not have their own this context. 
// Instead, they capture the this value from the surrounding 
// lexical context in which the arrow function was created.
const addtwo =(num1,num2)=>{
    return num1+num2
}
console.log(addtwo(3,5))

//functions

//There are three main types of functions in JavaScript: 
//1.named functions, anonymous functions, and arrow functions

//IIFE -Immediately Invoked Function Expression 
//-we use when we want to run the process immediately

 //it will be used to overcome the global polution

//  (function(){
//     var connected='this variable ';
//     console.log(connected);
//  })();

//video 25

//execution of program in javscript
//1 . global execution-this
//2.memory creation phase-val1 valu2 can be undefined-referance of example line by line
//3.Execution phase 

// video 26
// const loggedTnFormEmail=true
// if(userloggedIn && debitcard && 2==3) we can use or also ||
// {
//     console.log("allow to buy courser")
// }

//nullish coalescing operator(??):null undefined

// let val1;
// val1=  5 ?? 10
  

//loops

for(let i=0;i<=20;i++)
{
    if(i==5)
    {
       // console.log('5 detected');
        break //continue
    }
  //  console.log(i);
}

//other loops 
//for of 

const arr=[1,2,3,4,5]

for(const num of arr)
{
    console.log(num)
}

//map --key or value paires ,their is no duplicate value all
//are unique values

    const map=new Map()

    map.set('IN',"India")
    map.set('usa',"Ind")
    map.set('una',"Indi")
    map.set('IN',"India")
    map.set('IN',"India")

   // console.log(map)

    //for in loop
    //key and value

    const mybobject=
    {
        js:'javascript'
    }
    for(const key in mybobject)
    {
       // console.log(key)
    }


    //forEach high order array and loop 
const coding=["pu","poo","pop","poop"]

coding.forEach((item)=>{
console.log(item)
})

//.filter  ,reduce


