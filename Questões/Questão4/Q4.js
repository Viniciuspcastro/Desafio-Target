let select = document.querySelector("#options") // Recebe a opção escolhida do select
let total= 180759.98


/*Valores definidos no value e quando selecionado para obter o resultado, é atribuido
ao a variavel valor para fazer a operação de porcentagem*/
function percentual(){
    let valor = select.value
    let por=((valor/total)*100)
    let porcetagem= parseFloat(por.toFixed(2))
    
    if(select.value) { 
        document.getElementById('resposta').innerHTML = 
            `A porcentagem é: ${porcetagem}%`; 
        };
   
}