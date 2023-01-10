let form=document.querySelector("#form");
let task=document.querySelector("#task");
let ol=document.querySelector("ol");



function todoapp(e){
    e.preventDefault();
    let taskValue=task.value;
    
    if (task.value ==""){

        alert("Field can not be empty");
        return false;
    }
    
    let li=document.createElement("li");
    let p=document.createElement("p");
    p.innerText=taskValue;
    let deleteBtn=document.createElement("button");
    deleteBtn.id="delete";
    deleteBtn.innerText="Delete";
    li.appendChild(p);
    li.appendChild(deleteBtn);
    ol.appendChild(li);
    p.addEventListener("click",()=>{
        p.style.textDecoration="line-through";
    })
    deleteBtn.addEventListener("click",function(){
        let deleteItem=deleteBtn.parentElement;
        deleteItem.remove();
    })
    task.value=""
}

form.addEventListener("submit",todoapp);

