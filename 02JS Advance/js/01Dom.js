// Browser Creates a documents ,which consist of our web page structure.and we can manipulate things.

// console.log(document)//!will only show up the our html.
// console.dir(document)//!will showup all the inner details ,like protypes and all.

// const heading=document.getElementsByTagName("h1");//? HTML collection
// console.log(heading);
// heading[0].innerHTML=("<p>Hello</p>");
// const heading1=document.getElementsByClassName("heading");//?returns HTMLcollection will have to make Array.to use forEach.
// console.log(heading1);
// const heading2=document.querySelectorAll("h1");//todo NodeList ,forEach is supported
// const heading3=document.querySelector(".heading");//todo returns first match in html doc.
// console.log(heading2,heading3)


// const ul=document.getElementById("ul");//single element
// ul.style.background="lightblue";

// const UL=document.getElementsByTagName("ul");//HTMLCollection
// console.log(UL);
// UL[0].style.color="red";

// const liItems=document.getElementsByClassName("list-item")//HTMLCOllection
// console.log(liItems);
// const liArr=Array.from(liItems);
// liArr.forEach((li)=>{
//     li.style.fontSize="25px";
// })


//todo querySelector and querySelectorAll.(we select using css selectors.)

const li1=document.querySelector(".list-item")//! will only target the first li.
li1.style.color="blue"

const allLi=document.querySelectorAll("li");//returns NodeList ,we can use the forEach on this.
console.log(allLi);

const liItem=document.querySelectorAll("li.list-item");// will look for all li with class name list-item.(check all li with this classname)
const liItem2=document.querySelectorAll("ul .list-item");// will look for all elements inside the ul with class name .list-item.(check elements with classname inside ul)
console.log(liItem,liItem2)

console.log(li1.getAttribute("class"));
li1.setAttribute("id","list");// will set id to list

console.log(li1.id);
console.log(li1.className);
