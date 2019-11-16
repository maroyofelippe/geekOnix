//Utilização do Enter para trocar de campo. No HTML onKeyUp="tabenter(event,getElementById('utilizar Id'))" FUNCIONANDO//
function tabenter(event, campo) {
    var tecla = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if (tecla == 13) {
        campo.focus();
    }
}

//Testa o CPF FUNCIONANDO//
function testaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    resultadoInvalido = "";
    if (strCPF == "00000000000") {
        alert("CPF é inválido, pois está preenchido com 00000000000");
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
        alert("O número do CPF é inválido");
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
        alert("O número do CPF é inválido");
        resultadoInvalido = "inválido";
    }
    if (resultadoInvalido != "inválido") {
        alert("O número do CPF é VÁLIDO");
    }
}
//Adiciona . e - ao CPF, NÃO ESTÁ FUNCIONANDO AINDA//
/*function mascaraDoCpf(strCPF) {
    const textoAtual = strCPF.value;
    const isCpf = textoAtual.length == 11;
    let textoAjustado;
    if (isCpf) {
        const parte1 = textoAtual.slice(0, 3);
        const parte2 = textoAtual.slice(3, 6);
        const parte3 = textoAtual.slice(6, 9);
        const parte4 = textoAtual.slice(9, 11);
        textoAjustado = `${parte1}.${parte2}.${parte3}-${parte4}`
        strCPF.value = textoAjustado;
    }
}*/
//Fim do código testador de CPF//

//Testa o CEP e adiciona Cidade,Estado,Bairro... Utilizar no Id exatamente como está os nomes do Id para campo FUNCIONANDO// 
function limpa_formulário_cep() {
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
    document.getElementById('ibge').value = ("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {

        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
        document.getElementById('ibge').value = (conteudo.ibge);
    } else {

        limpa_formulário_cep();
        alert("CEP não encontrado.");
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
            document.getElementById('ibge').value = "...";

            var script = document.createElement('script');


            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            document.body.appendChild(script);

        } else {

            limpa_formulário_cep();
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

function tiraHifen(telefone) {
    const textoAtual = telefone.value;
    const textoAjustado = textoAtual.replace(/\-\(\)/g, '');

    telefone.value = textoAjustado;
}


function cadstForm() {
    alert("Você acabou de se cadastrar."); //SOMENTE TESTADOR//
}