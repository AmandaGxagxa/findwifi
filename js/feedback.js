var inputName = document.querySelector('.inputName');
var inputLoc = document.querySelector('.inputLoc')
var inputMsg =document.querySelector('.inputMsg');
var btnSubmit =document.querySelector('.btnSubmit');
var messageTemplate = document.querySelector('.messageTemplate').innerHTML;
var displayPop = document.querySelector('.displayPop');

var compilerMessage = Handlebars.compile(messageTemplate);

btnSubmit.addEventListener('click', displayThankYou)

function displayThankYou(){
   var name = inputName.value;
   var location = inputLoc.value;
   var message = inputMsg.value;

   if(name === ''){
      inputName.placeholder = "Please enter name";
   }

   if(location === ''){
      inputLoc.placeholder = "Can you please tell us the location";
   }

   if(message === ''){
      inputMsg.placeholder = "Please provide message"
   }

   else{
      var message = {
         message : "Thank you for your feedback " + name +"!"
      }
      var compiled = compilerMessage(message);
      displayPop.innerHTML = compiled;
   }

}

function createBtn(){
   var btn = createElement('button');

}
