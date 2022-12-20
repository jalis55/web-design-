const hourEl=document.getElementById("hour")
const minutesEl=document.getElementById("minutes");
const secondsEl=document.getElementById("seconds")
const ampmEl=document.getElementById("ampm");



function digitalClock(){
    var h=new Date().getHours();
    var m=new Date().getMinutes();
    var s=new Date().getSeconds();
    var ampm="AM"
    if(h>12){
        h=h-12
        ampm="PM"
    }

    h=h<10 ? "0" + h :h;
    m=m<10 ? "0" + m :m;
    s=s<10 ? "0" + s :s;

    if (h>7 && ampm=="PM"){
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1475738972911-5b44ce984c42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')";

    }
    hourEl.innerText=h;
    minutesEl.innerText=m;
    secondsEl.innerText=s;
    ampmEl.innerText=ampm;


    setTimeout(()=>{
        digitalClock();
    },1000);
}

digitalClock();