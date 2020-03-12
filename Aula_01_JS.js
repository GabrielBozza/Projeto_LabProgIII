function submit_form_cadastro(){
    let primeiroNome = document.getElementById("fname").value;
    let numero = document.getElementById("numero").value;
    let ano = document.getElementById("ano").value;
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;
    document.getElementById('paragrafo1').innerHTML="O nome dele eh"+`${primeiroNome}`;
    //formulario_cadastro.onsubmit = oi()
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
document.getElementById('paragrafo1').innerHTML=toCelcius(100);