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
  longitude: 18.668368,
   latitude:-34.053422
},
{
  locationTags: 'Harare',
  locations: 'Library  , Harare complex, Patha close , Khayelitsha',
  longitude: 18.6637507,
   latitude:-34.0577087
}, {
  locationTags: 'Harare',
  locations: 'VPUU Building  Harare Sportsfield, Bila Rd , Khayelitsha',
  longitude: 18.6691122,
   latitude:-34.0579279
},
{
  locationTags: 'Harare',
  locations: 'Feel Good Store Harare Sportsfield, Bila Rd , Khayelitsha',
  longitude: 18.668368,
   latitude:-34.053422
},{
locationTags: 'Site C',
  locations: 'Library , Site C complex, cnr Njongo & Solomon Tshuku ave, Khyelitsha',
  longitude: 18.6478817,
   latitude: -34.0153373
},{
  locationTags:'Site C',
  locations   : 'Youth Clinic , Site C complex,cnrNjongo & Solomon Tshuku ave, Khyelitsha',
  longitude: 18.6482309,
   latitude:-34.0134739
},
{
  locationTags:'Lentegeur',
  locations   : 'Lentegeur Civic ,Merrydale Ave , Lentegeur',
  longitude: 18.607194,
   latitude:-34.034331,
},
{
  locationTags:'Lentegeur',
  locations   : 'Lentegeur Swimming pool ,Merrydale Ave , Lentegeur',
  longitude: 18.6061766,
   latitude:34.0335538
},
{
  locationTags:'Lentegeur',
  locations   : 'Pole , Sunflower street , Lentegeur',
  longitude: 18.604938,
   latitude:-34.0346789
},{
  locationTags:'Cape Town',
  locations   : 'Cape town Civic centre',

  longitude: 18.4268048,
   latitude:-33.9209337
},
{
  locationTags:'Cape Town',
  locations   : 'Darling Street , CapeTown',
  longitude: 18.4233388,
   latitude:-33.9262819
},
{
  locationTags:'Durbanville',
  locations   : 'Queen Street , Durbanville',
  longitude: 18.6441301,
   latitude:-33.8304019
},
{
  locationTags:'Durbanville',
  locations   : 'Queen Street , Durbanville',
  longitude: 18.6441301,
   latitude:-33.8304019
},
{
  locationTags:'Goodwood',
  locations   : 'cnr Mcdonald & Dingle Rd , Goodwood',
  // cords    : {lat:-34.0503651, lng:18.6691079}
  longitude: 18.548569,
   latitude:33.9103939
},
{
  locationTags:'Goodwood',
  locations   : 'Richmond street , goodwood',
  // cords    : {lat:-34.0503651, lng:18.6691079}
  longitude: 18.5599535,
   latitude:-33.9006165
},
{
  locationTags:'Nyanga',
  locations   : 'Freedom Square, Nyanga',
  // cords    : {lat:-34.0503651, lng:18.6691079}
  longitude: 18.5846321,
   latitude:-33.99557
},





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
