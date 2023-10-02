//todo Creating Promise(Object) takes Callback.
// const promise1=new Promise(function(resolve,reject){
//     //! Do some Async Operation
//     setTimeout(()=>{
//         console.log("Async Task1");
//         resolve();
//     },1000)
// })
// // Consuming Promise
// promise1.then(function(){
//     console.log("Promise1 Resolved")
// })

// // ? Without Storing directly

// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Async Task2 ");
//         resolve();
//     },3000)
// })
// .then(function(){
//     console.log("Promise2 Resolved");
// })

// // Passing parameter to resolve and reject(Remember then is attached to resolve and catch with reject)
// const promise3=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Asyn Task3 ")
//         resolve({user:"prashant",id:2})
//     },2000)
// })

// promise3.then((user)=>{
//     console.log(user);
// })

// // resolving and rejecting
// const promise4=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//     let error=false;
//     if(!error){
//         resolve({userName:"binu",age:23})
//     }else{
//         reject("Promise Rejected! something went wrong")
//     }
//     },1000)
// })

// promise4
// .then((user)=>{
//     console.log(user);
//     return user.userName;
// })
// .then((userName)=>{
//     console.log(userName)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("Promise got either resolve or rejected")
// })

// ?Consuming Promise using asyn await.

const promise5=new Promise(function(resolve,reject){
    setTimeout(()=>{
    let error=true;
    if(!error){
        resolve({userName:"JS"})
    }else{
        reject("Promise Rejected! something went wrong")
    }
    },1000)
})

async function consumePromise5(){
    try {
        const response=await promise5;
    console.log(response)
    } catch (error) {
        console.log(error)
    }
    
}
consumePromise5();

// fetch Promise using async await
// async function res(){
//     try {
//         const response=await fetch("https://api.github.com/users/pkumars397")
//         // console.log(response)
//         const data=await response.json();//!here also await.
//         console.log(data); 
//     } catch (error) {
//         console.log("Error",error)
//     }
// }
// res()

// fetch Promise using then,catch
const response=fetch("https://api.github.com/users/pkumars397");
response
.then((data)=>{
    return data.json();
})
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})