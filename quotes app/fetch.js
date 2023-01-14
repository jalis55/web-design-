let btn=document.querySelector("button")
let quotes=document.querySelector("#quotes")
btn.addEventListener('click',getQuotes)

function getQuotes(){
    fetch("https://dummyjson.com/quotes/random")
    .then(res=>res.json())
    .then(d=>{
        quotes.innerText=""
        h1Tag=document.createElement("h1")
        h4Tag=document.createElement("h4")
        h1Tag.innerText=`"${d.quote}"`
        h4Tag.innerText=`--${d.author}`
        quotes.appendChild(h1Tag)
        quotes.appendChild(h4Tag)
    })

}