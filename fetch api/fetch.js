//https://jsonplaceholder.typicode.com/posts

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((res)=>res.json())
.then((d)=>{console.log(d)})
.catch((err)=>console.log(err))