function validar(event) {
    event.preventDefault()
  
    var email = formuser.email.value;
    var name = formuser.name.value;
    var pass = formuser.pass.value;
    var confirm_pass = formuser.confirm_pass.value;
    var phone = formuser.phone.value;
    var birthday = formuser.birthday.value;
  
    if (email == "") {
  
      alert('Preencha o campo email');
      formuser.email.focus();
      return false;
    }
  
    if (name == "") {
      alert('Preencha o campo nome');
      formuser.name.focus();
      return false;
    }
  
    if (pass == "" || pass.length < 7) {
  
      alert('Preencha o campo senha');
      formuser.pass.focus();
      return false;
    }
  
    if (confirm_pass == "" || confirm_pass.length < 7) {
  
      alert('Preencha o confirmar senha');
      formuser.confirm_pass.focus();
      return false;
    }
  
    if (confirm_pass !== pass) {
  
      alert('Preencha o campo senha');
      formuser.confirm_pass.focus();
      return false;
    }
  
    if (telefone == "") {
  
      alert('Preencha o campo telefone');
      formuser.phone.value();
      return false;
    }
  
    if (birthday == "") {
      alert('Preencha o campo Data de nascimento');
      formuser.birthday.value();
      return false;
  
    }
  
    return false
  
  }
  
  