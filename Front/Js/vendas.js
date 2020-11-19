function f() {
    
    setaVl()
    document.getElementsByClassName('dropdown')[0].classList.toggle('down');
    document.getElementsByClassName('arrow')[0].classList.toggle('gone');
    if (document.getElementsByClassName('dropdown')[0].classList.contains('down')) {
      setTimeout(function() {
        document.getElementsByClassName('dropdown')[0].style.overflow = 'visible'
      }, 500)

    } else {
      document.getElementsByClassName('dropdown')[0].style.overflow = 'hidden'
      
    }
    
  }


function buscaProduto(idProduto) {
    if (idProduto != null ){

    document.getElementById('nm_produto').value="...";
    document.getElementById('vl_produto').value="...";


     
       var myHeaders = new Headers();

       var myInit = { method: 'GET',
       headers: { "Content-Type": "application/json; charset=UTF-8" },
       mode: 'cors',
       cache: 'default' };

        fetch('http://localhost:8080/api/produto/'+idProduto+'/json',myInit)
      .then(function(response) {
         return response.json().then(data => {

    document.getElementById('nm_produto').value=(data.nm_produto);
    document.getElementById('vl_produto').value=(data.vl_produto);

});
    
    


});

}//FIM IF
 else{

       var myHeaders = new Headers();

       var myInit = { method: 'GET',
       headers: { "Content-Type": "application/json; charset=UTF-8" },
       mode: 'cors',
       cache: 'default' };

        fetch('http://localhost:8080/api/produtos',myInit)
      .then(function(response) {
         return response.json().then(data => {

    document.getElementById('id_produto').value=(data.id_produto);
    document.getElementById('cd_produto').value=(data.cd_produto);
    document.getElementById('nm_produto').value=(data.nm_produto);
    document.getElementById('vl_produto').value=(data.vl_produto);
    document.getElementById('sn_ativo').value=(data.sn_ativo);
    });
 });
      
}  

}; 

function setaVl(){
    
    var valor = 0.0
    var quantidade = 0.0 
    var desconto = 0.0
    
    resultado = 0.0 
    valor = document.getElementById('vl_produto').value
    quantidade = document.getElementById('quantidade').value
    desconto = document.getElementById('desconto').value
    if(desconto != null){

        resultado = (valor * quantidade) - desconto
        document.getElementById('valor_total_final').value = resultado 
        
    }
    else{
        resultado = valor * quantidade
        document.getElementById('valor_total_final').value = resultado 
    }


}

function LimparTela(){
  document.getElementById('id_produto').value=" ";
  document.getElementById('valor_total_final').value=" ";
  document.getElementById('nm_produto').value=" ";
  document.getElementById('desconto').value=" ";
  document.getElementById('vl_produto').value=" ";
  document.getElementById('quantidade').value=" ";
}

function inserirPedido(){
    snAtivo = 'N'
        		
            vltotproduto = document.getElementById('valor_total_final').value
            nmProduto = document.getElementById('nm_produto').value
            desconto = document.getElementById('desconto').value
            vlProduto = document.getElementById('vl_produto').value
            quantidade = document.getElementById('quantidade').value
 			
               var myHeaders = new Headers();

               var myInit = { method: 'POST',
               headers: { "Content-Type": "application/json; charset=UTF-8" },
               mode: 'cors',
               body: JSON.stringify({
               vl_produto: vlProduto,
               quantidade: quantidade,
               nm_produto: nmProduto,
               vl_desconto: desconto,
               vl_total: vltotproduto
                     }),
               cache: 'default' };

 			   fetch('http://localhost:8080/api/pedidoSave',myInit)
			  .then(function(response) {
  			   return response.json().then(data => {

  			      document.getElementById('id_produto').value=(data.id_produto);
              document.getElementById('valor_total_final').value=(data.vl_total);
              document.getElementById('nm_produto').value=(data.nm_produto);
              document.getElementById('desconto').value=(data.vl_desconto);
              document.getElementById('vl_produto').value=(data.vl_produto);
              document.getElementById('quantidade').value=(data.quantidade);

  			   });

        });
        LimparTela();
        alert("PEDIDO CRIADO!!!!!")
        

}





    
