let head = document.createElement("h1");
head.setAttribute("id", "title");
head.style.display = "none";
head.innerHTML= "My Calculator";
document.body.append(head);

let para = document.createElement("p");
para.style.display = "none";
para.setAttribute("id", "description");
para.innerHTML= "This is my first calculator using DOM manipulation.";
document.body.append(para);


let tag = document.createElement("div");
tag.setAttribute("class", "container");
document.body.append(tag);

let tag1 = document.createElement("div");
tag1.setAttribute("class", "calculator");
document.getElementsByTagName("div")[0].append(tag1);

let inp = document.createElement("input");
inp.setAttribute("onkeypress", "return isNumber(event)");
inp.setAttribute("placeholder", "0");
inp.setAttribute("id", "result");
inp.style.textAlign = "right";
document.getElementsByTagName("div")[1].append(inp);

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        (alert("Only numbers are allowed"));
        return false;
    }
    return true;
  }

  let clr = document.createElement("button");
  clr.innerHTML = "C";
  clr.setAttribute("id", "clear");
  clr.setAttribute("onclick", "clrs()");
  document.getElementsByTagName("div")[1].append(clr);    
  
  let del = document.createElement("button");
  del.innerHTML = "DEL";
  del.setAttribute("onclick", "dels()");
  document.getElementsByTagName("div")[1].append(del);
  
  let mod = document.createElement("button");
  mod.innerHTML = "%";
  mod.setAttribute("onclick", "display('%')");
  document.getElementsByTagName("div")[1].append(mod);    

  let div = document.createElement("button");
  div.setAttribute("onclick", "display('/')");
  div.innerHTML = "&#x00F7;";
  document.getElementsByTagName("div")[1].append(div);
    
  for (i=7;i<10;i++)
{
    let one = document.createElement("button");
    one.setAttribute("id", i);
    one.setAttribute("onclick", "display('"+i+"')");
    one.innerHTML = i;
    document.getElementsByTagName("div")[1].append(one);    
}
let mul = document.createElement("button");
mul.setAttribute("onclick", "display('*')");
mul.innerHTML = "&#x00D7;";
document.getElementsByTagName("div")[1].append(mul);

for (i=4;i<7;i++)
{
    let one = document.createElement("button");
    one.setAttribute("id", i);
    one.setAttribute("onclick", "display('"+i+"')");
    one.innerHTML = i;
    document.getElementsByTagName("div")[1].append(one);    
}
let min = document.createElement("button");
min.setAttribute("onclick", "display('-')");
min.setAttribute("id", "subtract");
min.innerHTML = "-";
document.getElementsByTagName("div")[1].append(min);

for (i=1;i<4;i++)
{
    let one = document.createElement("button");
    one.setAttribute("onclick", "display('"+i+"')");
    one.setAttribute("id", i);
    one.innerHTML = i;
    document.getElementsByTagName("div")[1].append(one);    
}

let adds = document.createElement("button");
adds.innerHTML = "+";
adds.setAttribute("id", "add");
adds.setAttribute("onclick", "display('+')");
document.getElementsByTagName("div")[1].append(adds);    

let dot = document.createElement("button");
dot.setAttribute("onclick", "display('.')");
dot.innerHTML = ".";
document.getElementsByTagName("div")[1].append(dot);    

let one = document.createElement("button");
one.setAttribute("onclick", "display('0')");
one.setAttribute("id", 0);
one.innerHTML = "0";
document.getElementsByTagName("div")[1].append(one);    

let equ = document.createElement("button");
equ.innerHTML = "=";
equ.setAttribute("id", "equal");
equ.setAttribute("onclick", "Calculate()");
equ.setAttribute("class", "equal");
document.getElementsByTagName("div")[1].append(equ);    

let outputScreen = document.getElementById("result");

function display(num)
{
    outputScreen.value += num;
}

function Calculate() {
try{
    outputScreen.value = eval(outputScreen.value);
}
catch(err)
{
    alert("Invalid");
}
}

function clrs(){
    outputScreen.value = "";
}

function dels(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}
