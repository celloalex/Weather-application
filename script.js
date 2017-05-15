//forecast default
function defaultcity(){
    var url = "http://api.wunderground.com/api/fd1358c429691325/forecast/q/il/chicago.json";
    $.get(url, information);
    return false;
};

//forcast user submit
function zipcode(){
    var userzip = document.getElementById('userinput').value;
    var url = "http://api.wunderground.com/api/fd1358c429691325/forecast/q/" + userzip + ".json";
    $.get(url, information);
    conditionssubmit();
    return false;
};

//conditions default
function defaultconditions(){
    var urlconditions = "http://api.wunderground.com/api/fd1358c429691325/conditions/q/il/chicago.json";
    $.get(urlconditions, conditions);
    return false;
};

//conditions usersubmit (called from zipcode())
function conditionssubmit()
{
    var userzip = document.getElementById('userinput').value;
    var urlc = "http://api.wunderground.com/api/fd1358c429691325/conditions/q/" + userzip + ".json";
    $.get(urlc, conditions);
    return false;
};

// processes data from conditions
function conditions(info)
{
    //shows the city in the jumbotron
    var city = info.current_observation.display_location.city;
    $("#conditions-jumbo").text("Right now in " + city);
    $("#forecast-jumbo").text(city + " 3-Day Forecast");

    //Shows latest update
    $("#condition-update").text(info.current_observation.observation_time);

    //Current temperature
    var temp = info.current_observation.temp_f;
    var tempfeels = info.current_observation.feelslike_f;
    $("#condition-temp").text(temp + " degrees outside" + " | " + "Feels like " + tempfeels + " degrees outside");

    //picture of current weather
    $("#image-current").attr('src', info.current_observation.icon_url);

    //current condition
    $("#condition-current").text(info.current_observation.weather);

    //current winds
    $("#condition-wind").text(info.current_observation.wind_string);

    //current precipitation
    var precipitationcurrent = info.current_observation.precip_today_in;
    var humiditycurrent = info.current_observation.relative_humidity;
    $("#condition-precipitation").text(precipitationcurrent + "in Precipitation today" + " | " + humiditycurrent + " Humidity");
};

//Processes data from forcast
function information(data)
{
    //day of the week (3-day forcast)
    $("#day-1").text(data.forecast.simpleforecast.forecastday[1].date.weekday);
    $("#day-2").text(data.forecast.simpleforecast.forecastday[2].date.weekday);
    $("#day-3").text(data.forecast.simpleforecast.forecastday[3].date.weekday);

    //Temperature of the day
    var high1 = data.forecast.simpleforecast.forecastday[1].high.fahrenheit;
    var low1 = data.forecast.simpleforecast.forecastday[1].low.fahrenheit;
    $("#temp-1").text("High: " + high1 + " | " + "Low: " + low1);

    var high2 = data.forecast.simpleforecast.forecastday[2].high.fahrenheit;
    var low2 = data.forecast.simpleforecast.forecastday[2].low.fahrenheit;
    $("#temp-2").text("High: " + high2 + " | " + "Low: " + low2);

    var high3 = data.forecast.simpleforecast.forecastday[3].high.fahrenheit;
    var low3 = data.forecast.simpleforecast.forecastday[3].low.fahrenheit;
    $("#temp-3").text("High: " + high3 + " | " + "Low: " + low3);

    //picture of the weather
    $("#image-1").attr('src', data.forecast.simpleforecast.forecastday[1].icon_url);
    $("#image-2").attr('src', data.forecast.simpleforecast.forecastday[2].icon_url);
    $("#image-3").attr('src', data.forecast.simpleforecast.forecastday[3].icon_url);

    //condition of the weather
    $("#condition-1").text(data.forecast.simpleforecast.forecastday[1].conditions);
    $("#condition-2").text(data.forecast.simpleforecast.forecastday[2].conditions);
    $("#condition-3").text(data.forecast.simpleforecast.forecastday[3].conditions);

    //wind of the day
    var direction1 = data.forecast.simpleforecast.forecastday[1].avewind.dir;
    var speed1 = data.forecast.simpleforecast.forecastday[2].avewind.mph;
    $("#wind-1").text(direction1 + " wind at " + speed1 + " MPH" );

    var direction2 = data.forecast.simpleforecast.forecastday[2].avewind.dir;
    var speed2 = data.forecast.simpleforecast.forecastday[2].avewind.mph;
    $("#wind-2").text(direction2 + " wind at " + speed2 + " MPH" );

    var direction3 = data.forecast.simpleforecast.forecastday[3].avewind.dir;
    var speed3 = data.forecast.simpleforecast.forecastday[3].avewind.mph;
    $("#wind-3").text(direction3 + " wind at " + speed3 + " MPH" );

    //precipitation of the day
    var precipitation1 = data.forecast.simpleforecast.forecastday[1].qpf_allday.in;
    var humidity1 = data.forecast.simpleforecast.forecastday[1].avehumidity;
    $("#precip-1").text(precipitation1 + " Precipitation" + " | " + humidity1 + "% Humidity");

    var precipitation2 = data.forecast.simpleforecast.forecastday[2].qpf_allday.in;
    var humidity2 = data.forecast.simpleforecast.forecastday[2].avehumidity;
    $("#precip-2").text(precipitation2 + " Precipitation" + " | " + humidity2 + "% Humidity");

    var precipitation3 = data.forecast.simpleforecast.forecastday[3].qpf_allday.in;
    var humidity3 = data.forecast.simpleforecast.forecastday[3].avehumidity;
    $("#precip-3").text(precipitation3 + " Precipitation" + " | " + humidity3 + "% Humidity");

};
