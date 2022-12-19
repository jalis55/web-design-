const hourEl=document.getElementById("hour")

const minutesEl=document.getElementById("minutes");
const secondEl=document.getElementById("seconds");
const ampmEl=document.getElementById("ampm");

function digitalClock(){
    let hour=new Date().getHours();
    console.log(hour);
    let minutes=new Date().getMinutes();
    console.log(minutes);
    let seconds=new Date().getSeconds();
    let ampm="AM"

    if (hour > 12){
        hour=hour -12;
        ampm="PM"
    }
    hour=hour<10 ? "0" +hour :hour;
    hourEl.innerText=hour;
    minutesEl.innerText=minutes;
    secondEl.innerText=seconds;
    ampmEl.innerText=ampm;
    setTimeout(()=>{
        digitalClock();
    },1000)



}
digitalClock();