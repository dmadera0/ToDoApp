# MyMoviesFrontend
# MyMovies App
 A great place to view and orginize all your favorite movies
# Table of contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)
## General Info
The toDoApp is a Frontend application that allows user to set up a To Do list in a visually appealing space. The app allows you create a new task, delete the task and clear all list at the end of use.

# Technologies
* JavaScript
* CSS
* HTML 5
* Bootstrap - version 4.0.0
* Firebase

## Setup
1. This app has been deployed with Firebase. It can be viewed by going to [mytodoapp-a2e3e.web.app/](https://mytodoapp-a2e3e.web.app/)

## Code Examples
```javascript
function buildTodoEl(todo) {
    const element = document.createElement("li")
    element.classList.add("list-group-item")
    element.innerText = todo
    return element
}

document.getElementById("submit-new-todo-btn").addEventListener("click", (event) => {
    const newTodoInput = document.getElementById("new-todo-input");
    if(newTodoInput.value) {
        addTodo(newTodoInput.value.trim());
        displayTodos();
    }
});
```
## Features
* Create a To Do list item
* Delete a To Do item
* Delete The Entire To Do list

## Inspiration
The inspiration for this project came from a need for productivity. Making a list with paper and pen or on a boring task app, is never fun. This app draws user to a fun simple enviroment, that will help promote productivity!

## Contact
Created by [Daniel Madera](https://www.linkedin.com/in/daniel-madera-925b4987/)

Please feel free to contact us!
