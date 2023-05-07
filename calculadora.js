document.addEventListener('DOMContentLoaded', function () {
    const pantalla = document.querySelector('.screen');
    const botones = document.querySelectorAll('.btn');
    const operators = document.querySelectorAll('.operator');

    function buttonClick() {
        const value = this.value;
        pantalla.value += value;
    }

    function operatorClick() {
        const value = this.value;
        pantalla.value += value;
    }

    function clearScreen() {
        pantalla.value = '';
    }

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

    operators[0].addEventListener('click', operatorClick);
    operators[1].addEventListener('click', operatorClick);
    operators[2].addEventListener('click', operatorClick);
    operators[3].addEventListener('click', operatorClick);
    operators[4].addEventListener('click', operatorClick);

});


