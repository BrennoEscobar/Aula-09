// criando uma calculadora
function calculadora(){
    //definindo as operações e pegando valor de entrada do usuário
    //usaremos o "/n"
    const operacao = Number(prompt('Escolha uma opção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - pontenciação (**)\n '))

    //verificando se a operação é válida
    if (!operacao || operacao >= 7) {
        alert('Erro - Operação Inválida!');
        calculadora();
    } else{
        //definindo variáveis - todas as entradas devem ser tipo Number
        let n1 = Number(prompt('Insira o primeiro valor: '));
        let n2 = Number(prompt('Insira o segundo valor: '));
        let resultado;
        //verificando se as variáveis são válidas
        if (!n1 || !n2) {
            alert('Erro - Parâmetros Inválidos');
            calculadora();
        } else {
            //definindo as funções
            function soma() {
                resultado = n1 + n2;
                //mostrando o resultado usando template strings
                alert(`${n1} + ${n2} = ${resultado}`);
                //dando a opção de chamar uma nova operação
                novaOperacao();
            }
            function subtração() {
                resultado = n1 - n2;
                //mostrando o resultado usando template strings
                alert(`${n1} - ${n2} = ${resultado}`);
                //dando a opção de chamar uma nova operação
                novaOperacao();
            }
            function multiplicação() {
            resultado = n1 * n2;
            //mostrando o resultado usando template strings
            alert(`${n1} * ${n2} = ${resultado}`);
            //dando a opção de chamar uma nova operação
            novaOperacao();
            }
            function divisãoreal() {
            resultado = n1 / n2;
            //mostrando o resultado usando template strings
            alert(`${n1} / ${n2} = ${resultado}`);
            //dando a opção de chamar uma nova operação
            novaOperacao();
            }
            function divisãointeira() {
                resultado = n1 % n2;
                //mostrando o resultado usando template strings
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                //dando a opção de chamar uma nova operação
                novaOperacao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                //mostrando o resultado usando template strings
                alert(`${n1} elevado á ${n2}ª potência é ${resultado}`);
                //dando a opção de chamar uma nova operação
                novaOperacao();
            }
            // nova operação
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
                if (opcao == 1){
                    calculadora();
                } else if (opcao == 2){
                    alert('Até mais!');
                } else {
                    alert('Digite uma opção válida!');
                    novaOperacao();
                }
            }
        }
    }
    // escolhendo uma operação
    // usando if && else
    if (operacao == 1) {
        soma();
    }else if (operacao == 2) {
        subtração();
    }else if (operacao == 3) {
        multiplicação();
    }else if (operacao == 4) {
        divisãoreal();
    }else if (operacao == 5) {
        divisãointeira();
    }else if (operacao == 6) {
        potenciacao();
    }

    // usando switch case como alternativa (comentar um dois dois)
    /*
    switch (operacao){
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisaoreal();
            break;
        case 5:
            divisaointeira();
            break;
        case 6:
            potenciacao();
            break;
    }
*/
}
calculadora();
