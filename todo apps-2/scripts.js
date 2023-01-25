/*
https://www.freecodecamp.org/news/learn-crud-operations-in-javascript-by-building-todo-app/
*/

let form = document.querySelector("#form")
let inputVal = document.querySelector("#input")
let msg = document.querySelector("#msg")
let post = document.querySelector("#posts")

let data = {}

form.addEventListener("submit", (e) => {
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
        acceptData()
    }
}

let acceptData = () => {
    data["text"] = inputVal.value
    createPost()

}
let createPost = () => {
    post.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
    </div>`
    inputVal.value = ""
}
let deletePost = (e) => {
    e.parentElement.parentElement.remove();

}

let editPost = (e) => {
    let edit_item = e.parentElement.previousElementSibling
    inputVal.value = edit_item.innerHTML
    e.parentElement.parentElement.remove();

}
