var enteredAddress = document.querySelector('#address');
var myLocationBtn  = document.querySelector('.findMyLocation');
var  displayMap = document.querySelector('#map');

  var wifi = findWifi();
  // import "./js/logic.js";
   
  window.addEventListener('load',function(){
    
  //  displayMap.innerHTML= initialize();
     
  });

  myLocationBtn.addEventListener('click',function(){
    let getAddress =enteredAddress.value;
    wifi.findMyLocation(getAddress);
  });

  // <script type="text/javascript" src="./js/logic.js" > </script>
