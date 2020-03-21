// richiedere 5 numeri all'utente
var a = parseFloat(prompt("Inserisci il primo numero"));
var b = parseFloat(prompt("Inserisci il secndo numero"));
var c = parseFloat(prompt("Inserisci il terzo numero"));
var d = parseFloat(prompt("Inserisci il quarto numero"));
var e = parseFloat(prompt("Inserisci il quinto numero"));

// conferma che siano 5 numeri
var controllo = a+b+c+d+e;

// stampasomma
if (isNaN(controllo)) {
  alert("Non hai inserito 5 numeri!")
}
else {
document.getElementById("porygon").innerHTML = a+b+c+d+e;
}
