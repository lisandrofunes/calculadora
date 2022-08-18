class Display{
 
    constructor(displayValores, displayResultado) {
        this.displayValores = displayValores;
        this.displayResultado = displayResultado;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.display="";
        this.var1="";
        this.var2="";
        this.resultado = "";

    }

    agregarNumero(numero){

        if(numero === "." && this.display===""){
            alert("Primero debe ingresar un numero")
        }
        else{
            if(numero === "." && this.display.includes(".")){
                alert("No puede ingresar otro punto ( . )");
            }
            else{
                if(numero === "igualar"){
                    this.operar()
                }
                else{
                    if(numero==="sumar"){
                        this.tipoOperacion=numero;
                        this.display = this.display.toString() + "+"
                        this.imprimirValores();
                    }
                    else{
                        if(numero==="restar"){
                            this.tipoOperacion=numero;
                            this.display = this.display.toString() + "-"
                            this.imprimirValores();
                        }
                        else{
                            if(numero==="multiplicar"){
                                this.tipoOperacion=numero;
                                this.display = this.display.toString() + "x"
                                this.imprimirValores();
                            }
                            else{
                                if(numero==="dividir"){
                                    this.tipoOperacion=numero
                                    this.display = this.display.toString() + "/"  
                                    this.imprimirValores();  
                                }
                                else{
                                    this.display = this.display.toString() + numero.toString();
                                    this.imprimirValores();                
                                }

                            }
                        }
                    }


                }
                
            } 
        }

        

        //this.resultado = this.calculador[this.tipoOperacion](num1, num2)

    }

    operar(){
        var i=0;
        var pos;

        if(this.display.includes("+") === true ){
            pos = this.display.indexOf("+");
        }
        else{
            if(this.display.includes("-") === true ){
                pos = this.display.indexOf("-");
            }
            else{
                if(this.display.includes("x") === true ){
                    pos = this.display.indexOf("x");
                }
                else{
                    pos = this.display.indexOf("/");
                }
            }
            
        }

        for(i; i<pos; i++){
            this.var1+=this.display.charAt(i);
        }

        i+=1;
        for(i; i<this.display.length; i++){
            this.var2+=this.display.charAt(i);
        }


        this.var1 = parseFloat(this.var1); this.var2 = parseFloat(this.var2);

        this.resultado = this.calculador[this.tipoOperacion](this.var1, this.var2);
        this.imprimirValores();

    }

    borrar(key){
        if(key === "AC"){
            this.display = "";
        }
        else{
            this.display = this.display.toString().slice(0,-1);
        }
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayValores.textContent = this.display;
 
        this.displayResultado.textContent = this.resultado;
    }
}