var cityInput = document.querySelector(".input")
var searchBtn = document.querySelector(".btn")
var descri = document.querySelector(".description")
var temp = document.querySelector(".temp")
var wind = document.querySelector(".wind")
var humidity = document.querySelector(".humditiy")
var visibility = document.querySelector(".visibilty")


searchBtn.addEventListener('click', function(){
    var citySearch = {
        function () {
            fetch("http://api.openweathermap.org/geo/1.0/direct?q="+cityInput.value+"&limit=7&appid=edde692e58d867434cd1d621048e49c2"
            )
            .then(response => response.json())
            .then(data => console.log(data))
        }
    }
})

