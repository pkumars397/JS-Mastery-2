// Switch statement

// let id=3;
// switch(id){
//     case 1: console.log("User1");
//            break;
//     case 2: console.log("User2");
//            break;
//     case 3: console.log("User3"); //! if you dont put the break it will execute all the case ,except default.
           
//     case 4: console.log("User4");
//            break;

//     default:console.log("No user")

// }

// ! Falsy values in JS>>>
// (false,0,-0,"",undefined,null,NaN,0n)  if we put this falsy values in conditional it will be treated as false;
// ! Truthy values in JS >>>
// " ","false","0",[],{},function(){}

// ? way to check array is empty
// if(Array.length==0)

// ? Way to check object is empty
//  if(Object.keys(obj).length==0)

// * Some Comparisions
// console.log(true=="true",true=="true");

// console.log("2"==2);

// console.log(''==0,""===0,""==[]);
console.log(undefined==0,undefined==1);

console.log(0==[],0=="0","0"==[]);

// ! Nullish Coelscing operator and Ternary Operator.
let b=10 ?? 20;
let a=null ?? 11 ??15;

console.log(a,b)

let res=(5>4)?console.log("true"):console.log("false");



//