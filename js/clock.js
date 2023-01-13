let myName = prompt("Adınızı giriniz...");
let nameInfo = document.querySelector('#nameInfo');
let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

if(myName.length > 0){
    nameInfo.innerHTML = `${myName}`;
}
else{
    alert("Adınızı doğru giriniz lütfen...");
}

function clockTimeFunction(){

    let dated = new Date();

    let datedDay = days[dated.getDay()];
    let datedTime = dated.getHours();
    let datedMinute = dated.getMinutes();
    let datedSecond = dated.getSeconds();

    let clockInfo = document.querySelector('#clockInfo');

    clockInfo.innerHTML = `${String(datedTime).padStart(2,'0')} : ${String(datedMinute).padStart(2,'0')} : ${String(datedSecond).padStart(2,'0')} : ${datedDay}`;
}

setInterval(clockTimeFunction, 1000);