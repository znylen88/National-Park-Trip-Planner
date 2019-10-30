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
  }).then(function (response) {
    console.log(response);
    // console.log(response2.data[0].latLong);
    for (var i = 0; i < response.data[i]; i++) {
      var latLong = response.data[i].latLong;
      var lat = latLong.slice(latLong.indexOf(':') + 1, latLong.indexOf(','));
      console.log(lat);
      var long = latLong.slice(latLong.indexOf(':', latLong.indexOf(':') + 1) + 1);
      console.log(long);
    }


    for (var i = 0; i < response.data.length; i++) {
      var containerDiv = $("<div class='s12 scrollsSpy'></div>");

      var cardDiv = $("<div class='card horizontal'></div>")
      $(cardDiv).attr("style", "display: flex; flex-direction: column;")

      var titleDiv = $("<div>")
      var cardTitle = $("<h6>").text(response.data[i].name);
      $(cardDiv).append(cardTitle);

      var cardImgDiv = $("<div class='card-image'></div>");
      var cardImg = $("<img>");
      $(cardImg).attr("src", response.data[i].images[0].url);
      $(cardImgDiv).attr("style", "display: contents; margin-left: auto; margin-right: auto; width: 50%;");
      $(cardImgDiv).append(cardImg);
      $(cardDiv).append(cardImgDiv);

      var cardStackedDiv = $("<div class='card-stacked'></div>");

      var cardContent = $("<div class='card-content'></div>");

      var parkInfo = $("<p>").text(response.data[i].description);
      $(cardContent).append(parkInfo);
      $(cardStackedDiv).append(cardContent);
      $(cardDiv).append(cardStackedDiv);

      var latLong = response.data[i].latLong;
      var lat = latLong.slice(latLong.indexOf(':') + 1, latLong.indexOf(','));
      var long = latLong.slice(latLong.indexOf(':', latLong.indexOf(':') + 1) + 1);

      var parkCode = response.data[i].parkCode;

      var cardAction = $("<div class='card-action'></div>");
      var cardBtn = $("<button>Select</button>");
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

    $(".selectBtn").on("click", function(e) {
      console.log("bruh");
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
      var nationlParkQueryURL2 = "https://developer.nps.gov/api/v1/events?parkCode=" + parkCode + "&api_key=fpuahTpdjjgnndV1T0yTSrzifFyZQevFQfcxDsUR"
      $.ajax({
        url: nationlParkQueryURL2,
        method: "GET"
      }).then(function (response3) {
        console.log(response3)
        for (var i = 0; i < 5; i++) {
          var containerDiv = $("<div class='s12 scrollsSpy'></div>");
    
          var cardDiv = $("<div class='card horizontal'></div>")
          $(cardDiv).attr("style", "padding: 15px; display: flex; flex-direction: column;")
    
          var titleDiv = $("<div>")
          var cardTitle = $("<h6>").text(response3.data[i].title);
          $(cardDiv).append(cardTitle);
    
    
          var cardStackedDiv = $("<div class='card-stacked'></div>");
    
          var cardContent = $("<div class='card-content'></div>");
    
          var parkInfo = $("<p>").html(response3.data[i].description);
          $(cardContent).append(parkInfo);
          $(cardStackedDiv).append(cardContent);
          $(cardDiv).append(cardStackedDiv);

          var parkInfo2 = $("<p>").text("Date: " + response3.data[i].recurrencedateend);
          $(cardContent).append(parkInfo2);
          $(cardStackedDiv).append(cardContent);
          $(cardDiv).append(cardStackedDiv);
    
          var cardAction = $("<div class='card-action'></div>");
          $(cardDiv).append(cardAction);
    
          $(containerDiv).append(cardDiv);
          $(".eventInfoHere").prepend(containerDiv);

          if (response3.total === "0") {
            var containerDiv = $("<div class='s12 scrollsSpy'></div>");
    
          var cardDiv = $("<div class='card horizontal'></div>")
          $(cardDiv).attr("style", "padding: 15px; display: flex; flex-direction: column;")
    
          var titleDiv = $("<div>")
          var cardTitle = $("<h6>").text("No Events!");
          $(cardDiv).append(cardTitle);
  
    
          var cardAction = $("<div class='card-action'></div>");
          $(cardDiv).append(cardAction);
    
          $(containerDiv).append(cardDiv);
          $(".eventInfoHere").prepend(containerDiv);
          }
    
        }
      })
    })
  })
})
