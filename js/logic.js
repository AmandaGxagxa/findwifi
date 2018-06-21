function findWifi(){

// initialize location
  var geocoder;
  var map;
  var location;
  var foundArray =[];

  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(33.9249, -18.4241);
    var mapOptions = {
      zoom: 8,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  //finding my own location function
  function findMyLocation()  {
     var address = document.getElementById('address').value;
    console.log(address);
     location = address;
      geocoder.geocode({
        'address': address
      }, function(results, status) {
        if (status == 'OK') {
          map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
          });
        } else {
          console.log("incorrect data");
        }
      });
    }
  
// location data
  var wifiLocation = [{
        locationTags: 'Stock&Stocks',
        location: 'Stock&Stocks complex, cnr Ntlazane &Ntlakhohlaza Rds , Khyelitsha'
      }, {
        locationTags: 'Harare',
        location: 'Harare Sportsfield, Bila Rd , Khylelitsha'
      },
      {
        locationTags: 'Harare',
        location: 'Harare Sportsfield, Bila Rd , Khylelitsha'
      }, {
        locationTags: 'Harare',
        location: 'VPUU Building  Harare Sportsfield, Bila Rd , Khylelitsha'
      }
      ]
  // finding all location near my location
  const nearLocations = () => {
    for (var i = 0; i < wifiLocation.length; i++) {
      if (location.includes(wifiLocation[i].locationTags)) {
        foundArray.push(wifiLocation[i].location);
      }
    }
    return foundArray;
  }
 // nearLocations data
  function getNearLocation(){
    return foundArray;
  }

  function codeAddress() {
  //var address = document.getElementById('address').value;
  var address = getNearLocation();
  for (var i = 0; i < address.length; i++) {
    geocoder.geocode( { 'address': address[i]}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
  }

return{
  initialize,
  findMyLocation

}


}
