let body=document.querySelector("body");

let mdiv=document.createElement("div");
let div1=document.createElement("div");
let div2=document.createElement("div");
let div3=document.createElement("div");
let div4=document.createElement("div");
let div5=document.createElement("div");
let div6=document.createElement("div");

body.appendChild(mdiv);

setTimeout(function G(){
    mdiv.setAttribute("class","mdiv");
},2000)

setTimeout(function F(){
    mdiv.appendChild(div1);
    div1.setAttribute("class","div1");
},4000)

setTimeout(function E(){
    mdiv.appendChild(div2);
    div2.setAttribute("class","div2");
},6000)
setTimeout(function D(){
    mdiv.appendChild(div3);
    div3.setAttribute("class","div3");
},8000)
setTimeout(function C(){
    mdiv.appendChild(div4);
    div4.setAttribute("class","div4");
},10000)
setTimeout(function B(){
    mdiv.appendChild(div5);
    div5.setAttribute("class","div5");
},12000)

setTimeout(function A(){
    mdiv.appendChild(div6);
    div6.setAttribute("class","div6");
},14000)

clearTimeout(F);
clearTimeout(E);
clearTimeout(D);
clearTimeout(C);
clearTimeout(B);
clearTimeout(A);
clearTimeout(G);