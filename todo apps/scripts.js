let form=document.querySelector("#form");
let task=document.querySelector("#task");
let ol=document.querySelector("ol");


function todoapp(e){
    e.preventDefault();
    let taskValue=task.value;
    console.log(taskValue);
    
    if (taskValue ==""){

        alert("Field can not be empty");
        return false;
    }
    else{
        let li=document.createElement("li");
        let p=document.createElement("p");
        p.innerText=taskValue;
        let deleteBtn=document.createElement("button");
        deleteBtn.id="delete";
        deleteBtn.innerText="Delete";
        li.appendChild(p);
        li.appendChild(deleteBtn);
        ol.appendChild(li);
        //delete task
        let deleteItem=document.querySelector("#delete");
        
        
    }
    task.value=""
}

form.addEventListener("submit",todoapp);
