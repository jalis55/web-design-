
let btn=document.querySelector("button")
let quates=document.querySelector("#quotes")

btn.addEventListener("click",getQuates)

function getQuates(){
    let xhr=new XMLHttpRequest()
    xhr.open("GET","https://dummyjson.com/quotes/random")
    xhr.onload=function(){
        if (this.status===200){
            quates.innerText=""
            let quatesData=JSON.parse(this.responseText)
            let h2Tag=document.createElement("h2")
            let h5Tag=document.createElement("h5")

            h2Tag.innerText=`"${quatesData.quote}"`
            
            h5Tag.innerText="--"+quatesData.author
            
            quates.appendChild(h2Tag)
            quates.appendChild(h5Tag)

        }
        else{
            alert("Invalid request")

        }
    }
    xhr.send();
    console.log(xhr)
}