// inserire due parole tramite prompt
var a = prompt("Inserisci la prima parola");
var b = prompt("Inserisci la seconda parola");

// variabili per riconoscere la lunghezza della stringa
var x = (a.length);
var y = (b.length);

// stampa prima la più corta e poi la più lunga
if (x > y) {
  document.getElementById("porygon").innerHTML = b +" è la parola più corta, mentre la più lunga è "+ a ;
}
else if (y > x) {
  document.getElementById("porygon").innerHTML = a +" è la parola più corta, mentre la più lunga è "+ b ;
}
