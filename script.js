const apiKey="616f8b76e947d3c4c31ecadfe5b9a2c3";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const weather=document.querySelector('.weather');
const searchBtn=document.querySelector(".search button");
const error=document.querySelector('.error');
const image=document.querySelector('.weather-icon');

    async function checkWeather(city){
        const response=await fetch(apiUrl +city+`&appid=${apiKey}`);
        if(response.status==404){
            document.querySelector('.error').style.display="block";
            document.querySelector('.weather').style.display="none";
        }
        else{
            var data= await response.json();
          
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°c";
            document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
            document.querySelector('.wind').innerHTML=data.wind.speed+"km/h";
            if(data.weather[0].main=="Clouds"){
                image.src="images/clouds.png";
            }
            else  if(data.weather[0].main=="Clear"){
                image.src="images/clear.png";
            }
            else  if(data.weather[0].main=="Rain"){
                image.src="images/rain.png";
            }
            else  if(data.weather[0].main=="Drizzle"){
                image.src="images/drizzle.png";
            }
            else  if(data.weather[0].main=="Mist"){
                image.src="images/mist.png";
            }
            document.querySelector('.weather').style.display="block";
            document.querySelector('.error').style.display="none";
        }
    }
    searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
    });   

