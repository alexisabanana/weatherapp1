$(document).ready(function(){
    const keyy = config.METOFFCEKEY;
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position) {
let lat = position.coords.latitude;
let long = position.coords.longitude;
            $("#data").html("latitude: " + lat + "<br> longitude: " + long);
 $("#local").html(lat+','+long);      
     });
    }

    var api = "http://http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/JSON/3840?res=3hourly&key="+keyy;
   $.getJSON(api, function(data){


    });
});