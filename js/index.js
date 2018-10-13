
/*$( document ).ready( function() {

    navigator.geolocation.getCurrentPosition(function(position) {

      var lat = Math.floor(position.coords.latitude);
      var lng = Math.floor(position.coords.longitude);
      var weather_url;
      weather_url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&APPID=24f8fb07c213c7208232c72e84a663c0";
      localStorage.setItem('main', weather_url);

      var divMainCity = document.querySelector('.block-gps-city');
      var divMainTemperature = document.querySelector('.block-gps-temperature');
      var divMainWind = document.querySelector('.block-gps-wind');
      var divMainHumidity = document.querySelector('.block-gps-humidity');
      function getWeather() {
      var xttp = new XMLHttpRequest();
      xttp.open("get",localStorage.getItem('main'));
      xttp.send();
      xttp.onreadystatechange = function() {
        if (xttp.readyState == 4 && xttp.status ==  200) {
          var forecast = JSON.parse(xttp.responseText);

          divMainCity.innerHTML = forecast.name;
          divMainTemperature.innerHTML = Math.floor(forecast.main.temp - 273.15, -1) + " ℃";
          divMainWind.innerHTML = forecast.wind.speed + " " + "m/sec" + ", " + forecast.wind.deg + " " + "degrees" 
          divMainHumidity.innerHTML ="humidity " + forecast.main.humidity;
        }
      }
      }
      getWeather();
    });
});*/


var cityList = [];
window.onload=function(){
  
  var nameCity = document.getElementById("input");
  var svg = document.getElementById("svg_search");
  var body = document.body;
  var section = document.getElementById("section");
  $("svg").on('click', function() {
    function getNewForecast() {
      var weather_url;
      weather_url = "http://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&APPID=24f8fb07c213c7208232c72e84a663c0";
      localStorage.setItem(nameCity.value, weather_url);

        function getWeather() {
          var p = document.getElementById("p-message");
          var xttp = new XMLHttpRequest();
          xttp.open("get",localStorage.getItem(nameCity.value));
          xttp.send();
          xttp.onreadystatechange = function() {
          if (xttp.readyState == 4 && xttp.status ==  200) {
          var forecast = JSON.parse(xttp.responseText);
          
          if (cityList.indexOf(forecast.name) === -1) {
            var blockGps = document.createElement('div');
            var divClose = document.createElement('div');
            divClose.className = 'blockClose' + ' ' + forecast.name;
            blockGps.className = 'customBlock' + forecast.name;
            blockGps.innerHTML = '<p class="city" >' + forecast.name + '</p>'  + Math.floor(forecast.main.temp - 273.15, -1) + ' ℃' + '</br>' + forecast.wind.speed + " " + "m/sec" + ", " + forecast.wind.deg + " " + "degrees" + '</br>'
            document.getElementById('section').appendChild(blockGps);
            blockGps.appendChild(divClose);
            p.innerHTML = '';
            cityList.push(forecast.name);
          } else {
            p.innerHTML = 'City has been already chosen';
          }
          
          } else {
          
          p.innerHTML = 'wrong city name';
          }
          }
          }
          getWeather();
          }
        getNewForecast();

      nameCity.value = '';
});


  /*function getNewForecast() {
    var weather_url;
        weather_url = "http://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&APPID=24f8fb07c213c7208232c72e84a663c0";
        localStorage.setItem(input.value, weather_url);
  
        function getWeather() {
        var xttp = new XMLHttpRequest();
        xttp.open("get",localStorage.getItem(input.value));
        xttp.send();
        xttp.onreadystatechange = function() {
          if (xttp.readyState == 4 && xttp.status ==  200) {
            var forecast = JSON.parse(xttp.responseText);
  
  }*/

}



/*
var clickCount = +$(this).data("clickcount");
    if (!clickCount)
    clickCount = 1;
    localStorage.setItem('name'+ clickCount++, nameCity.value);
    $(this).data("clickcount", clickCount)
*/


