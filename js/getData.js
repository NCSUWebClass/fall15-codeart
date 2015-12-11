var allIDs = new Array();

/*
 Parses the "HUNT" sections out of the GET response
 @param {String} - GET response from the library server
 @param {id} id - id of specific lendable device 
*/
function parseResponse(response, id){
  response = response.replace(/\s+/g,' '); //replaces excess spaces with just one
  var openParens = 0;
  var closeParens = 0;
  var huntCount = 0; 
  var regExpHunt = /\[hunt\]/gi; //parses out "[HUNT]"
  var allHunts = []; //all devices that have "HUNT" as an available location

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
    //console.log(huntSection);
    allHunts.push(huntSection);
  }

  return getDeviceAvailability(allHunts,id); 
}

/* Assigns the name of the item to the id */
function assignName(id){
   var val = id.trim();
   var name = ""
    switch(val){
        case "2081286":
            name = "MacBook";
            break;
        case "2729663":
            name =  "Windows Laptop";
            break;
        case "2260031":
            name = "iPad";
            break;
        case "1983097":
            name = "TI-83 Plus Calculator";
            break;
        case "2736849":
            name = "Windows Surface Tablet";
            break;
        case "2758462":
            name = "Bamboo Fun Tablet";
            break;
        case "2736846":
            name = "Raspberry Pi";
            break;
        case "2739182":
            name = "Arduino";
            break;
        case "3310348":
            name = "Chromebook";
            break;
        default:
            name = "Name N/A";
            break;
    }
    return name;
}


/*
 Parses out amount of device in each availability status
 @param {Array} sections - parsed out "HUNT" sections of GET response
 @param {id} id - id of specific lendable device 
*/
function getDeviceAvailability(sections, id){
    var regex = /\[\w+\] => \d+/gi;
    var availability = {id: id, techlend:0, techhold:0, repair:0, intransit:0, checkedout:0, total:0, name:""};
    //console.log(id);
    availability.name = assignName(id);
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
                    //availability.total += availability.techlend;
                    break;
                case "[TECHHOLD]":
                    availability.techhold += parseInt(availArray[2]);
                    //availability.total += availability.techhold;
                    break;
                case "[REPAIR]":
                    availability.repair += parseInt(availArray[2]);
                   // availability.total += availability.repair;
                    break;
                case "[INTRANSIT]":
                    availability.intransit += parseInt(availArray[2]);
                    //availability.total += availability.intransit;
                    break;
                case "[CHECKEDOUT]":
                    availability.checkedout += parseInt(availArray[2]);
                    //availability.total += availability.checkedout;
                    break;
               // default:
                 //   break;
                }
            regexOutput = regex.exec(deviceAvail); //onto next regex match
        }
        availability.total = availability.techlend+availability.checkedout;
    });
    responses.push(availability);
    //return availability; //debugging state
}

/*
 Function that sends the GET request to the library server
 @param {String} id - id of specific lendable device
*/
function getDeviceData(id){
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if(request.readyState == 4 && request.status == 200) {
      var deviceResponse = parseResponse(request.responseText, id);
      //console.log(request.responseText);
     // document.write("Item "+id+" has "+deviceResponse.techlend+" available to be lent out and "+deviceResponse.checkedout+" checked out already<br>"); //FIXME uncomment when in production, call upon response array to get data
    }
  }
  request.open("GET", "http://www.lib.ncsu.edu/websiteclassic/device-test/index.php?key=" + id,true);
  request.send();
}

/*
 Function to parse numbers from a text file, separated by the  newline character '/n'
 @param {String} filename - the name of the file containing the numbers
 @param {Function} callback - the function to call when done processing the file   
*/
function parseFile(filename, callback) {
  //create empty array
  var contents = [];

  //open file reader
  var req = new XMLHttpRequest();
  req.open('GET',filename,true);
  
  //when file is opened
  req.onreadystatechange = function() {
    if(req.readyState == 4 && req.status ==200) {
      var text = req.responseText;
      var lines = text.split('\n');
      //go through each line
      for(var line = 0; line < lines.length; line++){
      //check if it is a number
        length = lines.length;
        if (isFinite(parseInt(lines[line]))) {
          //put it in the array if it is
          contents.push(lines[line]);
        }
      }
    //return the array
    callback(contents);
    }
  }  
  req.send();
}

function getAll(responses) {
    var file = "deviceids.txt";
    parseFile(file, function(id) {
        id.forEach(function(deviceid) {
            allIDs.push(deviceid);
            getDeviceData(deviceid);
        });
    });
    //setTimeout(function() {
    //  console.log(responses);
    //}, 5000);//debugging step
    return responses;
}

//returns number of devices checked out, given index
//into allIDs[]
function getNumCheckedOut(index){
  var numCheckedOut;
  var id = allIDs[index];
    responses.forEach(function(device){
        if(device.id == id){
            numCheckedOut = device.checkedout;
        }
    })
    return numCheckedOut;
}