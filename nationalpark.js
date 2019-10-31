// $(document).ready(function(){
//   $('.scrollspy').scrollSpy();
// });

$('.dropdown-trigger').dropdown();

$(document).ready(function () {
  $('.collapsible').collapsible();
});

$(document).ready(function () {
  $('.collapsible').collapsible();
});

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
  var nationlParkQueryURL = "https://developer.nps.gov/api/v1/parks?q=national%20park&stateCode=" + stateCode + "&fields=images&api_key=fpuahTpdjjgnndV1T0yTSrzifFyZQevFQfcxDsUR";



  $.ajax({
    url: nationlParkQueryURL,
    method: "GET"
  }).then(function (states) {
    console.log(states);
    // console.log(weatherData.data[0].latLong);
    for (var i = 0; i < states.data[i]; i++) {
      var latLong = states.data[i].latLong;
      var lat = latLong.slice(latLong.indexOf(':') + 1, latLong.indexOf(','));
      console.log(lat);
      var long = latLong.slice(latLong.indexOf(':', latLong.indexOf(':') + 1) + 1);
      console.log(long);
    }


    for (var i = 0; i < states.data.length; i++) {
      var containerDiv = $("<div class='s12 scrollsSpy'></div>");

      var cardDiv = $("<div class='card horizontal'></div>")
      $(cardDiv).attr("style", "display: flex; flex-direction: column;")

      var titleDiv = $("<div>")
      var cardTitle = $("<h6>").text(states.data[i].name);
      $(cardDiv).append(cardTitle);

      var cardImgDiv = $("<div class='card-image'></div>");
      var cardImg = $("<img>");
      $(cardImg).attr("src", states.data[i].images[0].url);
      $(cardImgDiv).attr("style", "display: contents; margin-left: auto; margin-right: auto; width: 50%;");
      $(cardImgDiv).append(cardImg);
      $(cardDiv).append(cardImgDiv);

      var cardStackedDiv = $("<div class='card-stacked'></div>");

      var cardContent = $("<div class='card-content'></div>");

      var parkInfo = $("<p>").text(states.data[i].description);
      $(cardContent).append(parkInfo);
      $(cardStackedDiv).append(cardContent);
      $(cardDiv).append(cardStackedDiv);

      var latLong = states.data[i].latLong;
      var lat = latLong.slice(latLong.indexOf(':') + 1, latLong.indexOf(','));
      var long = latLong.slice(latLong.indexOf(':', latLong.indexOf(':') + 1) + 1);

      var parkCode = states.data[i].parkCode;

      var cardAction = $("<div class='card-action'></div>");
      var cardBtn = $("<button>Select</button>");
      var iEl = $("<i class='material-icons right'>cloud_queue date_range</i>");
      $(cardBtn).append(iEl)
      $(cardBtn).attr("class", "selectBtn btn waves-effect waves-light");
      $(cardBtn).attr("lat", lat);
      $(cardBtn).attr("long", long);
      $(cardBtn).attr("style", "width: 50%;");
      $(cardBtn).attr("parkCode", parkCode);
      $(cardAction).append(cardBtn);
      $(cardDiv).append(cardAction);

      $(containerDiv).append(cardDiv);
      $(".parkInfoHere").prepend(containerDiv);

    }

    $(".selectBtn").on("click", function (e) {

      var openWeatherQueryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&APPID=e2ebd3f5faa1edbbcedec73ed5986c0f";

      $.ajax({
        url: openWeatherQueryURL,
        method: "GET"
      }).then(function (weatherData) {

        console.log(weatherData);

        // Day 1 Forecast

        for (var i = 0; i < weatherData.list.length - 32; i++) {
          var degreesFar = (weatherData.list[i].main.temp - 273.15) * 1.80 + 32;
          var degreesFarRounded = Math.round(degreesFar * 10) / 10;

          var timeSlice = weatherData.list[i].dt_txt.slice(11);

          // console.log(weatherData.list[i].dt_txt);
          // console.log(degreesFarRounded);
          // console.log(weatherData.list[i].weather[0].main);
          // console.log(weatherData.list[i].wind.speed);

          if (timeSlice === "18:00:00") {

            $("#tempDiv1").text(degreesFarRounded + " °F");
            $("#windSpeedDiv1").text(weatherData.list[i].wind.speed + " MPH");

            if ((weatherData.list[i].weather[0].main) === "Clouds") {
              $("#weatherDiv1").html(" " + '<i class="fas fa-cloud fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Clear") {
              $("#weatherDiv1").html(" " + '<i class="fas fa-sun fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Rain") {
              $("#weatherDiv1").html(" " + '<i class="fas fa-cloud-rain fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Snow") {
              $("#weatherDiv1").html(" " + '<i class="far fa-snowflake fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Fog") {
              $("#weatherDiv1").html(" " + '<i class="fas fa-smog fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Mist") {
              $("#weatherDiv1").html(" " + '<i class="fas fa-smog fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Windy") {
              $("#weatherDiv1").html(" " + '<i class="fas fa-wind fa-3x">');
            }
          }
        }

        // Day 2 Forecast

        for (var i = 8; i < weatherData.list.length - 24; i++) {
          var degreesFar = (weatherData.list[i].main.temp - 273.15) * 1.80 + 32;
          var degreesFarRounded = Math.round(degreesFar * 10) / 10;

          var timeSlice = weatherData.list[i].dt_txt.slice(11);

          // console.log(weatherData.list[i].dt_txt);
          // console.log(degreesFarRounded);
          // console.log(weatherData.list[i].weather[0].main);
          // console.log(weatherData.list[i].wind.speed);

          if (timeSlice === "18:00:00") {

            $("#tempDiv2").text(degreesFarRounded + " °F");
            $("#windSpeedDiv2").text(weatherData.list[i].wind.speed + " MPH");

            if ((weatherData.list[i].weather[0].main) === "Clouds") {
              $("#weatherDiv2").html(" " + '<i class="fas fa-cloud fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Clear") {
              $("#weatherDiv2").html(" " + '<i class="fas fa-sun fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Rain") {
              $("#weatherDiv2").html(" " + '<i class="fas fa-cloud-rain fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Snow") {
              $("#weatherDiv2").html(" " + '<i class="far fa-snowflake fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Fog") {
              $("#weatherDiv2").html(" " + '<i class="fas fa-smog fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Mist") {
              $("#weatherDiv2").html(" " + '<i class="fas fa-smog fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Windy") {
              $("#weatherDiv2").html(" " + '<i class="fas fa-wind fa-3x">');
            }
          }
        }

        // Day 3 Forecast

        for (var i = 16; i < weatherData.list.length - 16; i++) {
          var degreesFar = (weatherData.list[i].main.temp - 273.15) * 1.80 + 32;
          var degreesFarRounded = Math.round(degreesFar * 10) / 10;

          var timeSlice = weatherData.list[i].dt_txt.slice(11);

          // console.log(weatherData.list[i].dt_txt);
          // console.log(degreesFarRounded);
          // console.log(weatherData.list[i].weather[0].main);
          // console.log(weatherData.list[i].wind.speed);

          if (timeSlice === "18:00:00") {

            $("#tempDiv3").text(degreesFarRounded + " °F");
            $("#windSpeedDiv3").text(weatherData.list[i].wind.speed + " MPH");

            if ((weatherData.list[i].weather[0].main) === "Clouds") {
              $("#weatherDiv3").html(" " + '<i class="fas fa-cloud fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Clear") {
              $("#weatherDiv3").html(" " + '<i class="fas fa-sun fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Rain") {
              $("#weatherDiv3").html(" " + '<i class="fas fa-cloud-rain fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Snow") {
              $("#weatherDiv3").html(" " + '<i class="far fa-snowflake fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Fog") {
              $("#weatherDiv3").html(" " + '<i class="fas fa-smog fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Mist") {
              $("#weatherDiv3").html(" " + '<i class="fas fa-smog fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Windy") {
              $("#weatherDiv3").html(" " + '<i class="fas fa-wind fa-3x">');
            }
          }
        }

        // Day 4 Forecast

        for (var i = 24; i < weatherData.list.length - 8; i++) {
          var degreesFar = (weatherData.list[i].main.temp - 273.15) * 1.80 + 32;
          var degreesFarRounded = Math.round(degreesFar * 10) / 10;

          var timeSlice = weatherData.list[i].dt_txt.slice(11);

          // console.log(weatherData.list[i].dt_txt);
          // console.log(degreesFarRounded);
          // console.log(weatherData.list[i].weather[0].main);
          // console.log(weatherData.list[i].wind.speed);

          if (timeSlice === "18:00:00") {

            $("#tempDiv4").text(degreesFarRounded + " °F");
            $("#windSpeedDiv4").text(weatherData.list[i].wind.speed + " MPH");

            if ((weatherData.list[i].weather[0].main) === "Clouds") {
              $("#weatherDiv4").html(" " + '<i class="fas fa-cloud fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Clear") {
              $("#weatherDiv4").html(" " + '<i class="fas fa-sun fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Rain") {
              $("#weatherDiv4").html(" " + '<i class="fas fa-cloud-rain fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Snow") {
              $("#weatherDiv4").html(" " + '<i class="far fa-snowflake fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Fog") {
              $("#weatherDiv4").html(" " + '<i class="fas fa-smog fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Mist") {
              $("#weatherDiv4").html(" " + '<i class="fas fa-smog fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Windy") {
              $("#weatherDiv4").html(" " + '<i class="fas fa-wind fa-3x">');
            }
          }
        }

        // Day 5 Forecast

        for (var i = 32; i < weatherData.list.length; i++) {
          var degreesFar = (weatherData.list[i].main.temp - 273.15) * 1.80 + 32;
          var degreesFarRounded = Math.round(degreesFar * 10) / 10;

          var timeSlice = weatherData.list[i].dt_txt.slice(11);

          // console.log(weatherData.list[i].dt_txt);
          // console.log(degreesFarRounded);
          // console.log(weatherData.list[i].weather[0].main);
          // console.log(weatherData.list[i].wind.speed);

          if (timeSlice === "18:00:00") {

            $("#tempDiv5").text(degreesFarRounded + " °F");
            $("#windSpeedDiv5").text(weatherData.list[i].wind.speed + " MPH");

            if ((weatherData.list[i].weather[0].main) === "Clouds") {
              $("#weatherDiv5").html(" " + '<i class="fas fa-cloud fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Clear") {
              $("#weatherDiv5").html(" " + '<i class="fas fa-sun fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Rain") {
              $("#weatherDiv5").html(" " + '<i class="fas fa-cloud-rain fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Snow") {
              $("#weatherDiv5").html(" " + '<i class="far fa-snowflake fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Fog") {
              $("#weatherDiv5").html(" " + '<i class="fas fa-smog fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Mist") {
              $("#weatherDiv5").html(" " + '<i class="fas fa-smog fa-3x">');
            }
            if ((weatherData.list[i].weather[0].main) === "Windy") {
              $("#weatherDiv5").html(" " + '<i class="fas fa-wind fa-3x">');
            }
          }
        }
      })

      var nationlParkQueryURL2 = "https://developer.nps.gov/api/v1/events?parkCode=" + parkCode + "&api_key=fpuahTpdjjgnndV1T0yTSrzifFyZQevFQfcxDsUR"
      $.ajax({
        url: nationlParkQueryURL2,
        method: "GET"
      }).then(function (events) {
        console.log(events)

        if (events.total === "0") {

          var containerDiv = $("<div class='s12 scrollsSpy'></div>");

          var cardDiv = $("<div class='card horizontal'></div>")
          $(cardDiv).attr("style", "padding: 15px; display: flex; flex-direction: column;")

          var noEventsIcon = $("<i class='large material-icons right'>report_problem</i>");
          var titleDiv = $("<div>")
          var cardTitle = $("<h6>").text("No Events!");
          $(cardDiv).append(cardTitle);
          $(cardDiv).append(noEventsIcon);
          $(noEventsIcon).attr("style", "contents; display: flex; flex-direction: column; margin-left: auto; margin-right: auto;");

          var cardAction = $("<div class='card-action'></div>");
          $(cardDiv).append(cardAction);

          $(containerDiv).append(cardDiv);
          $(".eventInfoHere").prepend(containerDiv);
          return
        }

        for (var i = 0; i < 5; i++) {
          var containerDiv = $("<div class='s12 scrollsSpy'></div>");

          var cardDiv = $("<div class='card horizontal'></div>")
          $(cardDiv).attr("style", "padding: 15px; display: flex; flex-direction: column;")

          var titleDiv = $("<div>")
          var cardTitle = $("<h6>").text(events.data[i].title);
          $(cardDiv).append(cardTitle);


          var cardStackedDiv = $("<div class='card-stacked'></div>");

          var cardContent = $("<div class='card-content'></div>");

          var parkInfo = $("<p>").html(events.data[i].description);
          $(cardContent).append(parkInfo);
          $(cardStackedDiv).append(cardContent);
          $(cardDiv).append(cardStackedDiv);

          var parkInfo2 = $("<p>").text("Date: " + events.data[i].recurrencedateend);
          $(cardContent).append(parkInfo2);
          $(cardStackedDiv).append(cardContent);
          $(cardDiv).append(cardStackedDiv);

          var cardAction = $("<div class='card-action'></div>");
          $(cardDiv).append(cardAction);

          $(containerDiv).append(cardDiv);
          $(".eventInfoHere").prepend(containerDiv);



        }
      })
    })
  })
})
