const storageKey = "todos";

const convertStringToObject = (string) => JSON.parse(string) || []

const convertObjectToString = (object) => JSON.stringify(object) || ''

const getTodos = () => convertStringToObject(localStorage.getItem(storageKey))

function addTodo(todo){
    localStorage.setItem(storageKey, convertObjectToString([...getTodos(), todo]))
}

function deleteTodo(todo){
    localStorage.setItem(storageKey, convertObjectToString(getTodos().filter(_todo => _todo !== todo)))
}

function buildTodoEl(todo) {
    const element = document.createElement("li")
    element.classList.add("list-group-item")
    element.innerText = todo
    return element
}

function appendLiToDom(element){
    document.getElementById("todo-list-container").appendChild(element)  
} 

function clearTodoListDisplay(){
    document.getElementById("todo-list-container").innerHTML = ""
}
function clearInput(){
    document.getElementById("new-todo-input").value = ""
}
function displayTodos() {
    clearInput()
    clearTodoListDisplay()
    getTodos().forEach(_todo => appendLiToDom(buildTodoEl(_todo)))
    initClickListeners()
}
function initClickListeners() {
    Array.from(document.getElementsByClassName("list-group-item")).forEach(_item => {
        _item.addEventListener("click", ($event) => {
            const todo = $event.target.innerText
            if(window.confirm("Is this task completed? " + todo)) {
                deleteTodo(todo)
                displayTodos()
            }
        })
    })
}

document.addEventListener("DOMContentLoaded", () => displayTodos())

document.getElementById("submit-new-todo-btn").addEventListener("click", ($event) => {
    const newTodoInput = document.getElementById("new-todo-input");
    if(newTodoInput.value) {
        addTodo(newTodoInput.value.trim());
        displayTodos();
    }
});

document.getElementById("reset-storage-btn").addEventListener("click", ($event) => {
    localStorage.removeItem(storageKey);
    displayTodos();
});