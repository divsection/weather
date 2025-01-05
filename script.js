document.getElementById('weather-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    const city = document.getElementById('city').value;
    const apiKey = '6ab8c601a03186e14fb785eb3d5af218'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('City not found');
        }

        const weatherData = await response.json();

        // Populate the weather result
        document.getElementById('weather-city').textContent = weatherData.name;
        document.getElementById('weather-description').textContent = weatherData.weather[0].description;
        document.getElementById('weather-temp').textContent = weatherData.main.temp;
        document.getElementById('weather-humidity').textContent = weatherData.main.humidity;
        document.getElementById('weather-wind').textContent = weatherData.wind.speed;

        document.getElementById('weather-result').classList.remove('hidden');
    } catch (error) {
        alert(error.message);
    }
});
