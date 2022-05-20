import { displayName } from "./displayName.js";
import { currentWeather } from "./currentWeather.js";
import { forecastWeather } from "./forecastWeather.js";
import { displayImage } from "./displayImage.js";
import { DefaultScreen } from "./defaultScreen.js";

export function GetInfo() {
  let newName = document.getElementById("cityInput");
  localStorage.setItem("City", newName.value);

  displayName(newName.value);
  displayImage(newName.value);

  fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + newName.value +"&appid=32ba0bfed592484379e51106cef3f204")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      currentWeather(data);
      forecastWeather(data);
    })
    .catch((err) => alert("Something Went Wrong: check your spelling"));
}

//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
var weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

//Function to get the correct integer for the index of the days array

function CheckDay(day) {
  if (day + d.getDay() > 6) {
    return day + d.getDay() - 7;
  } else {
    return day + d.getDay();
  }
}

for (let i = 0; i < 5; i++) {
  document.getElementById("day" + (i + 1)).innerHTML = weekday[CheckDay(i)];
}

DefaultScreen();
