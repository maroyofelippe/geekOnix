//Utilização do Enter para trocar de campo. No HTML onKeyUp="tabenter(event,getElementById('utilizar Id'))" FUNCIONANDO//
function tabenter(event, campo) {
    var tecla = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if (tecla == 13) {
        campo.focus();
    }
}

function limpaFormAll() {
    document.getElementById('campo1').value = ("");
    document.getElementById('campo2').value = ("");
    document.getElementById('campo3').value = ("");
    document.getElementById('cep').value = ("");
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
    document.getElementById('inputAddress2').value = ("");
    document.getElementById('inputAddress3').value = ("");
    document.getElementById('telefone').value = ("");
    document.getElementById('email').value = ("");
    document.getElementById('password1').value = ("");
    document.getElementById('password2').value = ("");
    document.getElementById('gridCheck').value = ("");
    document.getElementById("msgCPF").innerHTML = "";
    document.getElementById("msgSenha").innerHTML = "";
    document.getElementById("msgemail").innerHTML = "";
}
//Coloca Nome e Sobrenome em Maiúsculo

function nomeUppercase() {
    var x = document.getElementById("campo1");
    x.value = x.value.replace(/[0-9]/g, '');
    x.value = x.value.toUpperCase();
}

function sobrenoUppercase() {
    var x = document.getElementById("campo2");
    x.value = x.value.replace(/[0-9]/g, '');
    x.value = x.value.toUpperCase();
}

//Testa o CPF FUNCIONANDO//
function testaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    resultadoInvalido = "";
    if (strCPF == "00000000000") {
        document.getElementById("msgCPF").innerHTML = "<font color='red'>CPF é inválido, pois está preenchido com 00000000000</font>";
        //alert("CPF é inválido, pois está preenchido com 00000000000");
        resultadoInvalido = "inválido";
    }
    for (i = 1; i <= 9; i++) {
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    }
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) {
        Resto = 0;
    }
    if (Resto != parseInt(strCPF.substring(9, 10))) {
        document.getElementById("msgCPF").innerHTML = "<font color='red'>CPF é inválido!!</font>";
        //alert("O número do CPF é inválido");
        resultadoInvalido = "inválido";
    }

    Soma = 0;
    for (i = 1; i <= 10; i++) {
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    }
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) {
        Resto = 0;
    }
    if (Resto != parseInt(strCPF.substring(10, 11))) {
        document.getElementById("msgCPF").innerHTML = "<font color='red'>CPF é inválido!!</font>";

        //alert("O número do CPF é inválido");
        resultadoInvalido = "inválido";
    }
    if (resultadoInvalido != "inválido") {
        document.getElementById("msgCPF").innerHTML = "<font color='green'>CPF Válido!!</font>";
        //alert("O número do CPF é VÁLIDO");
    }
}
//Testa o CEP e adiciona Cidade,Estado,Bairro... Utilizar no Id exatamente como está os nomes do Id para campo FUNCIONANDO// 
function limpa_formulário_cep() {
    document.getElementById('cep').value = ("");
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
    document.getElementById("msgCep").innerHTML = "";
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
        document.getElementById("msgCep").innerHTML = "<font color='green'>CEP válido!!</font>";
    } else {
        limpa_formulário_cep();
        document.getElementById("msgCep").innerHTML = "<font color='red'>CEP não encontrado!!</font>";
        //alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {
    var cep = valor.replace(/\D/g, '');
    if (cep != "") {
        var validacep = /^[0-9]{8}$/;
        if (validacep.test(cep)) {
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";
            //document.getElementById('ibge').value = "...";
            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);
        } else {
            limpa_formulário_cep();
            document.getElementById("msgCep").innerHTML = "<font color='red'>CEP Inválido!!</font>";
            alert("Formato de CEP inválido.");
        }
    } else {
        limpa_formulário_cep();
    }
}
//Fim do Testador de CEP//

//Adiciona () e - ao número digitado no campo telefone,para ajudar no HTML usar maxlength="11" FUNCIONANDO//
function mascaraDeTelefone(telefone) {
    const textoAtual = telefone.value;
    const isCelular = textoAtual.length == 11;
    let textoAjustado;
    if (isCelular) {
        const parte1 = textoAtual.slice(0, 2);
        const parte2 = textoAtual.slice(2, 7);
        const parte3 = textoAtual.slice(7, 11);
        textoAjustado = `(${parte1}) ${parte2}-${parte3}`
    } else {
        const parte1 = textoAtual.slice(0, 2);
        const parte2 = textoAtual.slice(2, 6);
        const parte3 = textoAtual.slice(6, 10);
        textoAjustado = `(${parte1}) ${parte2}-${parte3}`
    }

    telefone.value = textoAjustado;
}

function mascaraDeCep(cep) {
    const textoAtual = cep.value;
    const isCep = textoAtual.length == 8;
    let textoAjustado;
    if (isCep) {
        const parte1 = textoAtual.slice(0, 5);
        const parte2 = textoAtual.slice(5, 8);
        textoAjustado = `${parte1}-${parte2}`
    }

    cep.value = textoAjustado;
}

//Adiciona . e - ao CPF, NÃO ESTÁ FUNCIONANDO AINDA//
function mascaraDoCpf(cpf) {
    var cpf = document.getElementById("campo3");
    const textoAtual = cpf.value;
    const isCpf = textoAtual.length == 11;
    let textoAjustado;
    if (isCpf) {
        const parte1 = textoAtual.slice(0, 3);
        const parte2 = textoAtual.slice(3, 6);
        const parte3 = textoAtual.slice(6, 9);
        const parte4 = textoAtual.slice(9, 11);
        textoAjustado = `${parte1}.${parte2}.${parte3}-${parte4}`
    }
    cpf.value = textoAjustado;
}
//Fim do código testador de CPF//


function tiraHifen(telefone) {
    const textoAtual = telefone.value;
    const textoAjustado = textoAtual.replace(/\-\(\)/g, '');

    telefone.value = textoAjustado;
}

function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        document.getElementById("msgemail").innerHTML = "E-mail válido";
        //alert("E-mail válido");
    } else {
        document.getElementById("msgemail").innerHTML = "<font color='red'>E-mail inválido </font>";
        //alert("E-mail inválido");
    }
}

function cadstForm() {
    alert("Cadastro realizado com sucesso."); //SOMENTE TESTADOR//
    limpaFormAll();
}

function validatePassword() {

    var password = document.getElementById("password1")
    var confirm_password = document.getElementById("password2");

    if (password.value != confirm_password.value) {
        //confirm_password.setCustomValidity("Senhas diferentes!");
        document.getElementById("msgSenha").innerHTML = "<font color='red'>Senhas Diferentes</font>";

    } else {
        document.getElementById("msgSenha").innerHTML = "";
    }
}

function mostrarSenha() {
    var x = document.getElementById("password1");
    var y = document.getElementById("password2");
    if (x.type === "password" && y.type === "password") {
        x.type = "text";
        y.type = "text"
    } else {
        x.type = "password";
        y.type = "password"
    }
}

function userlogin(txtemail, txtpwd) {
    var emailtxt = txtemail;
    var pwdtxt = txtpwd;
    alert("Olá," + emailtxt + "seja bem vindo!");

}