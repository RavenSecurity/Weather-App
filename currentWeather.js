export function currentWeather(data) {
  // Show current weather in selected city
  document.getElementById("current").innerHTML = Number(data.list[0].main.temp - 273.15).toFixed(0) + "°";
  document.getElementById("precipitation").innerHTML = data.list[0].weather[0].description + "°";
  document.getElementById("humidity").innerHTML = Number(data.list[0].main.humidity).toFixed(0) + "%";
  document.getElementById("wind").innerHTML = Number(data.list[0].wind.speed).toFixed(0) + "km/h";
}