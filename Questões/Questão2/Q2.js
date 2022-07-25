let sequenciaFibonacci = [0, 1]; // Sequencia Fibonacci
let innerHTML = document.querySelector('#input'); // Input que recebe os valores inseridos pelo usuário

/**
 * pega sempre os 2 ultimos itens do arrey e soma-os (linha 10)
 * insere no array o valor somado (linha 11)
 */
function calculaSequenciaFibonacci() {
    for (let i = 0; i <= 100; i++) {
        let numerosSomados = sequenciaFibonacci.at(-1) + sequenciaFibonacci.at(-2); 
        sequenciaFibonacci.push(numerosSomados);  
    };

    /**
     * verifica se há valor inserido no input (para impedir que uma mensagem apareça caso o usuário 
     * clique no botao sem ter inserido nada.)
     * Se houver, verifica se o numero inserido pelo usuário está presente na sequencia Fibonacci,
     * se houver imprime no elemento resposta o texto com a resposta,
     * se não, imprime outra mensagem.
     */
    if(innerHTML.value) { 
        if (sequenciaFibonacci.includes(+innerHTML.value)) {
            document.getElementById('resposta').innerHTML = 
                `O Número ${innerHTML.value} está contido na sequência Fibonacci`; 
        } else {
            document.getElementById('resposta').innerHTML = 
                `O Número ${innerHTML.value} não pertence a sequência Fibonacci`;
        };
    }
}
