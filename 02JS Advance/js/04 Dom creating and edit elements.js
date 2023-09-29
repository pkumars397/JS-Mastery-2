// creating an element and inserting on to our list.
// Using innerHTML
function append(language){
const li=document.createElement("li");
li.innerHTML=language;
document.querySelector(".language").appendChild(li)
}

append("Python")
append("TypeScript")

// Using CreateTextNode.
function optiAppend(language){
    let li=document.createElement("li");
    li.appendChild(document.createTextNode(language));
    document.querySelector(".language").appendChild(li)
}

optiAppend("HTML/CSS3")

// Edit Second
// document.querySelector("li:nth-child(2)").innerHTML="CPP"//less optimized
const second=document.querySelector("li:nth-child(2)")
const li=document.createElement("li");
li.appendChild(document.createTextNode("Golang"));
second.replaceWith(li)

// editing lastChild;

const last=document.querySelector("li:last-child");
last.remove();
