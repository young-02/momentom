const API_KEY = '6b20d087a8cf389999ea092c60228072';
const COORDS = 'coords';

function saveCoords (coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSucess(position){
   const latutude = position.coords.latitude;
   const longitude = position.coords.longitude;
   const coordsObj = {
       latitude : latitude,
       longitude : longitude,
   };
   saveCoords(coordsObj)
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
        //getweather
    }
}

function init(){
    loadCoords();
}
init();