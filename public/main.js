console.log( 'test' );

const url =
    "https://api.weatherapi.com/v1/forecast.json?q=%22toronto%22&key=d387adeca9424ff581e232645260302"

async function getData() {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    // console.log("json data from API: ", data);

    const cityName = jsonResponse.location.name;
    const country = jsonResponse.location.country;
    const tempInCelcius = jsonResponse.current.temp_c;
    const currentCondition = jsonResponse.current.condition.icon;
    const text = jsonResponse.current.condition.text;
    
    const placeholder = document.querySelector("#weather-info")
    placeholder.innerHTML = `
        <p>${cityName}, ${country}</p>
        <p>${tempInCelcius}°C</p>
        <p>${text}</p>
        `
}
getData();