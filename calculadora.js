document.addEventListener('DOMContentLoaded', function () {
    //metemos los botones,pantalla y operadores en un query
    const pantalla = document.querySelector('.screen');
    const botones = document.querySelectorAll('.btn');
    const operators = document.querySelectorAll('.operator');

    //les creamos listeners a cada boton
    botones[0].addEventListener('click', buttonClick);
    botones[1].addEventListener('click', buttonClick);
    botones[2].addEventListener('click', buttonClick);
    botones[3].addEventListener('click', buttonClick);
    botones[4].addEventListener('click', buttonClick);
    botones[5].addEventListener('click', buttonClick);
    botones[6].addEventListener('click', buttonClick);
    botones[7].addEventListener('click', buttonClick);
    botones[8].addEventListener('click', buttonClick);
    botones[9].addEventListener('click', buttonClick);
    botones[10].addEventListener('click', buttonClick);

    //le creamos listeners a cada operador
    operators[0].addEventListener('click', operatorClick);
    operators[1].addEventListener('click', operatorClick);
    operators[2].addEventListener('click', operatorClick);
    operators[3].addEventListener('click', operatorClick);
    operators[4].addEventListener('click', operatorClick);
    operators[5].addEventListener('click', operatorClick);
    operators[6].addEventListener('click', operatorClick);
    operators[7].addEventListener('click', operatorClick);
    operators[8].addEventListener('click', operatorClick);

    //cuando haga click en un boton numerico o decimal se añadira a la pantalla
    function buttonClick() {
        const value = this.value;
        pantalla.value += value;
    }
    //cuando se haga click en un operador se sume a la pantalla
    function operatorClick() {
        const value = this.value;
        if (value === 'log') {
            pantalla.value += 'log10(';
        } else {
            pantalla.value += value;
        }
    }
    //funcion que calcula el logaritmo 
    function calcularLog() {
    try {
        //quita las letras del log de la funcion
        const valor = pantalla.value.substring(6);
        const result = Math.log10(valor);
        pantalla.value = result;
    } catch (error) {
        pantalla.value = 'Error en el logaritmo';
    }
}
    //funcion que calcula la potencia
   function calcularpotenc(){
    try{
        let valor=pantalla.value;
        let sinsimbolo = valor.replace("^", "");
        let numero= parseInt(sinsimbolo);
        numero=numero**2;
        pantalla.value = numero;
    }catch{
        pantalla.value="Error"
    }
   }
   //funcion que calcula el seno
   function calcularsen(){
    try {
        let valor = pantalla.value;
        let sinsimbolo = valor.replace("sen", "");
        let numero = parseFloat(sinsimbolo);
        numero = Math.sin(numero);
        pantalla.value = numero;
      } catch (error) {
        pantalla.value = "Error";
      }
   }
   //funcion que calcula el coseno
   function calcularcos(){
    try {
        let valor = pantalla.value;
        let sinsimbolo = valor.replace("cos", "");
        let numero = parseFloat(sinsimbolo);
        numero = Math.cos(numero);
        pantalla.value = numero;
      } catch (error) {
        pantalla.value = "Error";
      }
   }

   //funcion que calcula y redirige a la funcion correspondiente en caso que sea seno, coseno, logaritmo o potencia
    function Calcular() {
        if (pantalla.value.includes('log10')) {
            calcularLog();
        } else {
            if(pantalla.value.includes('^')){
                calcularpotenc();
            }else{
                if(pantalla.value.includes('sen')){
                    calcularsen();
                }else{
                    if(pantalla.value.includes('cos')){
                        calcularcos();
                    }else{ 
        try {
            const result = eval(pantalla.value);
            pantalla.value = result;
        } catch (error) {
            pantalla.value = 'Error';
        }
    }
            }}
        }
    }
    // cuando presione la C la pantalla se quedara en blanco
    function clearScreen() {
        pantalla.value = '';
    }

    //cuando presione el = les llevara a la funcion calcular
    const equalBtn = document.getElementById('=');
    equalBtn.addEventListener('click', Calcular);

    //cuando presione la c les llevara a la funcion de clear screen
    const clearBtn = document.querySelector('input[value="C"]');
    clearBtn.addEventListener('click', clearScreen);
});


