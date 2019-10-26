$('.dropdown-trigger').dropdown();

$(document).ready(function () {
  $('.collapsible').collapsible();
});

$(document).ready(function () {
  $('.collapsible').collapsible();
});

// Open Weather API Call

// var APIKey = "80ff47912d3d33c0148bdb2398a13823";
// var parkLat = "33";
// var parkLong = "129";

// $.ajax({
//   url: "https://api.openweathermap.org/data/2.5/forecast?lat=" + parkLat + "&lon=" + parkLong + "&appid=" + APIKey,
//   method: "GET"
// })

//   .then(function (response2) {

//     console.log(response2);
//     var degreesFar = (response2.list[4].main.temp - 273.15) * 1.80 + 32;
//     var degreesFarRounded = Math.round(degreesFar * 10) / 10;

//     // Day 1 Forecast

//     $("#tempDiv1").text(degreesFarRounded + " °F");
//     $("#windSpeedDiv1").text(response2.list[4].wind.speed + " MPH");

//     if ((response2.list[4].weather[0].main) === "Clouds") {
//       $("#weatherDiv1").html(" " + '<i class="fas fa-cloud fa-3x">');
//     }
//     if ((response2.list[4].weather[0].main) === "Clear") {
//       $("#weatherDiv1").html(" " + '<i class="fas fa-sun fa-3x">');
//     }
//     if ((response2.list[4].weather[0].main) === "Rain") {
//       $("#weatherDiv1").html(" " + '<i class="fas fa-cloud-rain fa-3x">');
//     }
//     if ((response2.list[4].weather[0].main) === "Snow") {
//       $("#weatherDiv1").html(" " + '<i class="far fa-snowflake fa-3x">');
//     }
//     if ((response2.list[4].weather[0].main) === "Fog") {
//       $("#weatherDiv1").html(" " + '<i class="fas fa-smog fa-3x">');
//     }
//     if ((response2.list[4].weather[0].main) === "Mist") {
//       $("#weatherDiv1").html(" " + '<i class="fas fa-smog fa-3x">');
//     }
//     if ((response2.list[4].weather[0].main) === "Windy") {
//       $("#weatherDiv1").html(" " + '<i class="fas fa-wind fa-3x">');
//     }

//     // Day 2 Forecast

//     var degreesFar = (response2.list[12].main.temp - 273.15) * 1.80 + 32;
//     var degreesFarRounded = Math.round(degreesFar * 10) / 10;

//     $("#tempDiv2").text(degreesFarRounded + " °F");
//     $("#windSpeedDiv2").text(response2.list[12].wind.speed + " MPH");

//     if ((response2.list[12].weather[0].main) === "Clouds") {
//       $("#weatherDiv2").html(" " + '<i class="fas fa-cloud fa-3x">');
//     }
//     if ((response2.list[12].weather[0].main) === "Clear") {
//       $("#weatherDiv2").html(" " + '<i class="fas fa-sun fa-3x">');
//     }
//     if ((response2.list[12].weather[0].main) === "Rain") {
//       $("#weatherDiv2").html(" " + '<i class="fas fa-cloud-rain fa-3x">');
//     }
//     if ((response2.list[12].weather[0].main) === "Snow") {
//       $("#weatherDiv2").html(" " + '<i class="far fa-snowflake fa-3x">');
//     }
//     if ((response2.list[12].weather[0].main) === "Fog") {
//       $("#weatherDiv2").html(" " + '<i class="fas fa-smog fa-3x">');
//     }
//     if ((response2.list[12].weather[0].main) === "Mist") {
//       $("#weatherDiv2").html(" " + '<i class="fas fa-smog fa-3x">');
//     }
//     if ((response2.list[12].weather[0].main) === "Windy") {
//       $("#weatherDiv2").html(" " + '<i class="fas fa-wind fa-3x">');
//     }

//     // Day 3 Forecast

//     var degreesFar = (response2.list[20].main.temp - 273.15) * 1.80 + 32;
//     var degreesFarRounded = Math.round(degreesFar * 10) / 10;

//     $("#tempDiv3").text(degreesFarRounded + " °F");
//     $("#windSpeedDiv3").text(response2.list[20].wind.speed + " MPH");

//     if ((response2.list[20].weather[0].main) === "Clouds") {
//       $("#weatherDiv2").html(" " + '<i class="fas fa-cloud fa-3x">');
//     }
//     if ((response2.list[20].weather[0].main) === "Clear") {
//       $("#weatherDiv3").html(" " + '<i class="fas fa-sun fa-3x">');
//     }
//     if ((response2.list[20].weather[0].main) === "Rain") {
//       $("#weatherDiv3").html(" " + '<i class="fas fa-cloud-rain fa-3x">');
//     }
//     if ((response2.list[20].weather[0].main) === "Snow") {
//       $("#weatherDiv3").html(" " + '<i class="far fa-snowflake fa-3x">');
//     }
//     if ((response2.list[20].weather[0].main) === "Fog") {
//       $("#weatherDiv3").html(" " + '<i class="fas fa-smog fa-3x">');
//     }
//     if ((response2.list[20].weather[0].main) === "Mist") {
//       $("#weatherDiv3").html(" " + '<i class="fas fa-smog fa-3x">');
//     }
//     if ((response2.list[20].weather[0].main) === "Windy") {
//       $("#weatherDiv3").html(" " + '<i class="fas fa-wind fa-3x">');
//     }

//     // Day 4 Forecast

//     var degreesFar = (response2.list[28].main.temp - 273.15) * 1.80 + 32;
//     var degreesFarRounded = Math.round(degreesFar * 10) / 10;

//     $("#tempDiv4").text(degreesFarRounded + " °F");
//     $("#windSpeedDiv4").text(response2.list[28].wind.speed + " MPH");

//     if ((response2.list[28].weather[0].main) === "Clouds") {
//       $("#weatherDiv4").html(" " + '<i class="fas fa-cloud fa-3x">');
//     }
//     if ((response2.list[28].weather[0].main) === "Clear") {
//       $("#weatherDiv4").html(" " + '<i class="fas fa-sun fa-3x">');
//     }
//     if ((response2.list[28].weather[0].main) === "Rain") {
//       $("#weatherDiv4").html(" " + '<i class="fas fa-cloud-rain fa-3x">');
//     }
//     if ((response2.list[28].weather[0].main) === "Snow") {
//       $("#weatherDiv4").html(" " + '<i class="far fa-snowflake fa-3x">');
//     }
//     if ((response2.list[28].weather[0].main) === "Fog") {
//       $("#weatherDiv4").html(" " + '<i class="fas fa-smog fa-3x">');
//     }
//     if ((response2.list[28].weather[0].main) === "Mist") {
//       $("#weatherDiv4").html(" " + '<i class="fas fa-smog fa-3x">');
//     }
//     if ((response2.list[28].weather[0].main) === "Windy") {
//       $("#weatherDiv4").html(" " + '<i class="fas fa-wind fa-3x">');
//     }

//     // Day 5 Forecast

//     var degreesFar = (response2.list[36].main.temp - 273.15) * 1.80 + 32;
//     var degreesFarRounded = Math.round(degreesFar * 10) / 10;

//     $("#tempDiv5").text(degreesFarRounded + " °F");
//     $("#windSpeedDiv5").text(response2.list[12].wind.speed + " MPH");

//     if ((response2.list[36].weather[0].main) === "Clouds") {
//       $("#weatherDiv5").html(" " + '<i class="fas fa-cloud fa-3x">');
//     }
//     if ((response2.list[36].weather[0].main) === "Clear") {
//       $("#weatherDiv5").html(" " + '<i class="fas fa-sun fa-3x">');
//     }
//     if ((response2.list[36].weather[0].main) === "Rain") {
//       $("#weatherDiv5").html(" " + '<i class="fas fa-cloud-rain fa-3x">');
//     }
//     if ((response2.list[36].weather[0].main) === "Snow") {
//       $("#weatherDiv5").html(" " + '<i class="far fa-snowflake fa-3x">');
//     }
//     if ((response2.list[36].weather[0].main) === "Fog") {
//       $("#weatherDiv5").html(" " + '<i class="fas fa-smog fa-3x">');
//     }
//     if ((response2.list[36].weather[0].main) === "Mist") {
//       $("#weatherDiv5").html(" " + '<i class="fas fa-smog fa-3x">');
//     }
//     if ((response2.list[36].weather[0].main) === "Windy") {
//       $("#weatherDiv5").html(" " + '<i class="fas fa-wind fa-3x">');
//     }

//   })

$('.dropdown-trigger').dropdown();

$(document).ready(function () {
  $('.collapsible').collapsible();
});

$(document).ready(function () {
  $('.collapsible').collapsible();
});

$(document).ready(initApp)

function initApp() {

  console.log('Initializing app')
  $('select').not('.disabled').formSelect();
}

// National Park API Key = fpuahTpdjjgnndV1T0yTSrzifFyZQevFQfcxDsUR
// Dark Sky API Key = 4b7bc744718f602b04b475fb64a354f5
$(".stateDropdown").on("change", function (e) {
  console.log(this.value);


  var stateCode = this.value
  var nationlParkQueryURL = "https://developer.nps.gov/api/v1/parks?stateCode=" + stateCode + "&limit=5&api_key=fpuahTpdjjgnndV1T0yTSrzifFyZQevFQfcxDsUR";



  $.ajax({
    url: nationlParkQueryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    // console.log(response2.data[0].latLong);
    var latLong = response.data[0].latLong;
    var lat = latLong.slice(latLong.indexOf(':') + 1, latLong.indexOf(','));
    console.log(lat);
    var long = latLong.slice(latLong.indexOf(':', latLong.indexOf(':') + 1) + 1);
    console.log(long);
    console.log(response)




    var openWeatherQueryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&APPID=e2ebd3f5faa1edbbcedec73ed5986c0f";

    $.ajax({
      url: openWeatherQueryURL,
      method: "GET"
    }).then(function (response2) {

      console.log(response2);
      var degreesFar = (response2.list[4].main.temp - 273.15) * 1.80 + 32;
      var degreesFarRounded = Math.round(degreesFar * 10) / 10;

      // Day 1 Forecast

      $("#tempDiv1").text(degreesFarRounded + " °F");
      $("#windSpeedDiv1").text(response2.list[4].wind.speed + " MPH");

      if ((response2.list[4].weather[0].main) === "Clouds") {
        $("#weatherDiv1").html(" " + '<i class="fas fa-cloud fa-3x">');
      }
      if ((response2.list[4].weather[0].main) === "Clear") {
        $("#weatherDiv1").html(" " + '<i class="fas fa-sun fa-3x">');
      }
      if ((response2.list[4].weather[0].main) === "Rain") {
        $("#weatherDiv1").html(" " + '<i class="fas fa-cloud-rain fa-3x">');
      }
      if ((response2.list[4].weather[0].main) === "Snow") {
        $("#weatherDiv1").html(" " + '<i class="far fa-snowflake fa-3x">');
      }
      if ((response2.list[4].weather[0].main) === "Fog") {
        $("#weatherDiv1").html(" " + '<i class="fas fa-smog fa-3x">');
      }
      if ((response2.list[4].weather[0].main) === "Mist") {
        $("#weatherDiv1").html(" " + '<i class="fas fa-smog fa-3x">');
      }
      if ((response2.list[4].weather[0].main) === "Windy") {
        $("#weatherDiv1").html(" " + '<i class="fas fa-wind fa-3x">');
      }

      // Day 2 Forecast

      var degreesFar = (response2.list[12].main.temp - 273.15) * 1.80 + 32;
      var degreesFarRounded = Math.round(degreesFar * 10) / 10;

      $("#tempDiv2").text(degreesFarRounded + " °F");
      $("#windSpeedDiv2").text(response2.list[12].wind.speed + " MPH");

      if ((response2.list[12].weather[0].main) === "Clouds") {
        $("#weatherDiv2").html(" " + '<i class="fas fa-cloud fa-3x">');
      }
      if ((response2.list[12].weather[0].main) === "Clear") {
        $("#weatherDiv2").html(" " + '<i class="fas fa-sun fa-3x">');
      }
      if ((response2.list[12].weather[0].main) === "Rain") {
        $("#weatherDiv2").html(" " + '<i class="fas fa-cloud-rain fa-3x">');
      }
      if ((response2.list[12].weather[0].main) === "Snow") {
        $("#weatherDiv2").html(" " + '<i class="far fa-snowflake fa-3x">');
      }
      if ((response2.list[12].weather[0].main) === "Fog") {
        $("#weatherDiv2").html(" " + '<i class="fas fa-smog fa-3x">');
      }
      if ((response2.list[12].weather[0].main) === "Mist") {
        $("#weatherDiv2").html(" " + '<i class="fas fa-smog fa-3x">');
      }
      if ((response2.list[12].weather[0].main) === "Windy") {
        $("#weatherDiv2").html(" " + '<i class="fas fa-wind fa-3x">');
      }

      // Day 3 Forecast

      var degreesFar = (response2.list[20].main.temp - 273.15) * 1.80 + 32;
      var degreesFarRounded = Math.round(degreesFar * 10) / 10;

      $("#tempDiv3").text(degreesFarRounded + " °F");
      $("#windSpeedDiv3").text(response2.list[20].wind.speed + " MPH");

      if ((response2.list[20].weather[0].main) === "Clouds") {
        $("#weatherDiv2").html(" " + '<i class="fas fa-cloud fa-3x">');
      }
      if ((response2.list[20].weather[0].main) === "Clear") {
        $("#weatherDiv3").html(" " + '<i class="fas fa-sun fa-3x">');
      }
      if ((response2.list[20].weather[0].main) === "Rain") {
        $("#weatherDiv3").html(" " + '<i class="fas fa-cloud-rain fa-3x">');
      }
      if ((response2.list[20].weather[0].main) === "Snow") {
        $("#weatherDiv3").html(" " + '<i class="far fa-snowflake fa-3x">');
      }
      if ((response2.list[20].weather[0].main) === "Fog") {
        $("#weatherDiv3").html(" " + '<i class="fas fa-smog fa-3x">');
      }
      if ((response2.list[20].weather[0].main) === "Mist") {
        $("#weatherDiv3").html(" " + '<i class="fas fa-smog fa-3x">');
      }
      if ((response2.list[20].weather[0].main) === "Windy") {
        $("#weatherDiv3").html(" " + '<i class="fas fa-wind fa-3x">');
      }

      // Day 4 Forecast

      var degreesFar = (response2.list[28].main.temp - 273.15) * 1.80 + 32;
      var degreesFarRounded = Math.round(degreesFar * 10) / 10;

      $("#tempDiv4").text(degreesFarRounded + " °F");
      $("#windSpeedDiv4").text(response2.list[28].wind.speed + " MPH");

      if ((response2.list[28].weather[0].main) === "Clouds") {
        $("#weatherDiv4").html(" " + '<i class="fas fa-cloud fa-3x">');
      }
      if ((response2.list[28].weather[0].main) === "Clear") {
        $("#weatherDiv4").html(" " + '<i class="fas fa-sun fa-3x">');
      }
      if ((response2.list[28].weather[0].main) === "Rain") {
        $("#weatherDiv4").html(" " + '<i class="fas fa-cloud-rain fa-3x">');
      }
      if ((response2.list[28].weather[0].main) === "Snow") {
        $("#weatherDiv4").html(" " + '<i class="far fa-snowflake fa-3x">');
      }
      if ((response2.list[28].weather[0].main) === "Fog") {
        $("#weatherDiv4").html(" " + '<i class="fas fa-smog fa-3x">');
      }
      if ((response2.list[28].weather[0].main) === "Mist") {
        $("#weatherDiv4").html(" " + '<i class="fas fa-smog fa-3x">');
      }
      if ((response2.list[28].weather[0].main) === "Windy") {
        $("#weatherDiv4").html(" " + '<i class="fas fa-wind fa-3x">');
      }

      // Day 5 Forecast

      var degreesFar = (response2.list[36].main.temp - 273.15) * 1.80 + 32;
      var degreesFarRounded = Math.round(degreesFar * 10) / 10;

      $("#tempDiv5").text(degreesFarRounded + " °F");
      $("#windSpeedDiv5").text(response2.list[12].wind.speed + " MPH");

      if ((response2.list[36].weather[0].main) === "Clouds") {
        $("#weatherDiv5").html(" " + '<i class="fas fa-cloud fa-3x">');
      }
      if ((response2.list[36].weather[0].main) === "Clear") {
        $("#weatherDiv5").html(" " + '<i class="fas fa-sun fa-3x">');
      }
      if ((response2.list[36].weather[0].main) === "Rain") {
        $("#weatherDiv5").html(" " + '<i class="fas fa-cloud-rain fa-3x">');
      }
      if ((response2.list[36].weather[0].main) === "Snow") {
        $("#weatherDiv5").html(" " + '<i class="far fa-snowflake fa-3x">');
      }
      if ((response2.list[36].weather[0].main) === "Fog") {
        $("#weatherDiv5").html(" " + '<i class="fas fa-smog fa-3x">');
      }
      if ((response2.list[36].weather[0].main) === "Mist") {
        $("#weatherDiv5").html(" " + '<i class="fas fa-smog fa-3x">');
      }
      if ((response2.list[36].weather[0].main) === "Windy") {
        $("#weatherDiv5").html(" " + '<i class="fas fa-wind fa-3x">');
      }

    })
  })
})