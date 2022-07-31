let digitClock =()=>{
let date = new Date();
//JS for hour mech
let hours=date.getHours();
if (date.getHours()>12){
    document.getElementById("hours").innerHTML=hours;
}
else{
    document.getElementById("hours").innerHTML=hours;
}



// JS for minute mech
let minutes=date.getMinutes();
if(date.getMinutes()<10){
    document.getElementById("minutes").innerHTML="0"+minutes;
}
else{
    document.getElementById("minutes").innerHTML=minutes;
}

// JS for second mech
let seconds=date.getSeconds();
if(date.getSeconds()<10){
    document.getElementById("seconds").innerHTML="0"+seconds;
}
else{
    document.getElementById("seconds").innerHTML=seconds;
}

// JS for am or pm mech
let format=hours>=12? 'pm' :'am';




document.getElementById("hours").innerHTML=hours;
// document.getElementById("minutes").innerHTML=minutes;

document.getElementById("format").innerHTML=format;



setTimeout(digitClock,1000)
}
digitClock();