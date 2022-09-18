const output = document.getElementById('response');
fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Sachse%2C%20TX?unitGroup=us&key=EXPP9ZFW7559NA2WLHV699P3P&contentType=json", {
  "method": "GET",
  "headers": {
  }
  })
.then(response => {
  // response.days.forEach(day => {
    
  // });
  output.innerHTML = JSON.stringify(response.days);
  console.log(response);
})
.catch(err => {
  console.error(err);
});
