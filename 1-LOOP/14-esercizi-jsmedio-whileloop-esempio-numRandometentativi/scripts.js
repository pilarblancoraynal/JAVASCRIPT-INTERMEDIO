var numSup = 2000;
var numeroRandom = funzNumRandom(numSup);
var risposta;
var tentativi =0;

function funzNumRandom(numSup) {
	return Math.floor(Math.random() * numSup) + 1;
}

/*Quando la risposta sarà diversa dal numero random (dara "true", allora si eseguirà la loop*/
while (risposta !== numeroRandom) {
	risposta = funzNumRandom(numSup)
	tentativi +=1;
}

document.write("<p> Il numero era " + numeroRandom + "</p>");
document.write("<p> Il computer ha impiegato " + tentativi + " tentativi.</p>");

/* Nota importante: bisogna sempre valutare sempre la condizione prima che inizi il loop
sempre bisogna trovare il modo di uscire da loop attraverso la condizione "false", perchè se no, il loop
continua all'infinito e porta a un colasso nel sistema*/