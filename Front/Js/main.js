function gerarPDF(formato){
  var myInit = { method: 'GET',
  headers: { "Content-Type": "application/json; charset=UTF-8" },
  mode: 'cors',
  cache: 'default' };  

  fetch('http://localhost:8080/api/geraReport/pdf',myInit)
  .then(function(response) {
    if(response.status == 200){
    return alert(response.responseText)}
    else{
    alert("Não foi possivel Gerar o Relatório");  
    return ;
    }
 });
}

  
function gerarHTML(formato){

  var myInit = { method: 'GET',
  headers: { "Content-Type": "application/json; charset=UTF-8" },
  mode: 'cors',
  cache: 'default' };  

  fetch('http://localhost:8080/api/geraReport/html',myInit)
  .then(function(response) {
    if(response.status == 200){
    return window.location = "C:\\Users\\Roberto\\Desktop\\Report\\Extrato de Vendas.html";}
    else{
    alert("Não foi possivel Gerar o Relatório");  
    return ;
    }
 });
}

  