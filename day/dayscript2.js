//----------------day 2 partner angry
/* 
day2form
1 addEventListener("submit",());
var angrylv = random
angrylv box color > red > green > red > green > slower
transform translate 2s
text show number
.day2hide{display: block;}

2 click img > 
angrylv + / -

 */


//問題： click 完係行邊個fuc先？會行多於一次？


document.querySelector("#day2form").addEventListener("submit", function(event){
event.preventDefault();



/* document.querySelector("#day2form button").style.display = "none";
 */


var angryLevel =0;
var msg="";
var colorCode="#2FFF7F";
var fontColor ="#14213D"
angryLevel = Math.ceil(Math.random()*10);
document.querySelector("#day2form button").innerHTML = `Your partner's angry level is ${angryLevel}`;


/* reset to green */
for (var i =1;i<=10;i++){
document.querySelector(`#day2box${i}`).style.backgroundColor = "#2FFF7F";
}
console.log(angryLevel);

/* change to orange */
for (var i=1;i<=angryLevel;i++){
    if (i>=1 && i <=3){
        colorCode="#FFE400";
        msg ="The situation is not too bad. But if you don't do something...";
    }
    if (i>=4 && i <=6){
        colorCode="#FF8E00";
        msg ="<h3>Quick! Do Something!</h3>"
    }
    if (i>=7 && i <=10){
        colorCode="#FF1700";
        msg = "<h2>Oops...... Good Luck to you......</h2>"
        fontColor ="white"
    }
document.querySelector(`#day2box${i}`).style.backgroundColor = colorCode;
}

document.querySelector(`.day2hide`).style.visibility = "visible";
document.querySelector(`#day2sol1`).innerHTML = `${msg} `;
document.querySelector(`.day2-f3`).style.visibility = "visible";
document.querySelector("#day2form button").style.backgroundColor = colorCode;
document.querySelector("#day2form button").style.color = fontColor;
document.querySelector("#day2form button").style.boxShadow = "grey 2px 2px 5px";


/* -------------------different result */



function coolDown1 (event){
    event.preventDefault();
    if (angryLevel>0){
    document.querySelector(`#day2box${angryLevel}`).style.backgroundColor = "#2FFF7F";
    angryLevel -=1;
    document.querySelector("#day2form button").innerHTML = `Your partner's angry level is ${angryLevel}!`;
    }
/*     console.log(angryLevel); */
    return angryLevel;
}

//一次減3嬲
function coolDown2 (event){
    event.preventDefault();

    for(var i=1;i<4;i++){
        if (angryLevel>0){
            document.querySelector(`#day2box${angryLevel}`).style.backgroundColor = "#2FFF7F";
            angryLevel -=1;
            console.log(angryLevel);
            document.querySelector("#day2form button").innerHTML = `Your partner's angry level is ${angryLevel}!`;
        }
    }

    return angryLevel;
}

/* 
function coolDown2 (event){
    event.preventDefault();
    for (var i=1;i<=3;i++){
        if (angryLevel>0){
        document.querySelector(`#day2box${angryLevel}`).style.backgroundColor = "#2FFF7F";
        angryLevel-=1;                 
        }
        }    
console.log(angryLevel);
    return angryLevel;
}
 */

function coolDown3 (event){
    event.preventDefault();
    if (angryLevel=0){
        return angryLevel;
    } else{
    for (var i =1;i<11;i++){
        document.querySelector(`#day2box${i}`).style.backgroundColor = "#2FFF7F";
        }
    angryLevel=0;
    document.querySelector("#day2form button").innerHTML = `Your partner's angry level is ${angryLevel}!`;
    console.log(angryLevel);
    return angryLevel;        
    }
}

/* function coolCon(event){
    if (angryLevel <0){
    angryLevel=0;
    console.log(angryLevel);
};
return angryLevel;
}
 */


document.querySelector(".day2-f4 div:nth-child(1)").addEventListener("click", coolDown1);
document.querySelector(".day2-f4 div:nth-child(2)").addEventListener("click", coolDown1);
document.querySelector(".day2-f4 div:nth-child(3)").addEventListener("click", coolDown2);
document.querySelector(".day2-f4 div:nth-child(4)").addEventListener("click", coolDown2);
document.querySelector(".day2-f4 div:nth-child(5)").addEventListener("click", coolDown1);
document.querySelector(".day2-f4 div:nth-child(6)").addEventListener("click", coolDown3);

/* 
document.querySelector(".day2-f4 div:nth-child(1)").addEventListener("click", coolCon);
document.querySelector(".day2-f4 div:nth-child(2)").addEventListener("click", coolCon);
document.querySelector(".day2-f4 div:nth-child(3)").addEventListener("click", coolCon);
document.querySelector(".day2-f4 div:nth-child(4)").addEventListener("click", coolCon);
document.querySelector(".day2-f4 div:nth-child(5)").addEventListener("click", coolCon);
document.querySelector(".day2-f4 div:nth-child(6)").addEventListener("click", coolCon);
*/


}) //day2s1








