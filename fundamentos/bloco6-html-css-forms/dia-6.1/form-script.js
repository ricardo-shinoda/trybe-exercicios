

window.onload = function () {
    let subButton = document.querySelector('#sub');
    subButton.addEventListener('click', handlingSubmit);
    let clearButton = document.querySelector('#clean');
    clearButton.addEventListener('click', clearAll);
};


function clearAll () {
    let inputForm = document.querySelectorAll('input');//aqui pode ser as TAGS
    let inputText = document.querySelector('textarea'); //aqui pode ser os TYPES
    for (let index = 0; index < inputForm.length; index += 1) {
        let userInput = inputForm[index];
        userInput.value = '';
        userInput.checked = false;
    }
    inputText.value = '';
}

function invInput () {
    let email = documento.querySelector('#input-email').value.length;
    let invEmail = email < 10 || email > 50;

    let name = documento.querySelector('#nome-completo').value.length;
    let invName = name < 10 || name > 40;

    let text = document.querySelector('#text').value.length;
    let invText = text > 500;

    if (invEmail === true || invName === true || invText === true) {
        return false;
    }
    else {
        return true;
    }
}

function handlingSubmit (event) {
    event.preventDefault();
    let validation = invInput();
    if (validation === false) {
        alert('Dados inválidos');
    }
    else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    }
}


import JustValidate from 'just-validate';

const validate = new JustValidate('#form');