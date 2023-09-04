






//----------------day 7

document.querySelector('#refreshcode').addEventListener("click",function handlingClick(){
draw();
});


function draw(){

var canvas = document.getElementById('verification');
if (canvas.getContext){
    var ctx = canvas.getContext('2d');
}

ctx.clearRect(0, 0, 200, 100);

for (var i=0; i<40; i++){
ctx.strokeStyle =rgb().toString();
ctx.beginPath();
ctx.moveTo(xPoint(), yPoint());
ctx.lineTo(xPoint(), yPoint());
//ctx.closePath();
ctx.stroke();
}

function xPoint(){
    return Math.floor(Math.random()*200)
}

function yPoint(){
    return Math.floor(Math.random()*100)
}

function rgb(){
    return `#${Math.floor(Math.random()*16777215).toString(16)}`
}


//Code style
ctx.fillStyle ="#14213D";
ctx.font="bold 40px Arial";
ctx.fillText(createCode(),25,60);

//Code
function createCode(){

var lettersOfCode = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P','Q',  'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var random='';

for (var i=0; i<6; i++){
    random += lettersOfCode[getRandomArbitrary(0,62)];
}

return random;
}


}
