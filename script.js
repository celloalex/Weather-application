function zipcode(){
    var userzip = document.getElementById('userinput').value;
    var url = "http://api.wunderground.com/api/fd1358c429691325/forecast/q/" + userzip + ".json";
    $.get(url, information);
    return false;
};

function information(data)
{
    $("#day-1").append(data.forecast.txt_forecast.forecastday[0].title);
    $("#day-2").append(data.forecast.txt_forecast.forecastday[1].title);
    $("#day-3").append(data.forecast.txt_forecast.forecastday[2].title);
    $("#day-4").append(data.forecast.txt_forecast.forecastday[3].title);
    $("#day-5").append(data.forecast.txt_forecast.forecastday[4].title);
    $("#day-6").append(data.forecast.txt_forecast.forecastday[5].title);
    $("#day-7").append(data.forecast.txt_forecast.forecastday[6].title);
    $("#day-8").append(data.forecast.txt_forecast.forecastday[7].title);    
};
//data.response.forecast.txt_forecast.date

//data.response.results[0].name
simpleforecast