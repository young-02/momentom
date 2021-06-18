const API_KEY = '6b20d087a8cf389999ea092c60228072';
const COORDS = 'coords';

function getweather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
}

function saveCoords (coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSucess(position){
   const latutude = position.coords.latutude;
   const longitude = position.coords.longitude;
   const coordsObj = {
        latutude ,
       longitude
   };
   saveCoords(coordsObj);
   getweather(latutude, longitude);
}

function handleGeoError(){
    console.log('Cant access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucess, handleGeoError);
}


function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCords);
        console.log(parseCoords);
    }
}

function init(){
    loadCoords();
}
init();