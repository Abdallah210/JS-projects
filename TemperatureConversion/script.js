
let x;
let y;
let z;

// Click :
document.getElementById("playBtn").onclick = function(){

    x = Math.floor(Math.random() * 7) + 1;
    y = Math.floor(Math.random() * 7) + 1;
    z = Math.floor(Math.random() * 7) + 1;

    document.getElementById("number1").innerHTML = x;
    document.getElementById("number2").innerHTML = y;
    document.getElementById("number3").innerHTML = z;

    if (x==y && y==z) {
        document.getElementById("number1").style.backgroundColor = "green";
        document.getElementById("number2").style.backgroundColor = "green";
        document.getElementById("number3").style.backgroundColor = "green";
    } else {
        document.getElementById("number1").style.backgroundColor = "white";
        document.getElementById("number2").style.backgroundColor = "white";
        document.getElementById("number3").style.backgroundColor = "white";
    }
}



//coloring :

