const d = document;

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