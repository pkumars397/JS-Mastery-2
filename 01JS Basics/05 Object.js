// !Object Literals
// const mySym=Symbol("key")
// let user = {
//     name: "prashant",
//     "full Name": "Prashant Kumar",
//     [mySym]:"myVal",
//     age: 24,
//     loggedIn: ["monday", "Tuesday"]
// }

// console.log(user[mySym])
// console.log(user.name);
// console.log(user["full Name"]);

// user.lastName = "kumar";// can set property to object also.
// user["lastName"] = "Singh";// will update key value.
// user.details = { father: "Alok Kumar", mother: "Nilu Devi" };
// user.greeting = function () {
//     console.log("hello welcome")
// }

// Object.freeze(user);//! will freeze all operation of addind key-value.
// console.log(user.greeting());

// !Method of creating an object.

// // const obj1 = new Object();
// const obj1 = {};
// obj1.firstName = "prashant kumar";
// obj1.name = { fullname: { firstName: "prashant", lastName: "Kumar" } }
// console.log(obj1.name.fullname.firstName);

// ? Combining Objects.

let obj1 = { key1: 1, key2: 2 };
let obj2 = { key3: 3, key4: 4 };
let obj3 = { key4: 5, key5: 6 };// will override the previous value of key4.

// let obj4 = Object.assign(obj1, obj2, obj3);//? our target is obj1,and remaining sources.
// let obj4 = Object.assign({}, obj1, obj2, obj3)//! target {} and all our sources.
// let keys = Object.keys(obj4)//! Gives Array
// console.log(keys[0], keys);
// let val = Object.values(obj1)
// console.log(val)//! Gives Array
// console.log(obj1.hasOwnProperty("key1"))//* returns true and false based on,is that key belong to specific object.

// for (let i = 0; i < Object.keys(obj1).length; i++){
//     console.log(obj1[Object.keys(obj1)[i]]);
// }

for (let key of Object.keys(obj1)) {
    console.log(key,obj1[key])
}