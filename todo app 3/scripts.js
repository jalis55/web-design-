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
        }
    })
    
})