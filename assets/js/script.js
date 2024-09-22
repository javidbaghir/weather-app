const searchCity = document.querySelector('.search-input')
const wind = document.querySelector('.wind')
const cityName = document.querySelector('.city')
const temp = document.querySelector('.temp')
const humidity = document.querySelector('.humidity')
const btn = document.querySelector('.btn')
const weatherPhoto = document.querySelector('.weather-photo')
const weather = document.querySelector('.weather')
const errorMsg = document.querySelector('.error-msg')


const apiKey = "dce4a956e41d06f7342b365cf11efb0d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWheather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)


    if (city === "" || response.status == 404) {
        errorMsg.classList.add('error')
        errorMsg.textContent = "Invalid city name"
        weather.style.display = 'none'
    } else {

        let data = await response.json();

        wind.innerHTML = data.wind.speed + " km/h"
        cityName.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + "°c"
        humidity.innerHTML = data.main.humidity + "%"
    
        if (data.weather[0].main == 'Clouds') {
            weatherPhoto.src = "https://t4.ftcdn.net/jpg/05/44/09/05/360_F_544090569_aLtJ2LLJHqXWqdz7bLafkGe6kszNd4FZ.webp"
        } else if (data.weather[0].main == 'Clear') {
            weatherPhoto.src = "https://static.vecteezy.com/system/resources/previews/023/258/076/original/weather-icon-sun-icon-free-png.png"
        } else if (data.weather[0].main == 'Drizzle') {
            weatherPhoto.src = "https://cdn-icons-png.flaticon.com/512/6142/6142570.png"
        } else if (data.weather[0].main == 'Mist') {
            weatherPhoto.src = "https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-daytime-foggy-weather-clouds-illustration-png-image_5246770.png"
        } else if (data.weather[0].main == 'Rain') {
            weatherPhoto.src = "https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-daytime-foggy-weather-clouds-illustration-png-image_5246770.pnghttps://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-512.png"
        }  else if (data.weather[0].main == 'Snow') {
            weatherPhoto.src = "https://static.vecteezy.com/system/resources/thumbnails/012/806/416/small_2x/3d-cartoon-weather-icon-snow-clouds-and-snowflakes-sign-isolated-on-transparent-background-3d-render-illustration-png.png"
        }
        
        weather.style.display = 'block'
        errorMsg.classList.remove('error')
        errorMsg.textContent = ""
    }

}


btn.addEventListener('click', function() {

    const cityName = searchCity.value;
    checkWheather(cityName)
})
