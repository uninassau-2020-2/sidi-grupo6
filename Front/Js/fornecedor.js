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

		 cadastrarFornecedor();
		 salvaOpcao = 0
	}

	if(salvaOpcao == 2){

		idP = document.getElementById('cd_fornecedor').value 

		 buscaFornecedoridP(idP);
		 salvaOpcao = 0
	}

	if(salvaOpcao == 3){

		 atualizarFornecedor();
		 salvaOpcao = 0
	}

	if(salvaOpcao == 4){

		 deletarFornecedor();
		 salvaOpcao = 0
	}





}

function buscaFornecedoridP(idFornecedor) {
			if (idFornecedor != null ){

            document.getElementById('cd_fornecedor').value="...";
            document.getElementById('cnpj_cpf').value="...";
            document.getElementById('nm_fantasia').value="...";
            document.getElementById('email').value="...";
            document.getElementById('cep').value="...";
            document.getElementById('estado').value="...";
            document.getElementById('contato').value="...";
            document.getElementById('sn_ativo').value="...";

             
               var myHeaders = new Headers();

               var myInit = { method: 'GET',
               headers: { "Content-Type": "application/json; charset=UTF-8" },
               mode: 'cors',
               cache: 'default' };

 			   fetch('http://localhost:8080/api/fornecedor/'+idFornecedor+'/json',myInit)
			  .then(function(response) {
  			   return response.json().then(data => {

	        document.getElementById('cd_fornecedor').value=(data.cd_fornecedor);
            document.getElementById('cnpj_cpf').value=(data.cnpj_cpf);
            document.getElementById('nm_fantasia').value=(data.nome_fantasia);
            document.getElementById('email').value=(data.email);
            document.getElementById('cep').value=(data.cep);
            document.getElementById('estado').value=(data.estado);
            document.getElementById('contato').value=(data.contato);
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

 			   fetch('http://localhost:8080/api/fornecedor',myInit)
			  .then(function(response) {
  			   return response.json().then(data => {

	        document.getElementById('cd_fornecedor').value=(data.cd_fornecedor);
            document.getElementById('cnpj_cpf').value=(data.cnpj_cpf);
            document.getElementById('nm_fantasia').value=(data.nome_fantasia);
            document.getElementById('email').value=(data.email);
            document.getElementById('cep').value=(data.cep);
            document.getElementById('estado').value=(data.estado);
            document.getElementById('contato').value=(data.contato);
            document.getElementById('sn_ativo').value=(data.sn_ativo);
            });
		 });
			  
	   }  



        }; 

        	
      function cadastrarFornecedor() {

        	snAtivo = 'N'
        		
            cnpj_cpf = document.getElementById('cnpj_cpf').value
            nmFantasia = document.getElementById('nm_fantasia').value
            snAtivo = document.getElementById('sn_ativo').value
            email = document.getElementById('email').value
            cep = document.getElementById('cep').value
            estado = document.getElementById('estado').value
            contato = document.getElementById('contato').value
 			
               var myHeaders = new Headers();

               var myInit = { method: 'POST',
               headers: { "Content-Type": "application/json; charset=UTF-8" },
               mode: 'cors',
               body: JSON.stringify({
               cnpj_cpf: cnpj_cpf,
               nome_fantasia: nmFantasia,
               sn_ativo: snAtivo,
               email: email,
               estado: estado,
               cep: cep,
               contato:contato
                     }),
               cache: 'default' };

 			   fetch('http://localhost:8080/api/fornecedorSave',myInit)
			  .then(function(response) {
  			   return response.json().then(data => {

  			   document.getElementById('cd_fornecedor').value=(data.cd_fornecedor);
               document.getElementById('cnpj_cpf').value=(data.cnpj_cpf);
               document.getElementById('nm_fantasia').value=(data.nome_fantasia);
               document.getElementById('email').value=(data.email);
               document.getElementById('cep').value=(data.cep);
               document.getElementById('estado').value=(data.estado);
               document.getElementById('contato').value=(data.contato);
               document.getElementById('sn_ativo').value=(data.sn_ativo);

  			   });

        });

        }; 

        function atualizarFornecedor() {

        
            cd_fornecedor = document.getElementById('cd_fornecedor').value
            cnpj_cpf = document.getElementById('cnpj_cpf').value
            nmFantasia = document.getElementById('nm_fantasia').value
            snAtivo = document.getElementById('sn_ativo').value
            email = document.getElementById('email').value
            cep = document.getElementById('cep').value
            estado = document.getElementById('estado').value
            contato = document.getElementById('contato').value
 			
               var myHeaders = new Headers();

               var myInit = { method: 'PUT',
               headers: { "Content-Type": "application/json; charset=UTF-8" },
               mode: 'cors',
               body: JSON.stringify({
               cd_fornecedor: cd_fornecedor,
               cnpj_cpf: cnpj_cpf,
               nome_fantasia: nmFantasia,
               sn_ativo: snAtivo,
               email: email,
               estado: estado,
               cep: cep,
               contato:contato
                     }),
               cache: 'default' };

 			   fetch('http://localhost:8080/api/fornecedorUpdate',myInit)
			  .then(function(response) {
  			   return response.json().then(data => {

  			       document.getElementById('cd_fornecedor').value=(data.cd_fornecedor);
               document.getElementById('cnpj_cpf').value=(data.cnpj_cpf);
               document.getElementById('nm_fantasia').value=(data.nome_fantasia);
               document.getElementById('email').value=(data.email);
               document.getElementById('cep').value=(data.cep);
               document.getElementById('estado').value=(data.estado);
               document.getElementById('contato').value=(data.contato);
               document.getElementById('sn_ativo').value=(data.sn_ativo);

  			   });

        });

        };

        function deletarFornecedor() {

        		
          
        	cd_fornecedor = document.getElementById('cd_fornecedor').value	
          cnpj_cpf = document.getElementById('cnpj_cpf').value
          nmFantasia = document.getElementById('nm_fantasia').value
          snAtivo = document.getElementById('sn_ativo').value
          email = document.getElementById('email').value
          cep = document.getElementById('cep').value
          estado = document.getElementById('estado').value
          contato = document.getElementById('contato').value
     
             var myHeaders = new Headers();

             var myInit = { method: 'DELETE',
             headers: { "Content-Type": "application/json; charset=UTF-8" },
             mode: 'cors',
             body: JSON.stringify({
             cd_fornecedor: cd_fornecedor,
             cnpj_cpf: cnpj_cpf,
             nome_fantasia: nmFantasia,
             sn_ativo: snAtivo,
             email: email,
             estado: estado,
             cep: cep,
             contato:contato
                   }),
             cache: 'default' };

        fetch('http://localhost:8080/api/fornecedorDelete',myInit)
      .then(function(response) {
         return response.json().then(data => {

         document.getElementById('cd_fornecedor').value=(data.cd_fornecedor);
             document.getElementById('cnpj_cpf').value=(data.cnpj_cpf);
             document.getElementById('nm_fantasia').value=(data.nome_fantasia);
             document.getElementById('email').value=(data.email);
             document.getElementById('cep').value=(data.cep);
             document.getElementById('estado').value=(data.estado);
             document.getElementById('contato').value=(data.contato);
             document.getElementById('sn_ativo').value=(data.sn_ativo);

         });

      });
			  LimparTela();

        }; 

        function LimparTela(){


			document.getElementById('cd_fornecedor').value=" ";
            document.getElementById('cnpj_cpf').value=" ";
            document.getElementById('nm_fantasia').value=" ";
            document.getElementById('email').value=" ";
            document.getElementById('sn_ativo').value=" ";
            document.getElementById('email').value=" ";
            document.getElementById('estado').value=" ";
            document.getElementById('cep').value=" ";
            document.getElementById('contato').value=" ";
        }