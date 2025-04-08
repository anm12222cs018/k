const apiKey = "d92fcc34c4b01f6c3c4cbd9705969e10"; 

function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("weatherResult").innerHTML = "City not found!";
                return;
            }

            document.getElementById("weatherResult").innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">
                <p>${data.weather[0].description}</p>
            `;
        })
        .catch(error => console.error("Error fetching weather:", error));
}
