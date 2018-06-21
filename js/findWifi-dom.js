var enteredAddress = document.querySelector('.address');
var myLocationbtn  = document.querySelector('.findMyLocationBtn');
var  displayMap = document.querySelector('#map');
var viewWithOutMap = document.querySelector('.no-map');
var nearestPoints = document.querySelector('.nearestPoints').innerHTML;
var templateCompiler = Handlebars.compile(nearestPoints);
var displaydata = document.querySelector('.tabledisplay');

  var wifi = findWifi();
   
  window.addEventListener('load',function(){
    let address = enteredAddress.value;
    console.log(address)
  console.log("here")
  
  });
  
   function addLocation(){
    displaydata.innerHTML ='';
   let address = enteredAddress.value;
   console.log(address)
   if(address !==''){
     wifi.findMyLocation(address);
   }
   }
   
   
   function displaywifi(){
    
    let loctionfound = wifi.calculateDistance();
    
    displaydata.innerHTML=templateCompiler({
      loctionfound:loctionfound
    });
   }

  myLocationbtn.addEventListener('click',addLocation);
  viewWithOutMap.addEventListener('click',displaywifi);


