// l'utente inserisce i due numeri
var a = prompt("Inserisci il primo numero");
var b = prompt("Inserisci il secondo numero");

// stampa del numero maggiore
if (a > b) {
  document.getElementById("porygon").innerHTML = a + " è il numero maggiore";
}
else if (b > a) {
  document.getElementById("porygon").innerHTML = b + " è il numero maggiore";
}
else if (a === b) {
  document.getElementById("porygon").innerHTML = a + " e " + b + " sono uguali";
}
