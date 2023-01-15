let btn=document.querySelector("button")
let quotes=document.querySelector("#quotes")
btn.addEventListener('click',getQuotes)

async function getQuotes(){
    let response=await fetch("https://dummyjson.com/quotes/random")
    let data=await response.json()
    console.log(data)

    quotes.innerText=""
    h1Tag=document.createElement("h1")
    h4Tag=document.createElement("h4")
    h1Tag.innerText=`"${data.quote}"`
    h4Tag.innerText=`--${data.author}`
    quotes.appendChild(h1Tag)
    quotes.appendChild(h4Tag)
    
}