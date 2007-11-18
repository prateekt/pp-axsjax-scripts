//AxsJAX script for Jawbreaker game at:
//http://www.minijuegosgratis.com/juegos/jawbreaker/jawbreaker.htm

// create namespace
var axsReader = {};

var axsJb_row = 0;
var axsJb_col = 0;
var axsJb_MAXROW = 11;
var axsJb_MAXCOL = 10;
var axsJb_axsJaxObj = new AxsJAX();

axsReader.tagSelectorTopDivId = null;
axsReader.feedResultsArray = null;
axsReader.feedBundlesArray = null;
axsReader.axsJAXObj = null;
axsReader.RESULTS_LOADED_STRING = 'Results loaded.';
axsReader.NO_RESULTS_STRING = 'Your search did not match any feeds. ' +
    'Please make sure all words are spelled correctly, ' +
    'or try different keywords, or try more general keywords. ';

/*
 * Dictionary mapping  image names to color names
 */
function axsJb_keyboardHandler(evt){
  axsJb_axsJaxObj.speakThroughPixel("Hello World");
}

/**
 * Initializes the scripts for Google Reader
 */
axsReader.init = function(){
  axsReader.feedResultsArray = new Array();
  axsReader.feedBundlesArray = new Array();
  axsReader.axsJAXObj = new AxsJAX();
 
   window.addEventListener('DOMNodeInserted', axsReader.domInsertionHandler, true);
  window.addEventListener('keypress', axsReader.extraKeyboardNavHandler, true);
  window.addEventListener('focus', axsReader.focusHandler, true);
  window.addEventListener('blur', axsReader.blurHandler, true);
};

axsReader.domInsertionHandler = function(event){
  if (event.target.firstChild){
    axsReader.inputFocused = false; //There is no blur event when the
                                    //search results get loaded
    axsReader.findFeedResults();
    if (axsReader.feedResultsArray.length > 0){
      axsReader.axsJAXObj.speakText(axsReader.RESULTS_LOADED_STRING);
    } else {
      axsReader.axsJAXObj.speakText(axsReader.NO_RESULTS_STRING);
    }
  }

};


axsReader.findFeedResults = function(){
  axsReader.feedResultsArray = new Array();
    var inputArray = event.target.getElementsByTagName('p');
  for (var i = 0, result; result = divArray[i]; i++) {
    if (result.className == 'row'){
      axsReader.feedResultsArray.push(result);

    }
  }
  axsReader.currentFeedResult = -1;
};

axsReader.axsJAXObj.assignId(event.target);
    axsReader.tagSelectorTopDivId = event.target.id;
    //Must be done as a timeout as the childNodes do not exist at this point
    window.setTimeout(axsReader.announceSelectedTag,100);

/**
 * Finds the currently selected tag and reads it
 */
axsReader.announceSelectedTag = function(){
  var topDiv = document.getElementById(axsReader.tagSelectorTopDivId);
  var selectedTag = axsReader.findSelectedTag(topDiv);
  axsReader.axsJAXObj.speakText(selectedTag.textContent);
};


axsReader.findSelectedTag = function(tagSelectorTopDiv){
  var allTagsArray = tagSelectorTopDiv.getElementsByTagName('p');
  for (var i=0; i < allTagsArray.length; i++){
    if (allTagsArray[i].className == 'selected'){
      return allTagsArray[i];
    }
  }
  return null;
};

document.addEventListener('keypress', axsJb_keyboardHandler, true);
axsReader.init();