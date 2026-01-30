let input=document.querySelector("input");
let button=document.querySelector("#button");
let city=undefined
let loaction=document.querySelector(".location");
button.addEventListener("click",()=>{
    city=input.value.trim();
    input.value="";
})


 const api_url=`http://api.weatherapi.com/v1/current.json?key=8288d8e7c3074919afc43346262301&q=${city}&aqi=no`

fetch(api_url)
.then((response)=>response.json())
.then((data)=>{
    var temp=data.current.temp_c;
    var name=data.location.name;
    var country=data.location.country;
    var status=data.current.condition.text;
})


loaction.innerText=`${name},${country}`;
document.querySelector(".temperature").innerText=`${temp}°C`;
document.querySelector(".condition").innerText=`${status}`;