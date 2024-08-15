let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

// let para = document.querySelector("p");
// console.log(para);
// console.log(para.setAttribute("class","newClass"));

// div.style.backgroundColor = "purple";
// div.style.fontSize = "26px";
// div.innerText = "Hello!!";


let newButton = document.createElement("button");
newButton.innerText = "Click Me!";
console.log(newButton);
div.after(newButton);
// div.before(newButton);
// div.append(newButton);
// div.prepend(newButton);

let newHeading = document.createElement("h1");
newHeading.innerHTML= "<i>Hi, I am New!!</i>";
document.querySelector("body").prepend(newHeading);

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";
document.querySelector("body").prepend(newBtn);



let para2 = document.querySelector("p");
para2.classList.add("newClass");