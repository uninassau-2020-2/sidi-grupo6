var salvaOpcao = 0



function f(opcao) {


  document.getElementsByClassName('dropdown')[0].classList.toggle('down');
  document.getElementsByClassName('arrow')[0].classList.toggle('gone');
  if (document.getElementsByClassName('dropdown')[0].classList.contains('down')) {
    setTimeout(function() {
      document.getElementsByClassName('dropdown')[0].style.overflow = 'visible'
    }, 500)
  } else {
    document.getElementsByClassName('dropdown')[0].style.overflow = 'hidden'
  }

salvaOpcao = opcao

}


function chamaFuncao(){
	

	if(salvaOpcao == 1){

		 cadastrarProduto();
		 salvaOpcao = 0
	}

	if(salvaOpcao == 2){

		idP = document.getElementById('id_produto').value 

		 buscaProduto(idP);
		 salvaOpcao = 0
	}

	if(salvaOpcao == 3){

		 atualizarProduto();
		 salvaOpcao = 0
	}

	if(salvaOpcao == 4){

		 deletarProduto();
		 salvaOpcao = 0
	}





}

function buscaProduto(idProduto) {
			if (idProduto != null ){

            document.getElementById('id_produto').value="...";
            document.getElementById('cd_produto').value="...";
            document.getElementById('nm_produto').value="...";
            document.getElementById('vl_produto').value="...";
            document.getElementById('tp_produto').value="...";
            document.getElementById('sn_ativo').value="...";

             
               var myHeaders = new Headers();

               var myInit = { method: 'GET',
               headers: { "Content-Type": "application/json; charset=UTF-8" },
               mode: 'cors',
               cache: 'default' };

 			   fetch('http://localhost:8080/api/produto/'+idProduto+'/json',myInit)
			  .then(function(response) {
  			   return response.json().then(data => {

	        document.getElementById('id_produto').value=(data.id_produto);
            document.getElementById('cd_produto').value=(data.cd_produto);
            document.getElementById('nm_produto').value=(data.nm_produto);
            document.getElementById('vl_produto').value=(data.vl_produto);
            document.getElementById('tp_produto').value=(data.tp_produto);
            document.getElementById('sn_ativo').value=(data.sn_ativo);
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

        	
      function cadastrarProduto() {

        	snAtivo = 'N'
        		
            cdProduto = document.getElementById('cd_produto').value
            nmProduto = document.getElementById('nm_produto').value
            snAtivo = document.getElementById('sn_ativo').value
            vlProduto = document.getElementById('vl_produto').value
            tpProduto = document.getElementById('tp_produto').value
 			
               var myHeaders = new Headers();

               var myInit = { method: 'POST',
               headers: { "Content-Type": "application/json; charset=UTF-8" },
               mode: 'cors',
               body: JSON.stringify({
               cd_produto: cdProduto,
               nm_produto: nmProduto,
               vl_produto: vlProduto,
               tp_produto: tpProduto,
               sn_ativo:   snAtivo
                     }),
               cache: 'default' };

 			   fetch('http://localhost:8080/api/produtoSave',myInit)
			  .then(function(response) {
  			   return response.json().then(data => {

  			   document.getElementById('id_produto').value=(data.id_produto);
               document.getElementById('cd_produto').value=(data.cd_produto);
               document.getElementById('nm_produto').value=(data.nm_produto);
               document.getElementById('vl_produto').value=(data.vl_produto);
               document.getElementById('sn_ativo').value=(data.sn_ativo);
               document.getElementById('tp_produto').value=(data.tp_produto);

  			   });

        });

        }; 

        function atualizarProduto() {

        		
        	idProduto = document.getElementById('id_produto').value
            cdProduto = document.getElementById('cd_produto').value
            nmProduto = document.getElementById('nm_produto').value
            snAtivo   = document.getElementById('sn_ativo').value
            vlProduto = document.getElementById('vl_produto').value
            tpProduto = document.getElementById('tp_produto').value

             
               var myHeaders = new Headers();

               var myInit = { method: 'PUT',
               headers: { "Content-Type": "application/json; charset=UTF-8" },
               mode: 'cors',
               body: JSON.stringify({
               id_produto: idProduto,
               cd_produto: cdProduto,
               nm_produto: nmProduto,
               vl_produto: vlProduto,
               tp_produto: tpProduto,
               sn_ativo:   snAtivo
                     }),
               cache: 'default' };

 			   fetch('http://localhost:8080/api/produtoUpdate',myInit)
			  .then(function(response) {
  			   return response.json()
        });

        };

        function deletarProduto() {

        		
        	idProduto = document.getElementById('id_produto').value
            cdProduto = document.getElementById('cd_produto').value
            nmProduto = document.getElementById('nm_produto').value
            snAtivo   = document.getElementById('sn_ativo').value
            vlProduto = document.getElementById('vl_produto').value
            tpProduto = document.getElementById('tp_produto').value
             
               var myHeaders = new Headers();

               var myInit = { method: 'DELETE',
               headers: { "Content-Type": "application/json; charset=UTF-8" },
               mode: 'cors',
               body: JSON.stringify({
               id_produto: idProduto,
               cd_produto: cdProduto,
               nm_produto: nmProduto,
               vl_produto: vlProduto,
               tp_produto: tpProduto,
               sn_ativo:   snAtivo
                     }),
               cache: 'default' };

 			   fetch('http://localhost:8080/api/produtoDelete',myInit)
			  .then(function(response) {
  			   
        });
			  LimparTela();

        }; 

        function LimparTela(){


			document.getElementById('id_produto').value=" ";
            document.getElementById('cd_produto').value=" ";
            document.getElementById('nm_produto').value=" ";
            document.getElementById('vl_produto').value=" ";
            document.getElementById('sn_ativo').value=" ";
            tpProduto = document.getElementById('tp_produto').value=" ";
        }