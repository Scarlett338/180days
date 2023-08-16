

//----------------day 3 number arrange



document.querySelector("#day3form").addEventListener("submit",function(event){
    event.preventDefault();
    var ansEntered = document.querySelector("#day3NumArr").value;
    console.log(ansEntered);

    var ansArr = ansEntered.split(" ").map(Number);
    console.log(` 睇下先 ${ansArr}` );


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
        arr = ansArr;
//        console.log(arr);
        var arrNew =[];

        for (var i=0;i<arr.length;i++){
        var findNthMin =getNewArrByDeleteMinItem(arr,i+1) ;    
        arrNew.push(findNthMin);
        }

        console.log(arrNew);
        document.querySelector("#day3present").innerHTML=`<h2> ${arrNew} </h2>`;
        

/*     if  {
        alert("Please enter vaild numbers with correct format :)");
    } */

})



