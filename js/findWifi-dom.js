var enteredAddress = document.querySelector('.address');
var myLocationbtn  = document.querySelector('.findMyLocationBtn');
var  displayMap = document.querySelector('#map');
var viewWithOutMap = document.querySelector('.no-map');
var viewMapBtn = document.querySelector('.with-map');

var nearestPointElem = document.querySelector('.nearestPoints');
var nearestPoints;
var templateCompiler;

if (nearestPointElem) {
   nearestPoints = nearestPointElem.innerHTML;
   templateCompiler = Handlebars.compile(nearestPoints);
}

var displaydata = document.querySelector('.tabledisplay');

  var wifi = findWifi();
  var address;
  // var loctionfound ={};

   function addLocation(){
      address = enteredAddress.value;
      if(address !==''){
        wifi.findMyLocation(address);
      let check=  wifi.nearLocations(address);
    console.log(check);
      console.log(wifi.codeAddress());
      }
   }


   function displaywifi(){
      console.log(address);
    let loctionfound = wifi.getLocationDistance();
    console.log(loctionfound);
    if (templateCompiler){
      displaydata.innerHTML=templateCompiler({
        loctionfound:loctionfound
      });
   }

   }
 function showMapWifi(){
  let check =wifi.codeAddress();
  console.log(check);
  console.log(wifi.codeAddress());
}

if (viewMapBtn) {
   viewMapBtn.addEventListener('click',showMapWifi);
}



      if (myLocationbtn){
            myLocationbtn.addEventListener('click',addLocation);
      }

  if (viewWithOutMap){
   viewWithOutMap.addEventListener('click',displaywifi);
 }
