var map, infoWindow;
function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        }


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }


function button(){
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

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
