const form = document.getElementById("form-calculadora");

function validaCampo(campoA, campoB){
    const valorA = campoA;
    const valorB = campoB;
    return  valorB - valorA > 0;
}

form.addEventListener('submit', function(e){
    let formEValido = false;
    e.preventDefault();

    const CampoDigitadoA = document.getElementById("campo-a");
    const CampoDigitadoB = document.getElementById("campo-b");
    const mensagemSucesso = `Parabéns! o valor do Campo B (${CampoDigitadoB.value}) é maior do que o campo A (${CampoDigitadoA.value})`;
    const mensagemTenteNovamente = `Que pena! o valor do Campo B (${CampoDigitadoB.value}) é menor ou igual a do que o campo A (${CampoDigitadoA.value}). Continue tentando!`;
    const containerMensagemSucesso = document.querySelector(".success-mensage");
    const containerMensagemErro = document.querySelector('.error-mensage');

    formEValido = validaCampo(CampoDigitadoA.value, CampoDigitadoB.value);    
    if(formEValido){
        containerMensagemErro.style.display = 'none';
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        CampoDigitadoA.value = '';
        CampoDigitadoB.value = '';

        
    }else{
        containerMensagemSucesso.style.display = 'none';
        containerMensagemErro.innerHTML = mensagemTenteNovamente;
        containerMensagemErro.style.display = 'block';
        CampoDigitadoA.value = '';
        CampoDigitadoB.value = '';       
    }
});

console.log(form);

