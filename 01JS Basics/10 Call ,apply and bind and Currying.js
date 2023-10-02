let obj={
    name:"prashant",
    fullname:function(lastname,age){
        console.log(this.name + " "+lastname+" age: "+age)
    }
};

let obj2={
    name:"binu"
};
// fucntion borrowing method of others can be used with any object using call ,apply and bind

// obj.fullname.call(obj2,"kumar",24) // attaching the obj method to other object.
// obj.fullname.apply(obj2,["kumar",24])// pass arguments in an array.
// let func=obj.fullname.bind(obj2,"prashant")// returns a copy of function.can pass argument here itself or later.
// func(23);

// using separate function.

// function fullname(lastName,age){
//     console.log(this.name+" "+lastName+" "+age);
// }

// fullname.call(obj2,"kumar",23);
// fullname.apply(obj2,["kumar",23])
// const returnFunc=fullname.bind(obj2,"kumar",23);
// returnFunc();

// Currying (Two way of doing using bind and by returning a function with one parameter)

// let multiply=function(a,b){
//      console.log(a*b);
// }
// using bind;

// let multi2=multiply.bind(this,2);
// multi2(4)

// Using single parameter function.(closure applied),can return anonymous function or named one too.

// let m=function(a){
//     return function (b){
//         console.log(a*b);
//     }
// }
// m(5)(10)

// Closures(function bundled together with its sorounding or lexical environment.a closure created each time a function is created.)
// (function a(){
//     let a=10;
//     return function y(){
//         console.log(a)
//     }
// })()();

function a(b){
    let a=10;
    return function y(){
        console.log(a,b)
    }
}
let r=a(20);
r();