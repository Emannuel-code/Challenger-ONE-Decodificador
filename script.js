var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output-saida");


function criptografar() {

  var texto = textInput.value.toLowerCase();

  var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

  
  document.getElementById('output-saida').innerHTML = '<textarea readonly id="output-texto">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'

}

function descriptografar() {

    var texto = textInput.value.toLowerCase();

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('output-saida').innerHTML = '<textarea readonly id="output-texto">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>' 

}

function copiar() {
    
  var textoCop = document.getElementById('output-texto');

  textoCop.select();
  document.execCommand("copy");
  textoCop.setSelectionRange(0, 99999); // For mobile devices
	alert("Mensagem copiada!");
}


