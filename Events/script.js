let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e)=>{
//     console.log("Button was clicked");
//     let a =25;
//     a++;
//     console.log(a);
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);

// }

btn1.addEventListener("click", () => {
    console.log("Button 1 was clicked = handler 1 ")
});

btn1.addEventListener("click", () => {
    console.log("Button 1 was clicked = handler2")
});

const handler3 = () =>{
    console.log("Button 1 was clicked = handler 3 ")
}

btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () => {
    console.log("Button 1 was clicked = handler 4 ")
});

btn1.removeEventListener("click",handler3);


let box = document.querySelector("div");

box.onmouseover = ()=>{
    console.log("You are inside the Box");
}


let modeBtn = document.querySelector("#mode");
let currMode = "Light";
let body = document.querySelector("body");

modeBtn.addEventListener("click", ()=>{
    if(currMode === "Light"){
        currMode = "Dark";
        // document.querySelector("body").style.backgroundColor = "black";
       body.classList.add("Dark");
       body.classList.remove("Light");
    }
    else{
        currMode = "Light";
        // document.querySelector("body").style.backgroundColor = "white";
        body.classList.add("Light");
        body.classList.remove("Dark");
    }
    console.log(currMode);
});