// let arr = [1, 2, 3, 4];

//  let arr = new Array(1, 2, 3, 4, 5);

// let arr=new Array(5).fill(true)

let arr = [1, 1, 2, 3, 4, 5];
// ! unshift(similar to push) && shift(similar to pop)

// arr.unshift(6)
// arr.shift();
// ! includes && indexOf ,lastIndexOf(return index ,and will search from last to start)

// console.log(arr.includes(3))
// console.log(arr.indexOf(1),arr.lastIndexOf(1))
// ? join(seperator) converts array into string based on seperator provided

// let str = arr.join(" ")
// console.log(str)
// console.log(typeof(str))
// ? slice(create new array) && splice(modify the array) takes >>start,noOfDelete,insertItem.

// let newArr = arr.slice(1, 3);
// let newArr2 = arr.slice(-3, 5);
// let newArr3 = arr.slice(-3);
// console.log(newArr,newArr2,newArr3);

// console.log(arr.splice(1, 2, 10))
// console.log(arr)

// todo flat method >> its flats down the array into 1d Array.>>takes depth parameter.

// let array = [1, 2, [2, 3, 4, 5, 2], [2, [2, 3, 3, [2, 2, 2]]]]
// let b=array.flat(Infinity);
// console.log(array," ", b)

// todo concat and Spread Operator.

// let a1 = [1, 2, 3, 4];
// let a2 = [1, 2, 3, 4];
// let newArr = a1.concat(a2);
// let newArr = [...a1, ...a2];
// console.log(newArr)

// ! Array.isArray(a) && Array.from(a) ,Array.of(a1,a2,a3);

// let a1 = [1, 2, 3, 4, 5, 6];
// console.log(Array.isArray(a1))

// console.log(Array.from("hitesh"))

// let a = 2, b = 3, c = 4;
// console.log(Array.of(a, b, c));