function validar_login(event) {
    email = document.getElementById("email").value
    pass = document.getElementById("senha").value
    event.preventDefault()
  
  
    if (email == "") {
  
      alert('Preencha o campo email');
      formuser.email.focus();
      return false;
    }
  
    if (pass == "" || pass.length < 7) {
  
      alert('Preencha o campo senha ou insira mais de 7 caracteres');
      formuser.pass.focus();
      return false;
    }
  
    //location.href = "/Front/menu.html";
    login();
    return false;

  
  }
  
  function login(){
    localStorage.removeItem("@ReiCangaco/cd_vendedor")
    localStorage.removeItem("@ReiCangaco/admin")
    
    user = document.getElementById("email").value
    pass = document.getElementById("senha").value

    var myInit = { method: 'POST',
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    mode: 'cors',
    body: JSON.stringify({
    login: user,
    senha: pass
          }),
    cache: 'default' };     
    fetch('http://localhost:8080/api/login',myInit)
    .then(function(response) {
      response.json().then(data => {
      localStorage.setItem("@ReiCangaco/cd_vendedor",data.cd_vendedor); 
      localStorage.setItem("@ReiCangaco/admin", data.sn_ativo);
     });
      if(response.status == 200){
      return window.location = "file:///C:/Users/Roberto/Desktop/REICANGACO/Front/menu.html";
    }
      else{
      alert("Usuario não encontrado");  
      return  window.location = "file:///C:/Users/Roberto/Desktop/REICANGACO/Front/index.html";
      }
   });

   }   

        
  
  
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
