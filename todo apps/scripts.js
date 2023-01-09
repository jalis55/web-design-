let form=document.querySelector("#form");
let task=document.querySelector("#task");


form.addEventListener("submit",todoapp);

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
        li.innerText=task.value;
        let ol=document.querySelector("ol");
        console.log(ol);
        ol.appendChild(li);
        
    }
    
    
    


}
