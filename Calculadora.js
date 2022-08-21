class Calculadora{
    sumar(num1, num2){
        return Number((num1 + num2).toFixed(2));
    }

    restar(num1, num2){
        return Number((num1 - num2).toFixed(2));
    }

    multiplicar(num1, num2){
        return Number((num1 * num2).toFixed(2));
    }

    dividir(num1, num2){
        return Number((num1 / num2).toFixed(2));
    }

}