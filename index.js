const displayValores = document.getElementById("valores");
const displayResultado = document.getElementById("resultado");
const btnNum = document.querySelectorAll(".numero");
const btnOp = document.querySelectorAll(".operador");
const borrador = document.querySelectorAll(".borrador");

const display = new Display(displayValores, displayResultado);

btnNum.forEach(btn =>{
    btn.addEventListener('click', () => {
        display.agregarNumero(btn.innerHTML);
    });
});

borrador.forEach(btn =>{
    btn.addEventListener('click', () => {
        display.borrar(btn.innerHTML);
    });
});

btnOp.forEach(btn =>{
    btn.addEventListener('click', () => {
        display.agregarNumero(btn.value);
    });
});

