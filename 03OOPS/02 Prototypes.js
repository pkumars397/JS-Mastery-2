function User(name,age){
    this.name=name;
    this.age=age;
}
console.log(User.prototype)
// Injecting the method to User Constructor function.
User.prototype.getFullDetails=function (){
    console.log(`Name: ${this.name} Age: ${this.age}` )
}
// console.log(User.prototype)
const user1=new User("Prashant",23);
const user2=new User("Binu",25);

user1.getFullDetails();

// ######## Protype Setting into Objects ##############
// Array,String,function >>>Object>>Null
// If we set protype to Object directly itself then it will be accessable by all.And if we set to some particular then will be access by only that datatypes.

let str="Hello   ";
let testUser={
    name:"prashant",
    age:30
}
let arr=[1,2,3,3,4];
Object.prototype.test=function(){
    console.log("Object prototype to all")
};
str.test();
testUser.test();

Array.prototype.test2=function(){
    console.log("only to Array objects")
}

arr.test2()

String.prototype.trueLength=function (){
    console.log(this);
    console.log(`Actual Length ${this.trim().length}`)
}
str.trueLength()