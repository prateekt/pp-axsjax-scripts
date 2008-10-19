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



var directionsTableNode = document.getElementById("ddr_steps_0");
var directionsSteps = directionsTableNode.getElementsByTagName("tr");
addressReader.maxSteps = directionsSteps.length;

//var str="speak dude";
//	alert(str);
//	axsgmap.axsObj.speakTextViaNode(str);

// Key press event handler when the paragraphs are being read



function axsJb_keyboardHandler(evt)
{
	addressReaderKeypress(evt);

}

function addressReaderKeypress(evt)
{
	if (evt.charCode == 110 || evt.keyCode == 39) 
	{ 
		if (addressReader.step < addressReader.maxSteps) 
		{
			addressReader.step++;
			addressReader.readCurrentStep(addressReader.step-1);

		} 
		else if (addressReader.step > addressReader.maxSteps - 1) 
		{
			addressReader.step = 1;
			addressReader.readCurrentStep(addressReader.step-1);
		}
	}

	else if (evt.charCode == 112 || evt.keyCode == 37) 
	{ 
		if (addressReader.step > 0) 
		{
			addressReader.step--;
			addressReader.readCurrentStep(addressReader.step);
		} 
		else if (addressReader.step == addressReader.maxSteps) 
		{
			addressReader.step = 1;
			addressReader.readCurrentStep(addressReader.step);
		}
	}
	else if (evt.charCode == 65) 
	{
		axsgmap.axsObj.speakTextViaNode("Auto mode Activated");
		for(addressReader.step;addressReader.step<addressReader.maxSteps;addressReader.step++;)
			addressReader.readCurrentStep(addressReader.step-1);
	}
	else
	{
		alert("key code:" + evt.keyCode + "char code" + evt.CharCode);
	}

}

addressReader.init = function() 
{
	addressReader.currentDist =0.0;
	addressReader.currentLocation = 0;
	var all= document.getElementById("ddr_steps_0");
	addressReader.maxSteps = all.getElementsByTagName("tr").length;
}


addressReader.readCurrentStep = function(i) 
{


	stepElement = directionsSteps[i].getElementsByTagName("td");
	stepNum = stepElement[0].firstChild.nodeValue;
	stepText = "Step "+ stepNum + "    ";
	stepDesc = stepElement[1];
	for(j=0;j<stepDesc.childNodes.length;j++)//code to append only text node data to stepText
	{
		if(stepDesc.childNodes[j].nodeType != 3)
		{
			for(k=0;k<stepDesc.childNodes[j].childNodes.length;k++)
			{
				if(stepDesc.childNodes[j].childNodes[k].nodeType != 3)
				{
					stepText += stepDesc.childNodes[j].childNodes[k].innerHTML;
				}
				else
				{
					stepText += stepDesc.childNodes[j].childNodes[k].nodeValue;
				}
			}
		}
		else
		{
			stepText += stepDesc.childNodes[j].nodeValue;
		}
	}
	stepDistance = stepElement[3].firstChild.firstChild.nodeValue;
		stepText += ". The distance for the step is " + stepDistance;
	if(addressReader.step == addressReader.maxSteps)
		stepText += ". You have reached your destination.";
	axsgmap.axsObj.speakTextViaNode(stepText);

};


axsgmap.init = function()
{
	document.addEventListener('keypress', axsJb_keyboardHandler, true);
}

axsgmap.init();
addressReader.init();
