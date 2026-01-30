const input = document.querySelector("input");
const button = document.querySelector("#button");
const locationEl = document.querySelector(".location");
const temperatureEl = document.querySelector(".temperature");
const conditionEl = document.querySelector(".condition");

button.addEventListener("click", () => {
    const city = input.value.trim();

    input.value = "";

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=8288d8e7c3074919afc43346262301&q=${city}&aqi=no`;

    fetch(apiUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const temp = data.current.temp_c;
            const name = data.location.name;
            const country = data.location.country;
            const status = data.current.condition.text;

            locationEl.innerText = `${name}, ${country}`;
            temperatureEl.innerText = `${temp}°C`;
            conditionEl.innerText = status;
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
        });
});