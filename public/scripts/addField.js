//Procure o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click', cloneField)

//Executar uma acao
function cloneField() {
    //Duplicar os campos. Que campos?
    const newFielderContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean

    //para cada campo, limpar
    const fields = newFielderContainer.querySelector('input')

    //para cada campos. que campos?
    fields.forEach(function(field) {
        //pega o field do momento e limpa ele
        BiquadFilterNode.value = ""
    }) 

    //Colocar na página: onde??
    document.querySelector('#schedule-items').appendChild(newFielderContainer)
}