// ! function definition ,first order function.functions in js are senior citizens(first class citizens).
// ? when function returns something its stops the function execution.

// function addNum(a, b) {
//     // console.log(a+b)
//     if (!b || !a) {
//         console.log("shi argument daalo ji");
//         return;
//     }
//     return a + b;
// }

// console.log(addNum(1,));

// !default parametering

// function add(a = 0, b = 0) {
//     let result=a+b
//     return result;
// }

// console.log(add(1))

// ! rest Parameter
// function arr(a,b,...arr) {
//     return arr;
// }

// console.log(arr(1,2,3,4))

// * we can pass any parameter to function i.e Number,String,Array,Object,function itself.
function obj(obj) {
    console.log(obj.name);
}

obj({ name: "prashant" });