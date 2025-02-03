
// Replace with your OpenWeatherMap API Key
const searchBtn = document.getElementById('submit');
const cityInput = document.getElementById('city-input');
const temperature = document.getElementById('temperature');
const cityName = document.getElementById('city-name');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');


searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetchWeatherData(city);
    }
    // funcName(city);
});


function fetchWeatherData (city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1435318a93eafa883b901165632116e5&units=metric`;
     fetch(url)
        .then(response => response.json())
        .then(data => {
            
            if (data.cod === 200) {
                temperature.textContent =` ${Math.round(data.main.temp)}°C`;
                cityName.textContent = data.name;
                humidity.textContent = `${data.main.humidity}% Humidity`;
                windSpeed.textContent = `${data.wind.speed} km/h Wind Speed`;
            } else {
                alert('City not found!');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

