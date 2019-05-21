const countdown = document.getElementById("timer");

const timer = setInterval(()=>{
    countdown.innerText--;
    if (countdown.innerText == 0) {
        alert('Вы победили в конкурсе');
        clearInterval(timer);
    }
}, 1000);