let serverResponse = await fetch("http://api.weatherstack.com/current?access_key=cbf5f69e5a985aacc6e2b7242ca62284&query=Paris")
let data = await serverResponse.json();

export default {data}