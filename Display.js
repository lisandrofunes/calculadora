class Display{
 
    constructor(displayValores, displayResultado) {
        this.displayValores = displayValores;
        this.displayResultado = displayResultado;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.metodoOperacion = "";
        this.display="";
        this.var1="";
        this.var2="";
        this.resultado = "";

    }

    agregarNumero(numero){

        if(numero === "." && this.display===""){
            alert("Primero debe ingresar un numero");
        } 
        else{
            if(this.tipoOperacion===undefined){
                if(numero === "." && this.var1.includes(".")){
                    alert("No puede ingresar otro punto ( . )");
                }
                else{
                    this.var1 = this.var1.toString() + numero.toString();
                }
            }
            else{
                if(numero === "." && this.var2.includes(".")){
                    alert("No puede ingresar otro punto ( . )");
                }
                else{
                    this.var2 = this.var2.toString() + numero.toString();
                }
            }
            this.display = this.display.toString() + numero.toString();
            this.imprimirValores();
        }
        
    }

    agregarOperador(operador){
        if(this.var1 != ""){

            if(operador === "="){
                if(this.var2===""){
                    alert("Debe ingresar un operador u otro numero");
                }
                else{
                    this.operar()
                }
            }
            else{
                if(this.tipoOperacion===undefined){
                    
                    this.tipoOperacion = operador;
        
                    if(operador==="+"){
                        this.metodoOperacion="sumar";
                    }
                    else{
                        if(operador==="-"){
                            this.metodoOperacion="restar";
                        }
                        else{
                            if(operador==="x"){
                                this.metodoOperacion="multiplicar";
                            }
                            else{
                                this.metodoOperacion="dividir";
                            }
                        }
                    }

                    this.display = this.display.toString() + operador.toString();
                    this.imprimirValores();

                }
                else{
                    alert("No puede agreagar otro operador");
                }

            } 
        }
    else{
        alert("Primero debe ingresar un numero")
    }   

    }

    operar(){
        /*var i=0;
        var pos;

        if(this.display.includes(this.tipoOperacion) === true ){
            pos = this.display.indexOf(this.tipoOperacion);
        }

        /*for(i; i<pos; i++){
            this.var1+=this.display.charAt(i);
        }

        pos+=1;
        for(pos; pos<this.display.length; pos++){
            this.var2+=this.display.charAt(pos);
        }
        */
        var num1;
        var num2;
        num1 = parseFloat(this.var1); num2 = parseFloat(this.var2);

        this.resultado = this.calculador[this.metodoOperacion](num1, num2);
        this.imprimirValores();

    }

    borrar(key){
        if(key === "AC"){
            this.tipoOperacion = undefined;
            this.metodoOperacion = "";
            this.display="";
            this.var1="";
            this.var2="";
            this.resultado = "";
                
            
        }
        else{
            
            if((this.display.length - this.var1.length) > 1 ){
                this.var2 = this.var2.toString().slice(0,-1);
                this.resultado = "";

            }
            else{
                if((this.display.length - this.var1.length) == 1){
                    this.tipoOperacion = undefined;
                    this.metodoOperacion = "";        
                }
                else{
                    this.var1 = this.var1.toString().slice(0,-1);

                }
            }
            this.display = this.display.toString().slice(0,-1);
        }
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayValores.textContent = this.display;
 
        this.displayResultado.textContent = this.resultado;
    }
}
