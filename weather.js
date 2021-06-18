const API_KEY = '6b20d087a8cf389999ea092c60228072';
const COORDS = 'coords';

function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/find?lat={lat}&lon={lon}&APPID={API_KEY}`)
}


  function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
  }
  
  function handleGeoSuccess(position){
    const latitude = position.coords.latitude,
      longitude=position.coords.longitude;
    const coordsObject={
      latitude,
      longitude
      
    };
  
    saveCoords(coordsObject);
    getWeather(latitude,longitude);
  }
  
  function handleGeoError(){
    console.log("Cant acce ss geo location");
  }
  
  function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
  }
  
  function loadCoords(){
    const loadedcoords=localStorage.getItem(COORDS);
    if (loadedcoords ===null){
      askForCoords();
    }else{
      const parseCoords=JSON.parse(loadedcoords);
      console.log(parseCoords);
      getWeather(parseCoords.latitude,parseCoords.longitude);
    }
  
  }
  
  function init(){
    loadCoords();
  }
  
  init();