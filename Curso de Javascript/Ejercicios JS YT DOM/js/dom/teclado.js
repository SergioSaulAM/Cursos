const d = document;
let x = 0, y = 0;

export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitBall = $ball.getBoundingClientRect(),
        limitStage = $stage.getBoundingClientRect();
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(limitBall, limitStage);
    switch (e.keyCode) {
        case 37: // ⬅️
            if (limitBall.left > limitStage.left + 10) {
                x--;
                e.preventDefault();
            };
            break;
        case 38: // ⬆️
            if (limitBall.top > limitStage.top + 10) {
                y--;
                e.preventDefault();
            };
            break;
        case 39: // ➡️
            if (limitBall.right < limitStage.right - 10) {
                x++;
                e.preventDefault();
            };
            break;
        case 40: // ⬇️
            if (limitBall.bottom < limitStage.bottom - 10) {
                y++;
                e.preventDefault();
            };
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortcut(e) {
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(`Ctrl: ${e.ctrlKey}`);
    // console.log(`Alt: ${e.altKey}`);
    // console.log(`Shift: ${e.shiftKey}`);
    // console.log(e);

    if (e.altKey && e.key === 'a') {
        alert('Haz lanzado una alerta con el Teclado');
    }
    if (e.altKey && e.key === 'c') {
        confirm('Haz lanzado una confirmación con el Teclado');
    }
    if (e.altKey && e.key === 'p') {
        prompt('Haz lanzado un aviso con el Teclado');
    }
}