 // Função para atualizar o relógio
 function updateClock() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);
updateClock(); // Chamada inicial

// Variáveis para o cronômetro
let stopwatchInterval;
let stopwatchTime = 0;

// Função para formatar o tempo do cronômetro
function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Função para atualizar o cronômetro
function updateStopwatch() {
    stopwatchTime++;
    document.getElementById('stopwatch-time').textContent = formatTime(stopwatchTime);
}

// Funções para iniciar, parar e resetar o cronômetro
document.getElementById('start').addEventListener('click', () => {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(updateStopwatch, 1000);
    }
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    stopwatchTime = 0;
    document.getElementById('stopwatch-time').textContent = '00:00:00';
});
       
