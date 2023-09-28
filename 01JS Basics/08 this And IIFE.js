// const obj={
//     name:"prashant",
//     age:27,
//     details:function(){  
//       console.log(` User Name is ${this.name}`)
//       return this;
//     }
// }

// console.log(obj.details());
// obj.name="Binu";
// console.log(obj.details())

// console.log(this)// in node environment it will be empty object.and in browser,window in global scope.

// function a(){
//     let user="prashant"
//     // console.log(this)
//     console.log(this.user)//undefined
// }
// const a=function (){
//     let user="prashant"
//        console.log(this)
//     console.log(this.user)//undefined
// }
// const a=()=>{
//     let user="prashant"
//     console.log(this)//{}
//     console.log(this.user)//undefined
// }

// a();

// Immediately invoked function expresions (IIFE)

(function a(){
    console.log("Hello")
})();

((a)=>(console.log(a)))(10);