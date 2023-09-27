// forEach doesn't return any thing.

// let a=[1,2,3,4];
// let num=a.forEach((item)=>{
//     return item;
// })
// console.log(num)

// to solve these issues with forEach ,map,reduce ,filter introduced.
// these method always return something.so we have to store them into variable.
let a=[1,2,3,4,5];
const newArray=a.filter((num)=>num>2).map(num=>num*2);// Chaining we can chain things together.
console.log(newArray);

const newArray2=a.filter((num)=>{num>2})
console.log(newArray2)//will return empty array.

const newArray3=a.map((num)=>{num*22})//will return array with undefined values
console.log(newArray3);

const sum=a.reduce((acc,cur)=>acc+cur,0);// passing initialVal is optional if not passing then,acc will be arr[0] and cur=arr[1];
console.log(sum)

const sum2=a.reduce((acc,cur)=>{acc+cur},0)//written in scope so ,it is not returning anything,so undefined.
console.log(sum2);