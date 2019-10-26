$('.dropdown-trigger').dropdown();

$(document).ready(function () {
  $('.collapsible').collapsible();
});

$(document).ready(function () {
  $('.collapsible').collapsible();
});

// Open Weather API Call

var APIKey = "80ff47912d3d33c0148bdb2398a13823";
var parkLat = "33";
var parkLong = "129";

$.ajax({
  url: "https://api.openweathermap.org/data/2.5/forecast?lat=" + parkLat + "&lon=" + parkLong + "&appid=" + APIKey,
  method: "GET"
})

  .then(function (response) {

    console.log(response);
    var degreesFar = (response.list[4].main.temp - 273.15) * 1.80 + 32;
    var degreesFarRounded = Math.round(degreesFar * 10) / 10;

    // Day 1 Forecast

    $("#tempDiv1").text(degreesFarRounded + " °F");
    $("#windSpeedDiv1").text(response.list[4].wind.speed + " MPH");

    if ((response.list[4].weather[0].main) === "Clouds") {
      $("#weatherDiv1").append(" " + '<i class="fas fa-cloud fa-3x">');
    }
    if ((response.list[4].weather[0].main) === "Clear") {
      $("#weatherDiv1").append(" " + '<i class="fas fa-sun fa-3x">');
    }
    if ((response.list[4].weather[0].main) === "Rain") {
      $("#weatherDiv1").append(" " + '<i class="fas fa-cloud-rain fa-3x">');
    }
    if ((response.list[4].weather[0].main) === "Snow") {
      $("#weatherDiv1").append(" " + '<i class="far fa-snowflake fa-3x">');
    }
    if ((response.list[4].weather[0].main) === "Fog") {
      $("#weatherDiv1").append(" " + '<i class="fas fa-smog fa-3x">');
    }
    if ((response.list[4].weather[0].main) === "Mist") {
      $("#weatherDiv1").append(" " + '<i class="fas fa-smog fa-3x">');
    }
    if ((response.list[4].weather[0].main) === "Windy") {
      $("#weatherDiv1").append(" " + '<i class="fas fa-wind fa-3x">');
    }

    // Day 2 Forecast

    var degreesFar = (response.list[12].main.temp - 273.15) * 1.80 + 32;
    var degreesFarRounded = Math.round(degreesFar * 10) / 10;

    $("#tempDiv2").text(degreesFarRounded + " °F");
    $("#windSpeedDiv2").text(response.list[12].wind.speed + " MPH");

    if ((response.list[12].weather[0].main) === "Clouds") {
      $("#weatherDiv2").append(" " + '<i class="fas fa-cloud fa-3x">');
    }
    if ((response.list[12].weather[0].main) === "Clear") {
      $("#weatherDiv2").append(" " + '<i class="fas fa-sun fa-3x">');
    }
    if ((response.list[12].weather[0].main) === "Rain") {
      $("#weatherDiv2").append(" " + '<i class="fas fa-cloud-rain fa-3x">');
    }
    if ((response.list[12].weather[0].main) === "Snow") {
      $("#weatherDiv2").append(" " + '<i class="far fa-snowflake fa-3x">');
    }
    if ((response.list[12].weather[0].main) === "Fog") {
      $("#weatherDiv2").append(" " + '<i class="fas fa-smog fa-3x">');
    }
    if ((response.list[12].weather[0].main) === "Mist") {
      $("#weatherDiv2").append(" " + '<i class="fas fa-smog fa-3x">');
    }
    if ((response.list[12].weather[0].main) === "Windy") {
      $("#weatherDiv2").append(" " + '<i class="fas fa-wind fa-3x">');
    }

    // Day 3 Forecast

    var degreesFar = (response.list[20].main.temp - 273.15) * 1.80 + 32;
    var degreesFarRounded = Math.round(degreesFar * 10) / 10;

    $("#tempDiv3").text(degreesFarRounded + " °F");
    $("#windSpeedDiv3").text(response.list[20].wind.speed + " MPH");

    if ((response.list[20].weather[0].main) === "Clouds") {
      $("#weatherDiv2").append(" " + '<i class="fas fa-cloud fa-3x">');
    }
    if ((response.list[20].weather[0].main) === "Clear") {
      $("#weatherDiv3").append(" " + '<i class="fas fa-sun fa-3x">');
    }
    if ((response.list[20].weather[0].main) === "Rain") {
      $("#weatherDiv3").append(" " + '<i class="fas fa-cloud-rain fa-3x">');
    }
    if ((response.list[20].weather[0].main) === "Snow") {
      $("#weatherDiv3").append(" " + '<i class="far fa-snowflake fa-3x">');
    }
    if ((response.list[20].weather[0].main) === "Fog") {
      $("#weatherDiv3").append(" " + '<i class="fas fa-smog fa-3x">');
    }
    if ((response.list[20].weather[0].main) === "Mist") {
      $("#weatherDiv3").append(" " + '<i class="fas fa-smog fa-3x">');
    }
    if ((response.list[20].weather[0].main) === "Windy") {
      $("#weatherDiv3").append(" " + '<i class="fas fa-wind fa-3x">');
    }

    // Day 4 Forecast

    var degreesFar = (response.list[28].main.temp - 273.15) * 1.80 + 32;
    var degreesFarRounded = Math.round(degreesFar * 10) / 10;

    $("#tempDiv4").text(degreesFarRounded + " °F");
    $("#windSpeedDiv4").text(response.list[28].wind.speed + " MPH");

    if ((response.list[28].weather[0].main) === "Clouds") {
      $("#weatherDiv4").append(" " + '<i class="fas fa-cloud fa-3x">');
    }
    if ((response.list[28].weather[0].main) === "Clear") {
      $("#weatherDiv4").append(" " + '<i class="fas fa-sun fa-3x">');
    }
    if ((response.list[28].weather[0].main) === "Rain") {
      $("#weatherDiv4").append(" " + '<i class="fas fa-cloud-rain fa-3x">');
    }
    if ((response.list[28].weather[0].main) === "Snow") {
      $("#weatherDiv4").append(" " + '<i class="far fa-snowflake fa-3x">');
    }
    if ((response.list[28].weather[0].main) === "Fog") {
      $("#weatherDiv4").append(" " + '<i class="fas fa-smog fa-3x">');
    }
    if ((response.list[28].weather[0].main) === "Mist") {
      $("#weatherDiv4").append(" " + '<i class="fas fa-smog fa-3x">');
    }
    if ((response.list[28].weather[0].main) === "Windy") {
      $("#weatherDiv4").append(" " + '<i class="fas fa-wind fa-3x">');
    }

    // Day 5 Forecast

    var degreesFar = (response.list[36].main.temp - 273.15) * 1.80 + 32;
    var degreesFarRounded = Math.round(degreesFar * 10) / 10;

    $("#tempDiv5").text(degreesFarRounded + " °F");
    $("#windSpeedDiv5").text(response.list[12].wind.speed + " MPH");

    if ((response.list[36].weather[0].main) === "Clouds") {
      $("#weatherDiv5").append(" " + '<i class="fas fa-cloud fa-3x">');
    }
    if ((response.list[36].weather[0].main) === "Clear") {
      $("#weatherDiv5").append(" " + '<i class="fas fa-sun fa-3x">');
    }
    if ((response.list[36].weather[0].main) === "Rain") {
      $("#weatherDiv5").append(" " + '<i class="fas fa-cloud-rain fa-3x">');
    }
    if ((response.list[36].weather[0].main) === "Snow") {
      $("#weatherDiv5").append(" " + '<i class="far fa-snowflake fa-3x">');
    }
    if ((response.list[36].weather[0].main) === "Fog") {
      $("#weatherDiv5").append(" " + '<i class="fas fa-smog fa-3x">');
    }
    if ((response.list[36].weather[0].main) === "Mist") {
      $("#weatherDiv5").append(" " + '<i class="fas fa-smog fa-3x">');
    }
    if ((response.list[36].weather[0].main) === "Windy") {
      $("#weatherDiv5").append(" " + '<i class="fas fa-wind fa-3x">');
    }

  })