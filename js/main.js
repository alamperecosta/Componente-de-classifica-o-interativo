let ativo = false;
const stateActive =  () => {
    const btn = document.querySelectorAll('button');
    const btnSubmit = document.querySelector('#avaliacao');
    btn.forEach((element) => {
        ativo = true;
        element.addEventListener('click', (e) => {
            if(ativo === true){
                element.style.background = '#FB7312';
                const nota = element.value ;
                const notaAvaliacao = document.querySelector(".msg>p");
                notaAvaliacao.textContent = ` You selected ${nota} out of 5`;
                ativo = false;
            }else {
                alert ('Por favor Realizar a sua avaliação');
            }  
        }) 
    })
    
    btnSubmit.addEventListener('click', () => {
        submit.classList.add('btn-active');
    })

};
stateActive();
const submit = document.querySelector('#avaliacao');

submit.addEventListener('click', ()=> {
    
    setInterval(() => {
    const notSucess = document.querySelector('.card-enviado');
    notSucess.style.visibility = 'visible';
    notSucess.classList.add('active-animation')
}, 2000)})



