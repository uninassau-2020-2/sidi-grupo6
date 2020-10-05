var eleErro = document.getElementById("erroCep");
eleErro.style.display = "none";

function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById('cep1').value = ("");
  document.getElementById('rua').value = ("");
  document.getElementById('bairro').value = ("");
  document.getElementById('cidade').value = ("");
  document.getElementById('uf').value = ("");
  document.getElementById('ibge').value = ("");
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('cep1').value = (conteudo.cep);
    document.getElementById('rua').value = (conteudo.logradouro);
    document.getElementById('bairro').value = (conteudo.bairro);
    document.getElementById('cidade').value = (conteudo.localidade);
    document.getElementById('uf').value = (conteudo.uf);
    document.getElementById('ibge').value = (conteudo.ibge);
    geocode(conteudo);

  } //end if.
  else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
}

function pesquisacep(valor) {
  if (valor != "") {
    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != null) {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('cep1').value = "...";
        document.getElementById('rua').value = "...";
        document.getElementById('bairro').value = "...";
        document.getElementById('cidade').value = "...";
        document.getElementById('uf').value = "...";
        document.getElementById('ibge').value = "...";

        axios.get('http://localhost:8081/' + cep)
          .then(async function (response) {
            meu_callback(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      } //end if.
      else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
      }
    } //end if.
    else {
      //cep sem valor, limpa formulário.
      limpa_formulário_cep();
    }
  }
};

// Geocode  
function geocode(conteudo) {

  axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
    params: {
      address: conteudo.logradouro + conteudo.bairro + conteudo.localidade,
      key: 'AIzaSyDShdWwz13WibrRSq341s_QqiKefOvwuZY'
    }
  })
    .then(function (response) {
      lati = response.data.results[0].geometry.location.lat;
      long = response.data.results[0].geometry.location.lng;
      initMap(lati, long);

    })
    .catch(function (error) {
      console.log(error);
    });
}

// Mapa
let map;

function initMap(lati = 0.0, long = 0.0) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: lati,
      lng: long,
    },
    zoom: 15,
  });

  initMarker(lati, long);
}

function initMarker(lati, long) {
  //nova posição
  // var ponto = new google.maps.LatLng(lati, long);
  var marker = new google.maps.Marker({
    position: { lat: lati, lng: long },//seta posição
    map: map,//Objeto mapa
    title: "Seu endereço!",//string que será exibida quando passar o mouse no marker
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Google_Maps_pin.svg'
  });
}

function mostra_oculta(cep2) {
  eleErro.style.display = "none";

  if (cep2.value.length === 8) {

    pesquisacep(cep2.value);

    var x = document.getElementById("divBack");
    var btn = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
      btn.style.display = "none";

    } else {
      x.style.display = "none";
      btn.style.display = "block";
    }

  } else {
    eleErro.style.display = "block";
    // eleErro.innerHTML = "Cep teste";
  }
}

function mostra_oculta2() {

  // if (cep2 != null) {

  var x = document.getElementById("divBack");
  var btn = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
    btn.style.display = "none";

  } else {
    x.style.display = "none";
    btn.style.display = "block";
  }

}

//Oauth
// function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log('Name: ' + profile.getName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }

// function signOut() {
//   var auth2 = gapi.auth2.getAuthInstance();
//   auth2.signOut().then(function () {
//     console.log('User signed out.');
//   });
// }
