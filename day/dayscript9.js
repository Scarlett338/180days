// click

document.querySelector('#con1').addEventListener("mouseover", function(){
    var b=document.querySelector('#con1 button');
    var positionX=lineX();
    var positionY=lineY();
    b.style.position="absolute";
    b.style.top=positionX+"px";
    b.style.left=positionY+"px";

    document.querySelector('#con1 h1').style.visibility="visible";

    function lineX(){
        return Math.floor(Math.random()*700);
    }

    function lineY(){
        return Math.floor(Math.random()*700);
    }
})

document.querySelector('#con1').addEventListener("mouseout", function(){
    var b=document.querySelector('#con1 button');
    b.style=""
   // b.style="height:1000px";
     //   top:"0px"
    
})

document.querySelector('#con1 button').addEventListener("click", function(){
    alert('OH! YOU ARE A FAST CATCHER!')
})


document.querySelector('#con2 button').addEventListener("click", function(){
    document.querySelector('#con2 button').style.visibility="hidden";
    
})



document.querySelector('#con2').addEventListener("mouseover", function(){
    
})


// mouse


//
function draw1(){
    var canvas=document.getElementById('can1');
    if (canvas.getContext){
        var ctx=canvas.getContext('2d')
    }


}

function draw2(){
    var canvas=document.getElementById('can2');
    if (canvas.getContext){
        var ctx=canvas.getContext('2d')
    }
}



// 碌上下

/* day9 */ 



var countrie = ['A','Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic of the', 'Congo, Republic of the', 'Costa Rica', 'Côte d Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'D', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'E', 'East Timor (Timor-Leste)', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'F', 'Fiji', 'Finland', 'France', 'G', 'Gabon', 'The Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'H', 'Haiti', 'Honduras', 'Hungary', 'I', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'J', 'Jamaica', 'Japan', 'Jordan', 'K', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'L', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'M', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia, Federated States of', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar (Burma)', 'N', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway', 'O', 'Oman', 'P', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Q', 'Qatar', 'R', 'Romania', 'Russia', 'Rwanda', 'S', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Sudan, South', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'T', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'U', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'V', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Y', 'Yemen', 'Z', 'Zambia', 'Zimbabwe']
var countries = countrie.filter(c=>c.length >1)

console.log(countries)