

//---------------day1 weather

var weather ='{"lightning":{"data":[{"place":"大嶼山","occur":"true"},{"place":"新界西","occur":"true"},{"place":"港島及九龍","occur":"true"}],"startTime":"2023-08-01T10:45:00+08:00","endTime":"2023-08-01T11:45:00+08:00"},"rainfall":{"data":[{"unit":"mm","place":"中西區","max":5,"main":"FALSE","min":0},{"unit":"mm","place":"東區","max":0,"main":"FALSE"},{"unit":"mm","place":"葵青","max":41,"main":"FALSE","min":0},{"unit":"mm","place":"離島區","max":4,"main":"FALSE","min":0},{"unit":"mm","place":"北區","max":0,"main":"FALSE"},{"unit":"mm","place":"西貢","max":0,"main":"FALSE"},{"unit":"mm","place":"沙田","max":0,"main":"FALSE"},{"unit":"mm","place":"南區","max":2,"main":"FALSE","min":0},{"unit":"mm","place":"大埔","max":0,"main":"FALSE"},{"unit":"mm","place":"荃灣","max":12,"main":"FALSE","min":0},{"unit":"mm","place":"屯門","max":46,"main":"FALSE","min":0},{"unit":"mm","place":"灣仔","max":0,"main":"FALSE"},{"unit":"mm","place":"元朗","max":13,"main":"FALSE","min":0},{"unit":"mm","place":"油尖旺","max":0,"main":"FALSE"},{"unit":"mm","place":"深水埗","max":0,"main":""},{"unit":"mm","place":"九龍城","max":0,"main":""},{"unit":"mm","place":"黃大仙","max":0,"main":"FALSE"},{"unit":"mm","place":"觀塘","max":0,"main":"FALSE"}],"startTime":"2023-08-01T10:45:00+08:00","endTime":"2023-08-01T11:45:00+08:00"},"warningMessage":["雷暴警告現正生效，有效時間至8月1日下午2時正。預料香港有幾陣狂風雷暴。"],"icon":[63],"iconUpdateTime":"2023-08-01T11:45:00+08:00","uvindex":{"data":[{"place":"京士柏","value":7,"desc":"高"}],"recordDesc":"過去一小時"},"updateTime":"2023-08-01T12:02:00+08:00","temperature":{"data":[{"place":"京士柏","value":30,"unit":"C"},{"place":"香港天文台","value":30,"unit":"C"},{"place":"黃竹坑","value":27,"unit":"C"},{"place":"打鼓嶺","value":33,"unit":"C"},{"place":"大埔","value":31,"unit":"C"},{"place":"沙田","value":32,"unit":"C"},{"place":"屯門","value":26,"unit":"C"},{"place":"將軍澳","value":29,"unit":"C"},{"place":"西貢","value":31,"unit":"C"},{"place":"長洲","value":27,"unit":"C"},{"place":"赤鱲角","value":29,"unit":"C"},{"place":"青衣","value":26,"unit":"C"},{"place":"石崗","value":28,"unit":"C"},{"place":"荃灣可觀","value":27,"unit":"C"},{"place":"荃灣城門谷","value":28,"unit":"C"},{"place":"香港公園","value":28,"unit":"C"},{"place":"筲箕灣","value":31,"unit":"C"},{"place":"九龍城","value":30,"unit":"C"},{"place":"跑馬地","value":29,"unit":"C"},{"place":"黃大仙","value":31,"unit":"C"},{"place":"赤柱","value":28,"unit":"C"},{"place":"觀塘","value":30,"unit":"C"},{"place":"深水埗","value":29,"unit":"C"},{"place":"啟德跑道公園","value":30,"unit":"C"},{"place":"元朗公園","value":26,"unit":"C"},{"place":"大美督","value":31,"unit":"C"}],"recordTime":"2023-08-01T12:00:00+08:00"},"tcmessage":"","mintempFrom00To09":"","rainfallFrom00To12":"從昨晚午夜至今日正午，天文台錄得微量雨量。","rainfallLastMonth":"天文台於今年的七月共錄得175.2毫米雨量","rainfallJanuaryToLastMonth":"由今年一月一日直至七月底為止之總雨量為1016.5毫米，而同期之正常雨量則為1468.2毫米。","humidity":{"recordTime":"2023-08-01T12:00:00+08:00","data":[{"unit":"percent","value":78,"place":"香港天文台"}]}}';


var weatherObj = JSON.parse(weather);
//console.log(weatherObj);

var places =[];
for (var i=0;i<weatherObj.rainfall.data.length;i++){
    places.push(weatherObj.rainfall.data[i].place);
   
}
console.log(places);
console.log(places[1]);
for (var i=0; i<places.length;i++ ){


var input = document.createElement("div");
input.innerHTML = `<input type="radio" id="day1Input${i}" name="places" value='${places[i]}'>${places[i]} `;

document.querySelector("#day1Place").appendChild(input);
}



// real data
fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc", {mode:'cors'})
.then(res=>res.json())
.then(data=>{
console.log(data);
var weatherAPI = data;


//



// submit form    
document.querySelector("#day1weather").addEventListener("submit",function(event){

event.preventDefault();
var clientWantLocations = [];
var clientWantLocationItem = document.querySelectorAll("#day1weather input[name=places]:checked");

   for (var i=0;i<clientWantLocationItem.length;i++){
        clientWantLocations.push(clientWantLocationItem[i].value);
}
        var day1P = document.querySelector("#day1ShowData")


var clientWantWeather = document.querySelector("#day1weather input[name=weatherType]:checked");

// present data

var weatherSelected = weatherAPI[clientWantWeather.value].data;

if (clientWantLocations !=""){

for (var weatherSelectedSingle of weatherSelected){
for (var clientWantLocation of clientWantLocations){

if (weatherSelectedSingle.place == clientWantLocation) {

day1P.innerHTML="";

var date = new Date ("2023-08-01T00:00:00Z")
day1P.innerHTML +=date;

day1P.innerHTML += `，${clientWantLocations}：`;

    if (weatherSelectedSingle.main == 'FALSE') {
        day1P.innerHTML += "冇雨，放心晒 :) ";
    } else {
        day1P.innerHTML += `現時雨量係${weatherSelectedSingle.max}毫米，要帶遮喇 :O`; 
        alert("帶定遮呀呀呀");
    }
} 
}    
}

} else  {
    console.log("冇揀");
    alert("請選擇地區");
     
} // if 
}) // submit
}) //fetch


//---------------day2









//---------------

/* 
console.log();
 */

