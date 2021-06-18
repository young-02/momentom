const form = document.querySelector('.js-form'),
        input = form.querySelector('input'),
        greeting = document.querySelector('.js-greetings')

const USER_LS = 'currentUser',
        SHOWING_CN ='showing';

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmint(event){
    event.preventDefault();//submit 의 기능 상실,
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName (){
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmint);// 새로고침 되는 것을 정보를 넘겨 저장한다.
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hell ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        //she is not
        askForName();
    }else{
        //she is
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();