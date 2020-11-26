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

		 cadastrarVendedor();
		 salvaOpcao = 0
	}

	if(salvaOpcao == 2){

		idP = document.getElementById('cd_vendedor').value 

		 buscaVendedoridP(idP);
		 salvaOpcao = 0
	}

	if(salvaOpcao == 3){

		 atualizarVendedor();
		 salvaOpcao = 0
	}

	if(salvaOpcao == 4){

		 deletarVendedor();
		 salvaOpcao = 0
	}





}

function buscaVendedoridP(idVendedor) {
			if (idVendedor != null ){

            document.getElementById('cd_vendedor').value="...";
            document.getElementById('nm_vendedor').value="...";
            document.getElementById('login').value="...";
            document.getElementById('senha').value="...";
            document.getElementById('sn_ativo').value="...";

             
               var myHeaders = new Headers();

               var myInit = { method: 'GET',
               headers: { "Content-Type": "application/json; charset=UTF-8" },
               mode: 'cors',
               cache: 'default' };

 			   fetch('http://localhost:8080/api/vendedor/'+idVendedor+'/json',myInit)
			  .then(function(response) {
          if (response.status==200){
  			   return response.json().then(data => {

	        document.getElementById('cd_vendedor').value=(data.cd_vendedor);
            document.getElementById('nm_vendedor').value=(data.nm_vendedor);
            document.getElementById('login').value=(data.login);
            document.getElementById('senha').value="******";
            document.getElementById('sn_ativo').value=(data.sn_ativo);
});
}else{
  return alert("NOT FOUND")
}         
            
        

        });

	}//FIM IF
		 else{

               var myHeaders = new Headers();

               var myInit = { method: 'GET',
               headers: { "Content-Type": "application/json; charset=UTF-8" },
               mode: 'cors',
               cache: 'default' };

 			   fetch('http://localhost:8080/api/vendedor',myInit)
			  .then(function(response) {
  			   return response.json().then(data => {

	        document.getElementById('cd_vendedor').value=(data.cd_vendedor);
            document.getElementById('nm_vendedor').value=(data.nm_vendedor);
            document.getElementById('login').value=(data.login);
            document.getElementById('senha').value=(data.senha);
            document.getElementById('sn_ativo').value=(data.sn_ativo);
            });
		 });
			  
	   }  



        }; 

        	
      function cadastrarVendedor() {

        	snAtivo = 'N'
        		
            
            nmVendedor = document.getElementById('nm_vendedor').value
            snAtivo = document.getElementById('sn_ativo').value
            login = document.getElementById('login').value
            senha = document.getElementById('senha').value
 			
               var myHeaders = new Headers();

               var myInit = { method: 'POST',
               headers: { "Content-Type": "application/json; charset=UTF-8" },
               mode: 'cors',
               body: JSON.stringify({
               nm_vendedor: nmVendedor,
               sn_ativo: snAtivo,
               login: login,
               senha: senha
                     }),
               cache: 'default' };

 			   fetch('http://localhost:8080/api/vendedorSave',myInit)
			  .then(function(response) {
  			   return response.json().then(data => {

  			   document.getElementById('cd_vendedor').value=(data.cd_vendedor);
               document.getElementById('nm_vendedor').value=(data.nm_vendedor);
               document.getElementById('login').value=(data.login);
               document.getElementById('senha').value=(data.senha);
               document.getElementById('sn_ativo').value=(data.sn_ativo);
               if(data.cd_vendedor != null){
                alert("CADASTRADO COM SUCESSO")
              }else{
                alert("ERRO NO CADASTRO")
              }

  			   });

        });

        }; 

        function atualizarVendedor() {

        
            snAtivo = 'N'
        		
            cdVendedor = document.getElementById('cd_vendedor').value
            nmVendedor = document.getElementById('nm_vendedor').value
            snAtivo = document.getElementById('sn_ativo').value
            login = document.getElementById('login').value
            senha = document.getElementById('senha').value
 			
               var myHeaders = new Headers();

               var myInit = { method: 'PUT',
               headers: { "Content-Type": "application/json; charset=UTF-8" },
               mode: 'cors',
               body: JSON.stringify({
               cd_vendedor: cdVendedor,
               nm_vendedor: nmVendedor,
               sn_ativo: snAtivo,
               login: login,
               senha: senha
                     }),
               cache: 'default' };

 			   fetch('http://localhost:8080/api/vendedorUpdate',myInit)
			  .then(function(response) {
  			   return response.json().then(data => {

  			   document.getElementById('cd_vendedor').value=(data.cd_vendedor);
               document.getElementById('nm_vendedor').value=(data.nm_vendedor);
               document.getElementById('login').value=(data.login);
               document.getElementById('senha').value="**********"
               document.getElementById('sn_ativo').value=(data.sn_ativo);
               if(data.cd_fornecedor != null){
                alert("ALTERADO COM SUCESSO")
              }else{
                alert("ERRO NA ALTERAÇÃO")
              }

  			   });

        });

        };

        function deletarVendedor() {

        		
     
        		
            cdVendedor = document.getElementById('cd_vendedor').value
            nmVendedor = document.getElementById('nm_vendedor').value
            snAtivo = document.getElementById('sn_ativo').value
            login = document.getElementById('login').value
            senha = document.getElementById('senha').value
 			
               var myHeaders = new Headers();

               var myInit = { method: 'DELETE',
               headers: { "Content-Type": "application/json; charset=UTF-8" },
               mode: 'cors',
               body: JSON.stringify({
               cd_vendedor: cdVendedor,
               nm_vendedor: nmVendedor,
               sn_ativo: snAtivo,
               login: login,
               senha: senha
                     }),
               cache: 'default' };

 			   fetch('http://localhost:8080/api/vendedorDelete',myInit)
			  .then(function(response) {
  			   return response.json().then(data => {

  			   document.getElementById('cd_vendedor').value=(data.cd_vendedor);
               document.getElementById('nm_vendedor').value=(data.nm_vendedor);
               document.getElementById('login').value=(data.login);
               document.getElementById('senha').value="*******"
               document.getElementById('sn_ativo').value=(data.sn_ativo);
               alert("DELETADO COM SUCESSO")

  			   });

        });
			  LimparTela();

        }; 

        function LimparTela(){


			document.getElementById('cd_vendedor').value=null;
            document.getElementById('nm_vendedor').value=null;
            document.getElementById('login').value=null;
            document.getElementById('sn_ativo').value=null;
            document.getElementById('senha').value=null;
            
        }