const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrlKeb = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kebili";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function getdes() {
    const response = await fetch(apiUrlKeb + "&appid=" + apiKey);
    const data = await response.json();
    console.log(data);
    document.querySelector(".temp").innerText = data.main.temp + " °C";
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + "km/h";


}

async function getWeather(city) {
    const response = await fetch(apiUrl + city + "&appid=" + apiKey);
    const data = await response.json();
    const could = document.querySelector("#cloud");
    const weather = data.weather[0].main;

    switch (weather) {

        case "Clear": could.src = "images/clear.png"; break;
        case "Clouds": could.src = "images/clouds.png"; break;
        case "Dizzle": could.src = "images/dizzle.png"; break;
        case "Rain": could.src = "images/rain.png"; break;
        case "Snow": could.src = "images/snow.png"; break;
        case "Mist": could.src = "images/mist.png"; break;
        default: break;
    }
    const day = document.querySelector(".day");
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    day.innerText = formattedDate;

    document.querySelector(".temp").innerText = data.main.temp + " °C";
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + "km/h";
}
getWeather("kebili");
document.querySelector(".search button").addEventListener("click", function () {
    getWeather(document.querySelector(".search input").value);
});

