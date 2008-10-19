READING_ADDRESS = 1;
var axsgmap={};
var addressReader = {};
axsgmap.axsObj = null;
axsgmap.axsObj = new AxsJAX(true);

axsgmap.currentState = 0;
axsgmap.oldState = 0;
axsgmap.helpString =    'The following shortcut keys are available. ' +     'G, Return to Contents. ' +       'N, go to the next element. ' +    'P, go to the previous element. ' +    'R, to get the number of citations and links in the paragraph. '+    'T, to traverse the citations in the paragraph. '+    'Enter, open the current item or citation. ' +    'Slash, jump to search blank. ' +    'Escape, leave search blank. ' ;




addressReader.step = 0;
addressReader.currentLocation = 0;
addressReader.currentDist =0.0;

var all= document.getElementById("ddr_steps_0");
addressReader.maxSteps = all.getElementsByTagName("tr").length;

//var str="speak dude";
//	alert(str);
//	axsgmap.axsObj.speakTextViaNode(str);

// Key press event handler when the paragraphs are being read



function axsJb_keyboardHandler(evt)
{
	addressReader_keypress(evt);

}

function addressReader_keypress(evt)
{
	//var str="speak something";
	//axsgmap.axsObj.speakTextViaNode("Hi");
		//addressReader.readCurrentStep(2);
	if (evt.charCode == 110) 
	{ // n
		//addressReader.currentDist = -1;
		var str="speak something";
		//addressReader.readCurrentStep(2);
		addressReader.step++;
		alert("Step:"+addressReader.maxSteps + "Current:" + addressReader.step);

		/*if (addressReader.step < addressReader.maxSteps - 1) 
		{
			addressReader.step++;
			addressReader.readCurrentStep(addressReader.step);
		} 
		else if (addressReader.currentPara == addressReader.maxParas - 1) 
		{
			addressReader.step = 0;
			addressReader.readCurrentStep(addressReader.step);
		}*/
	}

     
}

addressReader.init = function() 
{
	addressReader.currentDist =0.0;
	addressReader.currentLocation = 0;
	var all= document.getElementById("ddr_steps_0");
	addressReader.maxSteps = all.getElementsByTagName("tr").length;
}


	addressReader.readCurrentStep = function(number) 
	{


		var currentDirection= document.getElementById("step_0_"+number);
		var currentDirectionRecord = currentDirection.getElementsByTagName("td");
		//alert(x[3].innerHTML);
		axsgmap.axsObj.speakTextViaNode("Direction"+(number+1)+currentDirectionRecord[1].innerHTML+"for"+currentDirectionRecord[3].innerHTML);
	};


axsgmap.init = function()
{
	document.addEventListener('keypress', axsJb_keyboardHandler, true);
}

axsgmap.init();
addressReader.init();
