const clock = document.getElementById("clock");
nowClock = clock.querySelector('h1');

function clocks(){
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    nowClock.innerText = `${hours}:${minutes}:${seconds}`;
}

clocks();
setInterval(clocks, 1000);
