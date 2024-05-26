const apiKey = "94dd3a1034ae754f0fb5472d5f27a29d";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function getWeather(city) {

    const response = await fetch(apiURL + `&q=${city}` + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    if (data.message) {
        document.querySelector(".city").innerHTML = data.message;
        document.querySelector(".temp").innerHTML = "- °C";
        document.querySelector(".humidity").innerHTML = "- %";
        document.querySelector(".wind").innerHTML = "- km/h";

        document.querySelector(".weather-condition").innerHTML = "--";
    } else {


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + " °C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        document.querySelector(".weather-condition").innerHTML = data.weather[0].main;

        weatherImg = document.querySelector(".weather-icon");

        if(data.weather[0].main == "Clouds"){
            weatherImg.src="assets/images/clouds.png";
        } else if(data.weather[0].main == "Clear"){
            weatherImg.src = "assets/images/clear.png";
        } else if(data.weather[0].main == "Rain"){
            weatherImg.src = "assets/images/rain.png";
        } else if(data.weather[0].main == "Drizzle"){
            weatherImg.src = "assets/images/drizzle.png";
        } else if(data.weather[0].main == "Mist" || "Haze"){
            weatherImg.src = "assets/images/mist.png";
        } 
    }


}

const inputCity = document.querySelector(".search input");
const inputButton = document.querySelector(".search button");

inputButton.addEventListener("click", () => {


    getWeather(inputCity.value);
});

inputCity.addEventListener("keydown", (event) => {

    if (event.key === 'Enter') {
        getWeather(inputCity.value);
    }
})

