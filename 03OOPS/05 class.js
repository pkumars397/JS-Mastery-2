//! Class(Introduced in ES6) is suger coating of our function object creation and using prototypes.

// class User{
//     constructor(username,password){
//         this.name=username;
//         this.password=password;
//     }

//     encription(){
//         return `Pass:${this.password}Abs`
//     }

//     isLoggedIn(){
//         return `Yes ${this.name} is logged in`
//     }
// }
// const user1=new User("Prashant","pkumars397");
// console.log(user1.isLoggedIn())

//? Same thing using function 

// function User(username,password){
//     this.name=username;
//     this.password=password;
// }
// User.prototype.encription=function(){
//     return `Pass: ${this.password}Abs`
// }
// User.prototype.isLoggedIn=function (){
//     return `yes ${this.name} Logged in `
// }
// const user1=new User("Prashant","pkumars397");
// console.log(user1.encription());// will return new encripted password

// todo Inheritance using Class
class User{
    constructor(user){
        this.name=user;
    }
    isLogged(){
        return `Yes ${this.name} is Logged in`
    }
}

class Teacher extends User{
    constructor(user,email,password){
     super(user);
     this.email=email;
     this.password=password;
    }
   addCourse(){
    console.log(`new course added by ${this.name}`)
    console.log(super.isLogged());//can access directly parent method in child class.
   }
}

const teacher1=new Teacher("Prashant","pkumars397@gmail.com",25);
teacher1.addCourse();
console.log(teacher1.isLogged());//child can access parent methods but ,parent can't access child method.
console.log(teacher1 instanceof User,teacher1 instanceof Teacher)