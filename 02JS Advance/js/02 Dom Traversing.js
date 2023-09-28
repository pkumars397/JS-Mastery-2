const parent=document.querySelector(".parent");
// children
const childs=parent.children;//HTMLCollection >>will return children elements of parent.
console.log(childs)

for(let i=0;i<childs.length;i++){
    childs[i].innerText=`Child ${i}`
}

const child1=parent.firstElementChild;
console.log(child1)
const lastChild=parent.lastElementChild;
console.log(lastChild);
console.log(child1.parentElement)
console.log(child1.nextElementSibling)
console.log(parent.firstChild)
const allNodes=parent.childNodes;
console.log(allNodes);// will give NodeList with empty textNode also;