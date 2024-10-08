AOS.init();

const eventDate = new Date("Dec 12, 2022 19:00:00");
const eventTimeStamp = eventDate.getTime();

const countDown = setInterval(function(){
    const now = new Date();
    const nowTimeStamp = now.getTime();

    const timeUntilEvent = eventTimeStamp - nowTimeStamp;

    const minInMs = 1000 * 60;
    const hourInMs = minInMs * 60;
    const dayInMs = hourInMs * 24;

    const daysUntilEvent = Math.floor(timeUntilEvent / dayInMs);
    const hoursUntilEvent = Math.floor((timeUntilEvent % dayInMs) / hourInMs);
    const minutesUntilEvent = Math.floor((timeUntilEvent % hourInMs) / minInMs);
    const secondsUntilEvent = Math.floor((timeUntilEvent % minInMs) / 1000);

    // console.log(daysUntilEvent, hoursUntilEvent, minutesUntilEvent, secondsUntilEvent);
    document.getElementById('contador').innerHTML = `O maior evento de tecnologia do Brasil começa em ${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`;
    
    if (timeUntilEvent < 0) {
        document.getElementById('contador').innerHTML = `Não foi dessa vez :( Fique atento para não perder o próximo!`;
    }
}, 1000);