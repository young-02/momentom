const title = document.querySelector('#title');
const clicked_class = 'clicked'

function handleClick(){
// const hasclass = title.classList.contains(clicked_class);
// if(hasclass){
//     title.classList.remove(clicked_class);
// }else{
//     title.classList.add(clicked_class);
// }
//title.classList.toggle(clicked_class);
title.className = clicked_class;
}

function init(){
title.addEventListener('click', handleClick);
}
init();