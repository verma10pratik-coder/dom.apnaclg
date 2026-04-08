// Window object -> open window on the browaser
//global object lot of property and matter
// window.console.log("hello world");


// DOM -> Document object model
// every eleme can be asses in the java script and coverted to document 

// console.dir -> print dociument 

// Head & Body -

// console.dir(document.body.children[1]);
// console.log(document.head);

// document.body.childNodes[1].innerText = "abcd"; // dynamic changes

// using id excess
// let heading = document.getElementById("heading");
// console.dir(heading);

// let headings = document.getElementsByClassName("heading-class"); // return html collection 

// console.log(headings);
// console.dir(headings)

// let button = document.getElementById("bu")
// console.log(button);

// let para = document.getElementsByTagName("p");
// console.dir(para)

// Quirey selector for all

// let element = document.querySelector("p");// return node list 
// console.dir(element);

// let allelement = document.querySelectorAll("p");
// console.dir(allelement);
// let element = document.querySelector(".myclass");// . for classs, # for buttons
// console.dir(element);

// let allelement = document.querySelectorAll(".myclass");

// console.dir(allelement);

// tag name

// first chld, last child
//  Sibling , predesesor, 

// console.log(document.body.firstChild);// text node, comment nodes,, element nodes

// let div = document.querySelector("div");
// console.dir(div);

// div.innerHTML, div.innerquiry, div.


// let heading = document.querySelector("h1");
// heading.innerText = "new Heading" 
//inner.HTML
// text.Content 
/*
let h2 = document.querySelector("h2");
 console.dir(h2.innerText);
h2.innerText = h2.innerText +  " from apnna collage student" ;
*/

let divs = document.querySelectorAll(".box") ;
// console.log(divs[0]);
let idx = 1 ;
for( div of divs){

    div.innerText = 'New Unique value ' + (idx);
    idx++;
}

div[0].innerText = "new unique value 2";
div[1].innerText = "new unique value 2";
div[2].innerText = "new unique value 2";


