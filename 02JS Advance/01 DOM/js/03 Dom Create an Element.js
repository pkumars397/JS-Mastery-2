let newElementDiv=document.createElement("div");
console.log(newElementDiv);
newElementDiv.id=Math.floor(Math.random()*6+5);
newElementDiv.className="Hello test";
newElementDiv.setAttribute("title","Best developer");
// newElementDiv.innerText="Hello i am new developer";// this way can also be text inserted ,but takes original text and override them.
const text=document.createTextNode("hello");// creating textNode which need to be inserted into our elements.
newElementDiv.appendChild(text);// inserting textnode into our element
document.body.appendChild(text)
document.body.appendChild(newElementDiv);