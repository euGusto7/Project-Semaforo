const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => {
    if (colorIndex < 2) {
        colorIndex++
    }else {
        colorIndex = 0
    }
}

const changecolor = () => {
    const colors = ['green', 'red', 'yellow'];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval(intervalId);
}

const turnOn = {
    'green': () => img.src = './img/green.png',
    'red': () => img.src = './img/red.png',
    'yellow': () => img.src = './img/yellow.png',
    'automatic': () => intervalId = setInterval(changecolor, 1000)
}

buttons.addEventListener('click', trafficLight);
