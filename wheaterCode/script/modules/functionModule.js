import {default as weatherResponse} from "./Weathermodule.js"
let weatherData = weatherResponse.data.current;
let read = function(){
// defining elements 
    let serverCondition = document.querySelector("img")
    let temp = document.querySelector(".temp")
    let windspeed = document.querySelector(".windspeed")
    let humidity = document.querySelector(".humidity")
    let container = document.querySelector(".container")
//
//setting values to defined elements
    serverCondition.setAttribute("src",weatherData.weather_icons[0])
    temp.innerHTML = `temp: ${weatherData.temperature}`
    windspeed.innerHTML =  `wind speed: ${weatherData.wind_speed}`
    humidity.innerHTML = `humidity: ${weatherData.humidity}`
//
if (weatherData.is_day == "yes") {
    container.getElementsByClassName.backgroundImage = "url(./../../../media/s-l1600.jpg)"
}else{
    container.getElementsByClassName.backgroundImage = "url(./../../../media/10453-2880x1800-paris-hd-background-image-desktop-hd.jpg)"

}
}

export{read}