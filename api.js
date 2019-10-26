$('.dropdown-trigger').dropdown();

$(document).ready(function(){
    $('.collapsible').collapsible();
  });

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });

  $(document).ready(initApp)

function initApp() {
    
    console.log('Initializing app')
    $('select').not('.disabled').formSelect();
}

// National Park API Key = fpuahTpdjjgnndV1T0yTSrzifFyZQevFQfcxDsUR
// Dark Sky API Key = 4b7bc744718f602b04b475fb64a354f5
$(".stateDropdown").on("change", function(e) {
console.log(this.value);


    var stateCode = this.value
    var nationlParkQueryURL = "https://developer.nps.gov/api/v1/parks?stateCode=" + stateCode + "&limit=5&api_key=fpuahTpdjjgnndV1T0yTSrzifFyZQevFQfcxDsUR";



    $.ajax({
        url: nationlParkQueryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response);
        // console.log(response.data[0].latLong);
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
        }).then(function (response) {

        })
    })
})