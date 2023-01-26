window.addEventListener("load", () => {
    const form = document.querySelector("#new-task-form")

    const inputVal = document.querySelector("#new-task-input")

    const task_list = document.querySelector("#tasks")

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        console.log(e.target)
        if (!inputVal.value) {
            alert("Please insert a task")
            return;
        }
        else {
            console.log(inputVal.value)
            let parentDiv = document.createElement("div")
            parentDiv.classList.add("task")
            let contentDiv = document.createElement("div")
            contentDiv.classList.add("content")
            let input_content = document.createElement("input")
            input_content.classList.add("text")
            input_content.type = "text"
            input_content.value = inputVal.value
            input_content.setAttribute = ("readonly", "readonly")
            
            contentDiv.appendChild(input_content)
            parentDiv.appendChild(contentDiv)
            task_list.append(parentDiv)
            inputVal.value = ""
            
            
            let actionDiv = document.createElement("div")
            actionDiv.classList.add("actions")
            let edit_btn = document.createElement("button")
            edit_btn.classList.add("edit")
            edit_btn.innerHTML = "Edit"

            let delete_btn = document.createElement("button")
            delete_btn.classList.add("delete")
            delete_btn.innerHTML = "Delete"
            
            actionDiv.appendChild(edit_btn)
            actionDiv.appendChild(delete_btn)

            parentDiv.appendChild(actionDiv)
            
            
            
        }
    })
    
})