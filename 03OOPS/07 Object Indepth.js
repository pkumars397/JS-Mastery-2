// ! getOwnPropertyDescriptor
const Pi=Math.PI;
const pi=4;// Can't Change Because writtable is false;
console.log(Pi)

console.log(Object.getOwnPropertyDescriptor(Math,"PI"));// will show the insider details of PI in Math object.
// todo Will not work with Math Object Property.
// Object.defineProperty(Math,"PI",{
//     value:4,
//     writable:true,
//     enumerable:true
// })
// console.log(Object.getOwnPropertyDescriptor(Math,"PI"))

// !using custom Object
const user={
    name:"Prashant",
    age:25,
    fullname:function(){
        console.log(this.name);
    }
}
console.log(Object.getOwnPropertyDescriptor(user,"name"));
Object.defineProperty(user,"name",{
    // value:"Binu",// value defined here is superior
    writable:false,//now u can't change the value of name.
    enumerable:false// when it is false,means it is not iterable
})
user.name="alok"
console.log(Object.getOwnPropertyDescriptor(user,"name"));
console.log(user,"\n")// New Line using "\n"

// ! Iterating the Object using Object.entries(obj);

for(let [key,value] of Object.entries(user)){
    if(typeof value !== 'function'){
        console.log(`Key:${key} Value: ${value}`)
    }
}