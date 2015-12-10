const HD_CAMERA = 2742568;
const MACBOOK = 2081286;
const WIN_LAPTOP = 2729663;
const IPAD2 = 2456286;
const IPAD_MINI = 2736848;
const WIN_SURFACE = 2736849;

//Converts the response from the web request into an availability object with the
//number of items in each availability status as properties
//Inputs: Response from web request (String)
//Output: Availability object (object)
function getResponse(response, id){
  response = response.replace(/\s+/g,' '); //replaces excess spaces with just one
  var openParens = 0;
  var closeParens = 0;
  var huntCount = 0;
  var regExpHunt = /\[hunt\]/gi; //parses out "[HUNT]"
  var allHunts = []; //all devices that have "HUNT" as an available location
  var availability = {techlend:0, techhold:0, repair:0, intransit:0, checkedout:0, total:0, deviceID: id};

  //Counts the number of "[HUNT]"s in the string provided
  while(true){
    var match = regExpHunt.exec(response);
    if(match != null){
      huntCount++;
    } else {
      break;
    }
  }

  var start = response.indexOf("[HUNT]"); //where to start (next) match

  //Seperates the sections that have "HUNT" as a location
  for(i = 0; i < huntCount; i++){
    var huntSection = "";
    for(j = start; j <= response.length; j++){
      var currentChar = response.charAt(j);
        if(currentChar === '('){
          openParens++;
        }
        if(currentChar === ')'){
          closeParens++;
          if(openParens === closeParens){
            break;
          }
        }
        huntSection += currentChar;
    }
    response = response.replace("[HUNT]",'');
    start = response.indexOf("[HUNT]");
    allHunts.push(huntSection);
  }

  return getAvailability(allHunts,availability);
}


//Parses the number of items in each availability status from the "HUNT" sections of the
//item returned in the web request response
//Inputs: array of "HUNT" sections, availability object initialized in getResponse
//Outputs: availability object with totals filled in for each status
function getAvailability(sections, availability){
    var regex = /\[\w+\] => \d+/gi;
    sections.forEach(function(deviceAvail){
	//console.log(deviceAvail);
        var regexOutput = regex.exec(deviceAvail);
        while(regexOutput !== null){
            var availArray = regexOutput.toString().split(" ");

            //availArray[0] is the availability status
            //availArray[1] is the symbol =>
            //availArray[2] is the number of devices in that state
            switch(availArray[0]){
                case "[TECHLEND]":
                    availability.techlend += parseInt(availArray[2]);
                    availability.total += availability.techlend;
                    break;
                case "[TECHHOLD]":
                    availability.techhold += parseInt(availArray[2]);
                    availability.total += availability.techhold;
                    break;
                case "[REPAIR]":
                    availability.repair += parseInt(availArray[2]);
                    availability.total += availability.repair;
                    break;
                case "[INTRANSIT]":
                    availability.intransit += parseInt(availArray[2]);
                    availability.total += availability.intransit;
                    break;
                case "[CHECKEDOUT]":
                    availability.checkedout += parseInt(availArray[2]);
                    availability.total += availability.checkedout;
                    break;
                default:
                    break;
                }
            regexOutput = regex.exec(deviceAvail); //onto next regex match
        }
    });
    return availability;
}

//Requests the device availability data from the library server and passes it to
//getResponse for parsing
//Inputs: Device ID (int)
//Outputs: void (NEEDS AN EMPTY response  BE INITALIZED BEFORE CALLING)
function getDeviceData(id){
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if(request.readyState == 4 && request.status == 200) {
      var deviceResponse = getResponse(request.responseText, id);
      //document.write("Number of available items for: "+id+" is: "+deviceResponse.techlend + "<br>"); //FIXME uncomment when in production, call upon response array to get data
      responses.push(deviceResponse);
      //console.log(responses);
    }
  }
  request.open("GET", "http://www.lib.ncsu.edu/websiteclassic/device-test/index.php?key=" + id,true);
  request.send();
}
