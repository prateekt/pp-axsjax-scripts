//Header comment...

//Redirect to a sparser Google Maps
//window.location = "http://maps.google.com/maps?f=d&output=html&hl=en&saddr=&daddr="

//Prompt user for address
var axsMaps = {};
var directionReader = {};

axsMaps.axsObj = new AxsJAX();
//Thread.sleep(4000);
axsMaps.axsObj.speakTextViaNode("Please enter start address motherfucker");

axsMaps.init = function() {
    var currentURL = document.baseURI;
  if (currentURL === 'http://maps.google.com/') {
	alert("maps.google.com");
     axsMaps.redirect();
	 Thread.sleep(10000);
  }
 
  if (currentURL === ('http://maps.google.com/maps?f=d&output=html&hl=en&saddr=&daddr=')) {
     //axsMaps.getAddress();
	 axsMaps.axsObj.speakTextViaNode("Please enter start address");
	 alert("get Address ran successfully");
  }

  //else if () {
   //  theScript.src = baseURL + 'gmaps/axsEnableGoogleMaps.js';
  //}

	
}

axsMaps.redirect = function() {
	window.location = "http://maps.google.com/maps?f=d&output=html&hl=en&saddr=&daddr=";
	
	}

directionReader.init = function() {

}

axsMaps.init();
