const d = document;
const countdown = (id, limitDate, finalMessage) => {
    const $countdown = d.getElementById(id),
        countdownDate = new Date(limitDate).getTime();
    let contdownTempo = setInterval(() => {
        let now = new Date().getTime(),
            limitTime = countdownDate - now,
            days = Math.floor(limitTime / (1000 * 60 * 60 * 24)), // Aquí se está dividiendo el tiempo restante entre los milisegundos de un día
            hours = ("0" + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2),
            minutes = ("0" + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2),
            seconds = ("0" + Math.floor(limitTime % (1000 * 60) / (1000))).slice(-2);
        $countdown.innerHTML = `<h3>Faltan ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos para tu cumpleaños</h3>`
        if (limitTime < 0) {
            clearInterval(contdownTempo);
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
        }
    }, 1000);
}

export default countdown;