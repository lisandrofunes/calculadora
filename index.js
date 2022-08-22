const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('slider');

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

slider.addEventListener('click', ()  => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
});

setTheme(localStorage.getItem('theme') || preferedColorScheme);

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
        display.agregarOperador(btn.innerHTML);
    });
});

