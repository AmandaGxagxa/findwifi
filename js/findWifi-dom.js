var enteredAddress = document.querySelector('#address');
var myLacation  = document.querySelector('.findMyLocation');
var  displayMap = document.querySelector('#map');

  var Wifi = findWifi();

   
  window.addEventListener('load',function(){

    displayMap.innerHTML=  Wifi.initialize();

  });



