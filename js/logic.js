// initialize location

var geocoder;
var map;
var location;

function initialize() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(-34.397, 150.644);
  var mapOptions = {
    zoom: 8,
    center: latlng
  }
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

//finding my own location function
const findMyLocation = (findMyLocation) => {
  if (findMyLocation !== '' && findMyLocation !== undefined) {
    location = findMyLocation;
    geocoder.geocode({
      'address': findMyLocation
    }, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.marker({
          map: map,
          position: results[0].geometry.location
        });
      } else {
        console.log("incorrect data");
      }
    })
  }
}


// finding all location near my location

const nearLocations = (location) => {
  let locationTags = ['Stocks&Stocks', 'Harare', 'Site C', 'Lentegeur', 'parow'];
  if (location.includes(locationTags[2])) {
    console.log('found');
    return 'found';
  }
}

var wifiLocation = [{
    locationTags: 'Stocks&Stocks',
    location: 'Stock&Stocks complex, cnr Ntlazane &Ntlakhohlaza Rds , Khyelitsha'
  },

]
