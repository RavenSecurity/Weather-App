export function forecastWeather(data) {
  for (let i = 0; i < 5; i++) {
    document.getElementById("day" + (i + 1) + "Min").innerHTML =
      Number(data.list[i].main.temp_min - 273.15).toFixed(0) + "°";
      document.getElementById("day" + (i + 1) + "Max").innerHTML =
      Number(data.list[i].main.temp_max - 273.15).toFixed(0) + "°";
      document.getElementById("img" + (i + 1)).src =
      "http://openweathermap.org/img/wn/" +
      data.list[i].weather[0].icon +
      ".png";
  }}