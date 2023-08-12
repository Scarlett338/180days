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




document.querySelector("#day2form").addEventListener("submit", function(event){
event.preventDefault();
var angryLevel = Math.ceil(Math.random()*10);

/* reset to green */
for (var i =1;i<=angryLevel;i++){
document.querySelector(`.day2-f2 .day2boxContainer div:nth-child(${i})`).style.backgroundColor = "#2FFF7F"
}
//console.log(angryLevel);

/* change to orange */
for (var i=10;i>=angryLevel;i--){
document.querySelector(`.day2-f2 .day2boxContainer div:nth-child(${i})`).style.backgroundColor = "#FCA311"
}

document.querySelector(`.day2hide`).style.visibility = "visible";

/* document.querySelector(`#day2sol1`).innerHTML = `<h1> ${angryLevel} </h1>`;
document.querySelector(`.day2-f3`).style.visibility = "visible";
 */

console.log(angryLevel);

/* -------------------different result */

function coolDown1 (event){
    event.preventDefault();
    document.querySelector(`.day2-f2 .day2boxContainer div:nth-child(${angryLevel})`).style.backgroundColor = "#2FFF7F"
    return angryLevel +=1;
}

function coolDown2 (event){
    event.preventDefault();
    document.querySelector(`.day2-f2 .day2boxContainer div:nth-child(${angryLevel+1})`).style.backgroundColor = "#2FFF7F"
    document.querySelector(`.day2-f2 .day2boxContainer div:nth-child(${angryLevel})`).style.backgroundColor = "#2FFF7F"
    return angryLevel +=2;
}

function coolDown3 (event){
    event.preventDefault();
    for (var i =1;i<=angryLevel;i++){
        document.querySelector(`.day2-f2 .day2boxContainer div:nth-child(${i})`).style.backgroundColor = "#2FFF7F"
        }
    return angryLevel +=10;
}


document.querySelector(".day2-f4 div:nth-child(1)").addEventListener("click", coolDown1);
document.querySelector(".day2-f4 div:nth-child(2)").addEventListener("click", coolDown2);
document.querySelector(".day2-f4 div:nth-child(3)").addEventListener("click", coolDown2);
document.querySelector(".day2-f4 div:nth-child(4)").addEventListener("click", coolDown2);
document.querySelector(".day2-f4 div:nth-child(5)").addEventListener("click", coolDown1);
document.querySelector(".day2-f4 div:nth-child(6)").addEventListener("click", coolDown3);

console.log(angryLevel);

/* 
document.querySelector(".day2-f4 > div").addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector(`.day2-f2 .day2boxContainer div:nth-child(${angryLevel})`).style.backgroundColor = "#2FFF7F"
    return angryLevel ++;
})

document.querySelector(".day2-f4 div:nth-child(3)").addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector(`.day2-f2 .day2boxContainer div:nth-child(${angryLevel})`).style.backgroundColor = "#2FFF7F"

})

document.querySelector(".day2-f4 div:nth-child(4)").addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector(`.day2-f2 .day2boxContainer div:nth-child(${angryLevel})`).style.backgroundColor = "#2FFF7F"

})

document.querySelector(".day2-f4 div:nth-child(5)").addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector(`.day2-f2 .day2boxContainer div:nth-child(${angryLevel})`).style.backgroundColor = "#2FFF7F"

})

document.querySelector(".day2-f4 div:nth-child(6)").addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector(`.day2-f2 .day2boxContainer div:nth-child(${angryLevel})`).style.backgroundColor = "#2FFF7F"

}) */




}) //day2s1









//----------------day 3 number arrange



document.querySelector("#day3form").addEventListener("submit",function(event){
    event.preventDefault();

    var ans = prompt("enter numbers");
    console.log(ans)

    //var ans = document.querySelector("#day3NumArr").value;

    if (ans !== NaN){
        function findMin(arr){
            var num =arr[0];
            for (var i=0;i<arr.length;i++){
                if (num > arr[i]){
                    num = arr[i]
                }
            } 
            //console.log(num);
            return num;
        }
        
        function findRepeat (arr,min){
            var count =-1;
            for (var i=0;i<arr.length;i++){
            if (arr[i] ==min){
                count ++;
            }
            }
            return count;
        }
        
        function getNewArrByDeleteMinItem(arr,n){
            var min;
            var count;
            for(var j=0;j<n;j++){
                min = findMin(arr);
                count =findRepeat (arr,min);
             //   console.log(`第 ${j}次，min ${min}，count ${count}，而家${arr}`);
                arr = arr.filter(item => item !== min)
              //  console.log("新arr--"+arr);     
                for (var k=0;k<count;k++){
                arr.push(min);
              //  console.log("新arr再加返--"+arr);
                }
            }
            return min;
        }


        var arr = [];
        arr = [ans];
        console.log(arr);
        var arrNew =[];

        for (var i=0;i<arr.length;i++){
        var findNthMin =getNewArrByDeleteMinItem(arr,i+1) ;    
        arrNew.push(findNthMin);
        }

        console.log(arrNew);
        document.querySelector("#day3present").innerHTML=`<h2> ${arrNew} </h2>`;
        

    } else {
        alert("Please enter vaild numbers with correct format :)");
    }

})



