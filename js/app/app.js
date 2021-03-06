// Since we will be making use of 3rd party functions (eg. navigator.geolocation.getCurrentPosition) which are not native javascript functions we will need
// to add this function to the list of native javascript functions to allow javascript identify and execute it each time its called.
// This is done by using the addEventListener() function.
//
console.log("loc");
var map;
  function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        }
document.addEventListener("deviceready", onDeviceReady, false);


//We decide to create a function to handle the 3rd party functions (eg. navigator.geolocation.getCurrentPosition)
// which we earlier added to the native functions of the javascript
function onDeviceReady() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

// onSuccess Geolocation
//

function onSuccess(position) {

    var element = document.getElementById('geolocation');
    // element.innerHTML = 'Latitude: ' + position.coords.latitude  + '<br />' +
    //     'Longitude: '          + position.coords.longitude             + '<br />' +
    //     'Altitude: '           + position.coords.altitude              + '<br />' +
    //     'Accuracy: '           + position.coords.accuracy              + '<br />' +
    //     'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
    //     'Heading: '            + position.coords.heading               + '<br />' +
    //     'Speed: '              + position.coords.speed                 + '<br />' +
    //     'Timestamp: '          + position.timestamp          + '<br />';

var lat = position.coords.latitude;
var long = position.coords.longitude;
var geolocation = {lat: lat, lng: long};

var marker = new google.maps.Marker({
          position: geolocation,
          map: map
        });
 map.setCenter(geolocation);
}

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}
