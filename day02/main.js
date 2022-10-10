//variable
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setTime(){
    // console.log('Hi');
    const now = new Date();

    // //dancing the senond hand
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    // //danching the minute hand
    const minutes = now.getMinutes();
    const minutesDegree = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    // //dancing the hour hand
    const hours = now.getHours();
    const hoursDegree = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;


}

//run the function in every second
setInterval(setTime, 1000);

setTime();