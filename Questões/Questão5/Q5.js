let innerHTML = document.querySelector('#input'); // Input que recebe as palavras inseridas pelo usuário

/* A palavra inseria é atribuida a variavel n(), depois é pego o tamanho e usado no for para determinar
onde iniciar a contagem. As letras são adicionadas ao NovoArray. 
*/
function inverterString(){
    let n=innerHTML.value;
    let ultimoItem = n.length;
    let NovoArray=[''];
        for(let i = ultimoItem; i >=0; i--) {
             NovoArray+=n[i];
        };
        
    if(innerHTML.value) { 
            document.getElementById('resposta').innerHTML = 
                `A paravra fica: ${NovoArray}`; 
            };

        
}
    