const toDoform = document.querySelector('.js-toDoform'),
        toDoinput = toDoform.querySelector('input'),
        toDoList = document.querySelector('.js-toDoList');


const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id)
    });
    toDos = cleanTodo;
    saveToDos();
}


function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement('li') ;
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    
    delBtn.innerText = 'x';
    delBtn.addEventListener('click', deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId
    toDoList.appendChild(li);
    const toDoOj ={
        text:text,
        id:newId
    }
    toDos.push(toDoOj);
    saveToDos();
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoinput.value;
    paintToDo(currentValue);
    toDoinput.value= '';
}

function loadTodos (){
    const loadTodos = localStorage.getItem(TODOS_LS);
    if(loadTodos !== null){
        const parsedToDos = JSON.parse(loadTodos);
       parsedToDos.forEach(function (toDo){
          paintToDo(toDo.text)
       });
    }
}

function init(){
    loadTodos();
    toDoform.addEventListener('submit',handleSubmit)
}
init();