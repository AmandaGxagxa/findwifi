function findWifi(){
// initialize location
  var geocoder;
  var map;
  var address;
  var foundArray =[];
  var getLocationDis ={};
  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(33.9249, -18.4241);
    var mapOptions = {
      zoom: 15,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  //finding my own location function
  function findMyLocation(value)  {
       address = value;
      geocoder.geocode({
        'address': value
      }, function(results, status) {
         var currentPosition = results[0].geometry.location;
        if (status == 'OK') {
          map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
          });


          return calculateDistance(currentPosition.lat(), currentPosition.lng());
        } else {
          console.log("incorrect data");
        }
      });
    }

// location data
var wifiLocation = [{
  locationTags: 'Stock&Stocks',
  locations: 'Stock&Stocks complex, cnr Ntlazane &Ntlakhohlaza Rds , Khayelitsha',
  longitude: 18.6691079,
   latitude:-34.0503651
}, {
  locationTags: 'Harare',
  locations: 'Harare Sportsfield, Bila Rd , Khayelitsha',
  longitude: 18.507819,
   latitude:-34.0503651
},
{
  locationTags: 'Harare',
  locations: 'Library  , Harare complex, Patha close , Khayelitsha',
  longitude: 18.6691079,
   latitude:-34.0509851
}, {
  locationTags: 'Harare',
  locations: 'VPUU Building  Harare Sportsfield, Bila Rd , Khayelitsha',
  longitude: 18.6691079,
   latitude:-34.0503651
},
{
  locationTags: 'Harare',
  locations: 'Feel Good Store Harare Sportsfield, Bila Rd , Khayelitsha',
  longitude: 18.6691079,
   latitude:-34.0503651
},{
locationTags: 'Site C',
  locations: 'Library , Site C complex, cnr Njongo & Solomon Tshuku ave, Khyelitsha',
  longitude: 18.6691079,
   latitude:-34.0503651
},{
  locationTags:'Site C',
  locations   : 'Youth Clinic , Site C complex,cnrNjongo & Solomon Tshuku ave, Khyelitsha',
  // cords    : {lat:-34.0503651, lng:18.6691079}
  longitude: 18.6691079,
   latitude:-34.0503651
}
]

var nearLocations = function(value){
  foundArray = [];
  if (value!=='') {
     for (var i = 0; i < wifiLocation.length; i++) {
       if (value.includes(wifiLocation[i].locationTags)) {
         foundArray.push(wifiLocation[i].locations);
       }
     }
  }


return foundArray;
}



function calculateDistance(userLatitude, userLongitude){
  var locationDistance ={};
  for (let i = 0; i < wifiLocation.length; i++) {
var distance= geolib.getDistance(
 {latitude:userLatitude, longitude:userLongitude},
       {latitude:wifiLocation[i].latitude, longitude:wifiLocation[i].longitude}
   );

     if(locationDistance[wifiLocation[i].locations] === undefined && address.includes(wifiLocation[i].locationTags)){
        locationDistance[wifiLocation[i].locations]=distance /1000;
     }

    }
     getLocationDis = locationDistance;
    console.log(locationDistance)
   return locationDistance;
}

 function getLocationDistance(){
    return getLocationDis;
}








 // nearLocations data
  function getNearLocation(){
    return foundArray;
  }

  function codeAddress() {
  //var address = document.getElementById('address').value;
  var address = getNearLocation();

  for (var i = 0; i < address.length; i++) {
       console.log("All near location"+address[i]);
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
  findMyLocation,
  calculateDistance,
  getLocationDistance,
  nearLocations,
  codeAddress

}


}
