let a=[2,3,4,5,6];
// for of;
for(let val of a){ console.log(val);  }
for(let val in a){console.log(val)}//will give index as like key in object.

a.forEach((item,index,arr) => {
    console.log(`item ${item} index ${index} arr ${arr}`)
});

let b=[{name:"prashant",age:24},{name:"binu",age:25},{name:"somi",age:26}]

b.forEach((item)=>{
    console.log(item.name,item["name"])
})

// Object iteration
Object.keys(obj)//will return an array of key.
for(let key of Object.keys(obj)){}
for(let key in obj){}


// Iteration over map.
let map=new Map();
for(let [key,val] of map){}//here destructing happens of array.
for(let key of map.keys()){}
for(let val of map.values()){}