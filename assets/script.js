var cityInput = document.querySelector(".cityInput")
var searchBtn = document.querySelector("#searchBtn")
var descri = document.querySelector(".description")
var temp = document.querySelector(".temp")
var wind = document.querySelector(".wind")
var humidity = document.querySelector(".humditiy")
var visibility = document.querySelector(".visibilty")
var apiKey = "edde692e58d867434cd1d621048e49c2"

searchBtn.addEventListener('click', ()=>{
    console.log("click")
var cityName = cityInput.value
console.log(cityName)
apiCall(cityName)

})

function apiCall(city) {
    var url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    fetch(url)
    .then((response)=>{return response.json()})
    .then((data)=>{
        console.log(data)
        var lat = data.coord.lat
        var lon = data.coord.lon
    })
}