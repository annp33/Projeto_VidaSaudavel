/*************** INÍCIO AJAX ***************/ 

// evento ready() - lê os dados na tela (documento html) SEMPRE

function Cadastrar(){

    // lê os dados do formulário
    let parametros = {
        Nome: $("#nome").val(),
        Email: $("#email").val(),
        Mensagem: $("mensagem").val(),
    }

    // Envia os dados do formulário para o servidor
    $.post("/Home/Cadastrar",parametros)

        .done(
            //alguns tratamentos aqui para receber que aqui tudo está bem
            function(retorno){
                if(retorno.status =="OK"){
                    $("#frmCadastro").after("<h5>Cadastro realizado com sucesso!</h5>"); 
                    $("#frmCadastro").hide(); // oculta o formulário de cadastro.
                }else{
                    $("#frmCadastro").after("<h5>"+retorno.mensagem+"</h5>");
                    // o after mostra a mensagem após o formulário de cadastro.
                }
            }
        )
}

//função para ler os dados informados no formulário após a ação submit do botão
$(document).ready(function(){
    $("#frmCadastro").submit(
        function(e){
            e.preventDefault();
            Cadastrar();
        }
    )
}); 

/*************** FIM AJAX ***************/ 



/*************** INÍCIO POP-UPS ***************/ 

const link1 = document.querySelector('#agenda');
const link2 = document.querySelector('#dicas');
const link3 = document.querySelector('#apoiadores');

const popup1 = document.querySelector('.popup-wrapper1');
const popup2 = document.querySelector('.popup-wrapper2');
const popup3 = document.querySelector('.popup-wrapper3');

link1.addEventListener('click', () => {
    popup1.style.display = 'block';
})

link2.addEventListener('click', () => {
    popup2.style.display = 'block';
})

link3.addEventListener('click', () => {
    popup3.style.display = 'block';
})

var closeButton1 = document.querySelector('#botao1');
var closeButton2 = document.querySelector('#botao2');
var closeButton3 = document.querySelector('#botao3');

closeButton1.addEventListener('click', function() {
    popup1.style.display = 'none';
});

closeButton2.addEventListener('click', function() {
    popup2.style.display = 'none';
});

closeButton3.addEventListener('click', function() {
    popup3.style.display = 'none';
});

/*************** FIM POP-UPS ***************/ 











