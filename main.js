function opennNav() {
    document.getElementById("mySidebar").style.width = "190px";
    document.getElementById("main").style.marginLeft = "190px";
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
}
function DarkMode(){
    document.body.classList.toggle("dark")
}
var time = new Date().getHours();
var text;
if (time < 12) {
    text = "Good Morning";
} else if (time < 14) {
    text = "Good Afternoon";
} else if (time < 24) {
    text = "Good Evening";
}
console.log(text);
document.getElementById("gooood").innerHTML = text; 
function showTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var TimeZone = "AM";
    if (hours === 0) {
        hours = 12; 0
    }
    if (hours > 12) {
        hours = hours -12;
        TimeZone = "PM";
    }
    hours=(hours < 10) ? "0" + hours : hours;
    minutes=(minutes < 10) ? "0" + minutes : minutes;
    seconds=(seconds < 10) ? "0" + seconds : seconds;
    var time = hours + ":" + minutes + ":" + seconds + ":" + TimeZone;
    document.getElementById("myclock").innerHTML = time; 
    setTimeout(showTime,"1000")
}
showTime();