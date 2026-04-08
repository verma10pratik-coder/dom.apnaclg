// getAttribute(attr)-> node to call altibute

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);


// let name1 = div.getAttribute("name");
// console.log(name1);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// // Set the attribute value 

// let para1 = document.querySelector("p");
// console.log(para1.setAttribute("class", "newclass"));

// Style -> node.style
/*
let div = document.querySelector("div"); // bject that show inline style div.style

div.style.backgroundColor = "green"; /// assesing though java script 

div.style.fontSize = "26px";

div.innerText = "Hello";

*/

// How to create a new element document.createelement("")
/*
let newbtn = document.createElement("button");
newbtn.innerText = "click me";
console.log(newbtn);

// to add in screen we need tree -> 4 mothords  node.append

let p = document.querySelector("p");
// div.append(newbtn); // for adding last, starting prepend 

// p.after(newbtn); ///

let newhead = document.createElement("h1");
newhead.innerHTML = "<i> Hi, i am new </i>" ;
document.querySelector("body").prepend(newhead)

let para = document.querySelector("p");
para.remove();

*/
/*
let newbtn = document.createElement("button");
newbtn.innerText = "Click Me";

newbtn.style.color = "white";
newbtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newbtn);*/

let para = document.querySelector("p");
para.getAttribute("class");

// to overide with the new class we add claslist

para.classList.add(newclass);
