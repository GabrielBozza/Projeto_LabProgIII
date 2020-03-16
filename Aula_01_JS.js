function submit_form_cadastro(){
    let primeiroNome = document.getElementById("nome").value;
    let numero = document.getElementById("numero").value;
    let ano = document.getElementById("ano").value;
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

    let cadastro = {"primeiroNome":primeiroNome,"numero":numero,"ano":ano,"login":login,"senha":senha};//Elemento JSON

    document.getElementById('paragrafo1').innerHTML="O nome dele eh"+`${cadastro.primeiroNome}`;

    //
}

function submit_login_request(){
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

    let login_request = {"login":login,"senha":senha};//Elemento JSON

    //IF(query deu login valido){ redireciona para a pag inicial}
    //ELSE{Window.alert("Login Invalido") e retorna para a mesma pagina}
}

function submit_form(parametro) {
    document.getElementById('paragrafo1').innerHTML="O nome dele eh"+`${parametro}`;
}

function funcao1(){
    document.getElementById('paragrafo1').innerHTML='Modificado!!!';
}

function funcao2(){
    let corpo = document.getElementById("corpo");
    corpo.style["background-color"]="black";
    let html = document.getElementById("html");
    html.style["background-color"]="black";
}

function toCelcius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
//document.getElementById('paragrafo1').innerHTML=toCelcius(100);

var myInput = document.getElementById("senha");

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Valida letras minusculas
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Valida letras maiusculas
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Valida numeros
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Valida comprimento
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}