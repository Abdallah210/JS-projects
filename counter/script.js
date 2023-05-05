// Click :

document.getElementById("reset").onclick = function(){
    document.getElementById("number").innerHTML = 0;
}

document.getElementById("decrease").onclick = function(){
    let number = Number(document.getElementById("number").textContent);
    number--;
    document.getElementById("number").innerHTML = number;
}

document.getElementById("increase").onclick = function(){
    let number = Number(document.getElementById("number").textContent);
    number++;
    document.getElementById("number").innerHTML = number;
}


//coloring :

if (Number(document.getElementById("number").textContent)<0) {
    document.getElementById("number").style.color = "red";
} else if (Number(document.getElementById("number").textContent)>0) {
    document.getElementById("number").style.color = "green";
} else {
    document.getElementById("number").style.color = "black";
    
}