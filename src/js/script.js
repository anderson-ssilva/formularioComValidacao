const camposDoFormulario = document.querySelectorAll('#campoDoFormulario')

for (let contador = 0; contador < camposDoFormulario.length; contador++){
    camposDoFormulario[contador].addEventListener('blur', () => {
        if(camposDoFormulario[contador].value.length == 0){
            camposDoFormulario[contador].classList.remove('preenchido')
            camposDoFormulario[contador].classList.add('pendente')
        } else{
            camposDoFormulario[contador].classList.remove('pendente')
            camposDoFormulario[contador].classList.add('preenchido')
        }
    })  
}