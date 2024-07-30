//video 12

//numbers and math
 const score=400
 console.log(score);

 const balance=new Number(100)
 console.log(balance);


 console.log(balance.toString().length);
 console.log(balance.toFixed(2));

 //video 13 
 //date and time

 let mydate=new Date()
 console.log(mydate.toString()) 

 // time

 let timestamp=Date.now()
 console.log(timestamp);

 // video 14
 //Array-is an object we can store elements-

 const myarr=[0,1,2,3,4,5]

 console.log(myarr[1])

 myarr.push(6)
 myarr.push(7)
 myarr.pop()
 myarr.unshift(0)
 myarr.shift()

 console.log(myarr);


 //slice-it will not manipulate the original array
 //  and splice manupulate the array
 // concat method we can use 
 // we can add sub arrays in one array and show it using flat method
 // we can convert array using from method

 console.log(Array.from("Punam"))


 //from set of element we can convert it into array
 let score1 =100
 let score2=200
 let score3=300

 console.log(Array.of(score1,score2,score3));

 //video 16
 // Objects

 //singleton -constructors se banega to singleton

 //object literals
 
 //const tinderUser=new Object()
 const tinderUser={}

tinderUser.Id="12345"
 //object.assign() it can combine all obejct elements as array 
 //keys values of that array 

 //vedio 20

 //functions

 function calculatePrice(...num1)
 {
    return num1
 }
 console.log(calculatePrice(200 ,300 ,400 ,500))

 //Objects
// const user={
//     username:"Punam",
//     price:199
// } 

// function handleobject(anyobject)
// {
//     console.log('username is ${anyobject.username}and price is &{anyobject.price}');

// }
// handleobject(user)
// functions with array
// const myNewArray=[200,400,600,800]
// function returnSecondvalue(getarray){
//     return getArray[1]
// }
// console.log(returnSecondvalue(myNewArray));
