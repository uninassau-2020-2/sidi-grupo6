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
  
    user = document.getElementById("email").value
    pass = document.getElementById("senha").value

    var myInit = { method: 'POST',
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    mode: 'cors',
    body: JSON.stringify({
    username: user,
    password: pass
          }),
    cache: 'default' };     
    fetch('http://localhost:8080/api/login',myInit)
    .then(function(response) {
      if(response.status == 200){
      return window.location = "file:///C:/Users/Roberto/Desktop/REICANGACO/Front/menu.html";}
      else{
      alert("Usuario não encontrado");  
      return  window.location = "file:///C:/Users/Roberto/Desktop/REICANGACO/Front/index.html";
      }
   });

   }   

        
  
  
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
