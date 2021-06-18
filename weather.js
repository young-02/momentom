const API_KEY = '6b20d087a8cf389999ea092c60228072';
const COORDS = 'coords';

function getweather(lat, lng){
    fetch(
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
      )
}


function saveCoords (coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSucess(position){
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;
   const coordsObj = {
        latitude ,
        longitude
   };
   saveCoords(coordsObj);
   getweather(latitude, longitude);
}

function handleGeoError(){
    console.log('Cant access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucess, handleGeoError);
}


function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        getweather(parseCoords.latitude, parseCoords.longitude)
    }
}

function init(){
    loadCoords();
}
init();