/*
https://www.freecodecamp.org/news/learn-crud-operations-in-javascript-by-building-todo-app/
*/

let form = document.querySelector("#form")
let inputVal = document.querySelector("#input")
let msg = document.querySelector("#msg")
let post = document.querySelector("#posts")

form.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("btn clicked")
    validation()
})

let validation = () => {
    if (inputVal.value === "") {
        msg.innerText = "Please insert a value"
    }
    else {
        msg.innerText = ""
    }
}
