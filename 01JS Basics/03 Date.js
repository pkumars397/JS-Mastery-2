// console.log((Date.now() / (1000 * 60 * 60 * 24)) / 365) //* Date.now gives miliseconds from 1 jan 1970
// let newDate = new Date(2022, 0, 17, 5, 26, 10)//* month start from 0-11(yyyy,mm,dd,hr,min,sec)
// console.log(newDate.toString());
// console.log(newDate.toDateString())
// console.log(newDate.toTimeString());
// console.log(newDate.toLocaleDateString());

let newDate = new Date("12-01-2023");//*mm-date-yyyy format
console.log(newDate.toString());
console.log((newDate.getMonth() + 1));//* better to add +1.
newDate.setMonth(10)
newDate.setFullYear(1990)
console.log(newDate.getMonth(),newDate.getFullYear())