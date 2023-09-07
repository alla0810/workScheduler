
/* 
  0: Text for hour-9AM
  1: Text for hour-10AM
  2: Text for hour-11AM
  3: Text for hour-12PM
  4: Text for hour-1PM
  5: Text for hour-2PM
  6: Text for hour-3PM
  7: Text for hour-4PM
  8: Text for hour-5PM
*/

usrInputTextArray = [];    


$("body").ready(function() {
  var currentDate = dayjs();

  console.log("currentDate = ", currentDate);

  var weekday = currentDate.format('dddd');
  var month = currentDate.format('MMMM');
  var day = currentDate.format('D');

  var display_text = weekday + ", " + month + " " + day + "th";

  $('#currentDay').append(display_text);

  var currentHour = currentDate.hour();

  console.log("currentHour = ", currentHour);

  if (currentHour >= 9 && currentHour < 10)     // present = 9AM, no past, future: from 10AM
  {
    console.log("currentHour >= 9 && currentHour < 10", currentHour);

    $('#hour-9AM').addClass("row time-block present");
    $('#hour-10AM').addClass("row time-block future");
    $('#hour-11AM').addClass("row time-block future");
    $('#hour-12PM').addClass("row time-block future");
    $('#hour-1PM').addClass("row time-block future");
    $('#hour-2PM').addClass("row time-block future");
    $('#hour-3PM').addClass("row time-block future");                    
    $('#hour-4PM').addClass("row time-block future");                        
    $('#hour-5PM').addClass("row time-block future");      
  }
  else if (currentHour >= 10 && currentHour < 11)
  {
    console.log("currentHour >= 10 && currentHour < 11", currentHour);

    $('#hour-9AM').addClass("row time-block past");
    $('#hour-10AM').addClass("row time-block present");
    $('#hour-11AM').addClass("row time-block future");
    $('#hour-12PM').addClass("row time-block future");
    $('#hour-1PM').addClass("row time-block future");
    $('#hour-2PM').addClass("row time-block future");
    $('#hour-3PM').addClass("row time-block future");                    
    $('#hour-4PM').addClass("row time-block future");                        
    $('#hour-5PM').addClass("row time-block future");       
  }
  else if (currentHour >= 11 && currentHour < 12)
  {
    console.log("currentHour >= 11 && currentHour < 12", currentHour);

    $('#hour-9AM').addClass("row time-block past");
    $('#hour-10AM').addClass("row time-block past");
    $('#hour-11AM').addClass("row time-block present");
    $('#hour-12PM').addClass("row time-block future");
    $('#hour-1PM').addClass("row time-block future");
    $('#hour-2PM').addClass("row time-block future");
    $('#hour-3PM').addClass("row time-block future");                    
    $('#hour-4PM').addClass("row time-block future");                        
    $('#hour-5PM').addClass("row time-block future");    
  }
  else if (currentHour >= 12 && currentHour < 13)
  {
    console.log("currentHour >= 12 && currentHour < 13", currentHour);

    $('#hour-9AM').addClass("row time-block past");
    $('#hour-10AM').addClass("row time-block past");
    $('#hour-11AM').addClass("row time-block past");
    $('#hour-12PM').addClass("row time-block present");
    $('#hour-1PM').addClass("row time-block future");
    $('#hour-2PM').addClass("row time-block future");
    $('#hour-3PM').addClass("row time-block future");                    
    $('#hour-4PM').addClass("row time-block future");                        
    $('#hour-5PM').addClass("row time-block future");   
  }
  else if (currentHour >= 13 && currentHour < 14)
  {
    console.log("currentHour >= 13 && currentHour < 14", currentHour);

    $('#hour-9AM').addClass("row time-block past");
    $('#hour-10AM').addClass("row time-block past");
    $('#hour-11AM').addClass("row time-block past");
    $('#hour-12PM').addClass("row time-block past");
    $('#hour-1PM').addClass("row time-block present");
    $('#hour-2PM').addClass("row time-block future");
    $('#hour-3PM').addClass("row time-block future");                    
    $('#hour-4PM').addClass("row time-block future");                        
    $('#hour-5PM').addClass("row time-block future");     
  }
  else if (currentHour >= 14 && currentHour < 15)
  {
    console.log("currentHour >= 14 && currentHour < 15", currentHour);

    $('#hour-9AM').addClass("row time-block past");
    $('#hour-10AM').addClass("row time-block past");
    $('#hour-11AM').addClass("row time-block past");
    $('#hour-12PM').addClass("row time-block past");
    $('#hour-1PM').addClass("row time-block past");
    $('#hour-2PM').addClass("row time-block present");
    $('#hour-3PM').addClass("row time-block future");                    
    $('#hour-4PM').addClass("row time-block future");                        
    $('#hour-5PM').addClass("row time-block future");      
  }
  else if (currentHour >=15 && currentHour < 16)
  {
    console.log("currentHour >=15 && currentHour < 16", currentHour);

    $('#hour-9AM').addClass("row time-block past");
    $('#hour-10AM').addClass("row time-block past");
    $('#hour-11AM').addClass("row time-block past");
    $('#hour-12PM').addClass("row time-block past");
    $('#hour-1PM').addClass("row time-block past");
    $('#hour-2PM').addClass("row time-block past");
    $('#hour-3PM').addClass("row time-block present");                    
    $('#hour-4PM').addClass("row time-block future");                        
    $('#hour-5PM').addClass("row time-block future");    
  }
  else if (currentHour >= 16 && currentHour < 17)
  {
    console.log("currentHour >= 16 && currentHour < 17", currentHour);

    $('#hour-9AM').addClass("row time-block past");
    $('#hour-10AM').addClass("row time-block past");
    $('#hour-11AM').addClass("row time-block past");
    $('#hour-12PM').addClass("row time-block past");
    $('#hour-1PM').addClass("row time-block past");
    $('#hour-2PM').addClass("row time-block past");
    $('#hour-3PM').addClass("row time-block past");                    
    $('#hour-4PM').addClass("row time-block present");                        
    $('#hour-5PM').addClass("row time-block future");       
  }
  else if (currentHour >= 17 && currentHour < 18)
  {
    console.log("currentHour >= 17 && currentHour < 18", currentHour);

    $('#hour-9AM').addClass("row time-block past");
    $('#hour-10AM').addClass("row time-block past");
    $('#hour-11AM').addClass("row time-block past");
    $('#hour-12PM').addClass("row time-block past");
    $('#hour-1PM').addClass("row time-block past");
    $('#hour-2PM').addClass("row time-block past");
    $('#hour-3PM').addClass("row time-block past");                    
    $('#hour-4PM').addClass("row time-block past");                        
    $('#hour-5PM').addClass("row time-block present");                            
  }
  else if (currentHour < 9)   // all future
  {
    $('#hour-9AM').addClass("row time-block future");
    $('#hour-10AM').addClass("row time-block future");
    $('#hour-11AM').addClass("row time-block future");
    $('#hour-12PM').addClass("row time-block future");
    $('#hour-1PM').addClass("row time-block future");
    $('#hour-2PM').addClass("row time-block future");
    $('#hour-3PM').addClass("row time-block future");                    
    $('#hour-4PM').addClass("row time-block future");                        
    $('#hour-5PM').addClass("row time-block future");      

  }
  else if (currentHour >= 18)  // all past
  {
    $('#hour-9AM').addClass("row time-block past");
    $('#hour-10AM').addClass("row time-block past");
    $('#hour-11AM').addClass("row time-block past");
    $('#hour-12PM').addClass("row time-block past");
    $('#hour-1PM').addClass("row time-block past");
    $('#hour-2PM').addClass("row time-block past");
    $('#hour-3PM').addClass("row time-block past");                    
    $('#hour-4PM').addClass("row time-block past");                        
    $('#hour-5PM').addClass("row time-block past");                            

  }

  $("#hour-9AM").children("button").click(function() {
    var inputText = $("#hour-9AM").children("textarea").val();
  
    console.log("inputText = ", inputText);

    usrInputTextArray[0] = inputText;

    localStorage.setItem("usrInputText", JSON.stringify(usrInputTextArray));
  });

  $("#hour-10AM").children("button").click(function() {
    var inputText = $("#hour-10AM").children("textarea").val();
  
    console.log("inputText = ", inputText);

    usrInputTextArray[1] = inputText;

    localStorage.setItem("usrInputText", JSON.stringify(usrInputTextArray));
  });

  $("#hour-11AM").children("button").click(function() {
    var inputText = $("#hour-11AM").children("textarea").val();
  
    console.log("inputText = ", inputText);

    usrInputTextArray[2] = inputText;

    localStorage.setItem("usrInputText", JSON.stringify(usrInputTextArray));
  });

  $("#hour-12PM").children("button").click(function() {
    var inputText = $("#hour-12PM").children("textarea").val();
  
    console.log("inputText = ", inputText);

    usrInputTextArray[3] = inputText;

    localStorage.setItem("usrInputText", JSON.stringify(usrInputTextArray));
  });

  $("#hour-1PM").children("button").click(function() {
    var inputText = $("#hour-1PM").children("textarea").val();
  
    console.log("inputText = ", inputText);

    usrInputTextArray[4] = inputText;

    localStorage.setItem("usrInputText", JSON.stringify(usrInputTextArray));
  });

  $("#hour-2PM").children("button").click(function() {
    var inputText = $("#hour-2PM").children("textarea").val();
  
    console.log("inputText = ", inputText);

    usrInputTextArray[5] = inputText;

    localStorage.setItem("usrInputText", JSON.stringify(usrInputTextArray));
  });

  $("#hour-3PM").children("button").click(function() {
    var inputText = $("#hour-3PM").children("textarea").val();
  
    console.log("inputText = ", inputText);

    usrInputTextArray[6] = inputText;

    localStorage.setItem("usrInputText", JSON.stringify(usrInputTextArray));
  });

  $("#hour-4PM").children("button").click(function() {
    var inputText = $("#hour-4PM").children("textarea").val();
  
    console.log("inputText = ", inputText);

    usrInputTextArray[7] = inputText;

    localStorage.setItem("usrInputText", JSON.stringify(usrInputTextArray));
  });

  $("#hour-5PM").children("button").click(function() {
    var inputText = $("#hour-5PM").children("textarea").val();
  
    console.log("inputText = ", inputText);

    usrInputTextArray[8] = inputText;

    localStorage.setItem("usrInputText", JSON.stringify(usrInputTextArray));
  });
  
});

function restoreSavedUsrText()
{
  usrInputTextArray = JSON.parse(localStorage.getItem("usrInputText"));

  console.log("usrInputTextArray = ", usrInputTextArray);

  if (usrInputTextArray != null)
  {
    if (usrInputTextArray[0] != null)    {
      $("#hour-9AM").children("textarea").val(usrInputTextArray[0]);
    }
  
    if (usrInputTextArray[1] != null)    {  
      $("#hour-10AM").children("textarea").val(usrInputTextArray[1]);
    }

    if (usrInputTextArray[2] != null)    {  
      $("#hour-11AM").children("textarea").val(usrInputTextArray[2]);
    }

    if (usrInputTextArray[3] != null)    {  
      $("#hour-12PM").children("textarea").val(usrInputTextArray[3]);
    }

    if (usrInputTextArray[4] != null)    {  
      $("#hour-1PM").children("textarea").val(usrInputTextArray[4]);
    }

    if (usrInputTextArray[5] != null)    {  
      $("#hour-2PM").children("textarea").val(usrInputTextArray[5]);
    }

    if (usrInputTextArray[6] != null)    {  
      $("#hour-3PM").children("textarea").val(usrInputTextArray[6]);
    }

    if (usrInputTextArray[7] != null)    {  
      $("#hour-4PM").children("textarea").val(usrInputTextArray[7]);
    }

    if (usrInputTextArray[8] != null)    {  
      $("#hour-5PM").children("textarea").val(usrInputTextArray[8]);
    }
  }
}


restoreSavedUsrText();
