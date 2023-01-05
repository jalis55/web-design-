let submitBtn=document.querySelector("#submit");
// console.log(submitBtn);

submitBtn.addEventListener("click",todoapp);

function todoapp(e){
    let task=document.querySelector("#task");
    if (task.value ==""){

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
    task.reset();
    e.preventDefault();
    


}
