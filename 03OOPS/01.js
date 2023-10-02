// const user={
//     userName:"Prashatn",
//     age:35,
//     fullname:function (lastName){
//         console.log(`Fullname: ${this.userName} ${lastName}`)
//     }
// }
// user.fullname("kumar");
// console.log(this)//in Node environment will give {} and in browser window object

// Constructor function User and new keyword for creating different instances of object.
function User(firstName,age){
  this.firstName=firstName;
  this.age=age;
}
const user1=new User("Prashant",24);
const user2=new User("Binu",25);
console.log(user1,user2)