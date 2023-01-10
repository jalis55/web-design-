let form=document.querySelector("#form");
let task=document.querySelector("#task");
let ol=document.querySelector("ol");


function deleteTask(e){
	let task=e.target;
	let parentTask=task.parentElement;
	console.log(parentTask);
	parentTask.remove();
	
	
}
function todoapp(e){
    e.preventDefault();
    let taskValue=task.value;
    
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

        
        
    }
    task.value=""
}

form.addEventListener("submit",todoapp);
let TaskItem=document.querySelector("#delete");
TaskItem.addEventListener("click",deleteTask);
