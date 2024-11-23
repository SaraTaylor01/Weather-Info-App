const apiKey = "YOUR_API_KEY_HERE"; // Get from OpenWeatherMap
const fetchWeather = document.getElementById("fetchWeather");

fetchWeather.addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  const weatherResult = document.getElementById("weatherResult");

  if (!city) {
    weatherResult.textContent = "Please enter a city name.";
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        weatherResult.innerHTML = `
          <p>City: ${data.name}</p>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
      } else {
        weatherResult.textContent = "City not found. Please try again.";
      }
    })
    .catch(error => {
      weatherResult.textContent = "Error fetching weather data. Please try later.";
    });
});
