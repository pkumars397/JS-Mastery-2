// ! Lexical Scope>> when execution context is created there is lexical environment is also created which contains the local variables and its parents memory location and there lexical parents lexical scopes.
// function outterfunc1(){
//     let a=10;
//     function innerfunc1(){
//         let b=129;
//         console.log(a);
//     }
//     function innerfunc2(){
//         console.log(a);
//         // console.log(b); // can't access siblings 
//     }
//     innerfunc1();
//     innerfunc2();
// }
// // console.log(a)// can't access innerfunction.
// outterfunc1();


// Closures >> function bound together withs its lexical environments.

function multi(a){
    return function(b){
        return a*b;
    }
}

let returnFunc=multi(4);// will return function with its lexical scope.
console.log(returnFunc(3));