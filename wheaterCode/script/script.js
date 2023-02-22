import {default as weatherResponse} from "./modules/Weathermodule.js"
import {read} from "./modules/functionModule.js"
let weatherData = weatherResponse.data.current;
let showButton = document.querySelector(".showButton")

console.log(read);
showButton.addEventListener("click",read)
