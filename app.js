function GetInfo() {

    let newName = document.getElementById("cityInput");
    let cityName = document.getElementById("cityName");

    cityName.innerHTML = newName.value;

    localStorage.setItem("City", newName.value);

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=32ba0bfed592484379e51106cef3f204')
.then(response => response.json())
.then(data => {
    document.getElementById("right").style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + newName.value + "')";

    document.getElementById("current").innerHTML = Number(data.list[i].main.temp - 273.15).toFixed(0)+ "°";
    document.getElementById("precipitation").innerHTML = (data.list[i].weather[0].description)+ "°";
    document.getElementById("humidity").innerHTML = Number(data.list[i].main.humidity).toFixed(0)+ "%";
    document.getElementById("wind").innerHTML = Number(data.list[i].wind.speed).toFixed(0)+ "km/h";

    //Getting the min and max values for each day
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = Number(data.list[i].main.temp_min - 273.15).toFixed(0)+ "°";
    }

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = Number(data.list[i].main.temp_max - 273.15).toFixed(0) + "°";
    }

    //Getting Weather Icons
     for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon + ".png";
    }
    
    console.log(data)

})

.catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}

function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = localStorage.getItem("City") || "Brussels";
    ;
    GetInfo();
}

//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
var weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }

    DefaultScreen()

    // TO DO LIST
    // BE ABLE TO COMPARE THE WEATHER IN TWO CITIES
    // CHART JS