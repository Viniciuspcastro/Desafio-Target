// OBS: Para consegui ter acesso ao JSON é necessario usar servidor local.
// Usando api XMLHttpRequest para fazer solicitações e pegar recursos.
let requestJson = './dados.json'; 
let request = new XMLHttpRequest();

request.open('GET', requestJson);
request.responseType = 'json';
request.send();

let jsonData

request.onload = function() {
  jsonData = request.response;
}

/* O for vai pegar todos os dias que tiverem o valor maior que 0 (linha27), aumentar a contagem
do dia útil (linha28), somar o valor a variavel media (linha29) e adiconar no array valores (linha30).
 */
function enviarValor() {
  let mediaMensal;
  let diaAbaixo;
  let diaAcima
  let diasUteis = 0;
  let media = 0;
  let valores = [];

  jsonData.map((element) => {
    if(element.valor > 0.0) {
      diasUteis += 1;
      media += element.valor;
      valores.push(element.valor);
    }
  })

  diaAcima = Math.max(...valores);
  diaAbaixo = Math.min(...valores);
  mediaMensal = media / diasUteis;
  document.getElementById('mediaMensal').innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(mediaMensal);
  document.getElementById('maiorDia').innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(diaAcima);;
  document.getElementById('menorDia').innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(diaAbaixo);;
}
