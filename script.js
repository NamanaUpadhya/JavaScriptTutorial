// console.log("hello");
// window.console.log("HELLO");
// alert("Hello");
// console.dir(document.body);
// let Heading = document.getElementById("heading");
// let button = document.getElementById("myId");
// console.dir(button);

// let Heading = document.getElementsByClassName("myClass");
// console.dir(Heading);
// console.log(Heading);

// let para = document.getElementsByTagName("p");
// console.dir(para);

// let firstEl = document.querySelector("p");
// console.dir(firstEl);

// let allEl = document.querySelectorAll("p");
// console.dir(allEl);


// let Div = document.querySelector("div");
// console.dir(Div);
// console.dir(Div.innerText);
// console.dir(Div.innerHTML);
// console.dir(Div.textContent);

let h2 = document.querySelector("h2");
h2.innerText = h2.innerText + " from Apna College Students";
console.dir(h2.innerText);


let divs = document.querySelectorAll(".box");
// console.dir(divs);
// console.dir(divs[0]);
// console.dir(divs[1]);
// console.dir(divs[2]);
// divs[0].innerText = "new unique value1"
// divs[1].innerText = "new unique value2"
// divs[2].innerText = "new unique value3"

let idx = 1;
for(div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}