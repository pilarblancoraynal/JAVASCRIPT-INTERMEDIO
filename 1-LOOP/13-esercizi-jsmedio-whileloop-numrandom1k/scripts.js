/* 1.il browser memorizza la funzione e il parametro*/
var numSup = 5;

function funzNumRandom(numSup) {
	return Math.floor(Math.random() * numSup) +1
}

/*2.poi inmagazzina 0 nella variabile "contatore".Si nomina la condizione "contatore" e si comincia da 0, per poi farla eseguire con il loop while*/
var contatore = 0;

/*3.Poi esegue se la condizione è vera, cioè, se 0 è minore a 1000, allora esegue generando numero random
per poi visualizzarlo sul browser, una volta fatto questo il contatore aumenta di uno. 
Poi torna indietro ed essegue ancora tutto da capo, verificando la condizione ed eseguendo fino a che il 
contatore non ragiunge x numero (in questo caso 100) dando la condizione sempre "true" fino ad arrivare a questo numero
...quando ragiunge 100 il ciclo si ferma perchè allora
la condizione della variabile mi dara "false"*/
while( contatore < 100) {
	var numRandom = funzNumRandom(numSup);
	document.write(numRandom);
	contatore += 1;
}