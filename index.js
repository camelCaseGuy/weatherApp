import myJson from './response.json' assert {type: 'json'};
const output = document.getElementById('response');
fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Sachse%2C%20TX?unitGroup=us&key=EXPP9ZFW7559NA2WLHV699P3P&contentType=json", {
  "method": "GET",
  "headers": {
  }
  })
.then(response => {
  // response.days.forEach(day => {
    
    // });
  console.log(response);
  if (response.days) {
    output.innerHTML = JSON.stringify(response.days);
  } else {
    output.innerHTML = JSON.stringify(myJson);
  }

})
.catch(err => {
  console.error(err);
});
