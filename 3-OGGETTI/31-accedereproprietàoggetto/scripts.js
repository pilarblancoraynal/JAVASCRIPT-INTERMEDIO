/*
var listaProdotti = [
	'uova',
	'latte',
	'pane',
];

alert(listaProdotti[1]);

*/



var studente = {
	Nome: 'Daniele',
	Cognome: 'Ugolini',
	Età: 24,
	Corsi: ['Crea un logo','Css Avanzato']
}

/* posso accedere alla proprietà degli elementi con questi esempi semplici
alert(studente.Cognome);

studente.Nazionalità = 'Italiana';
alert(studente.Nazionalità)

posso anche cambiare i valori, ad esempio qui potrei cambiare l'età allo studente:

studente.Età = 30;
alert(studente.Età);
*/

function print(message){
	var div = document.getElementById('output');
	div.innerHTML = message;
}

var messaggio = '<p>Ciao, mi chiamo '+ studente.Nome + '</p>';
messaggio += '<p>E ho' + studente.Età + 'anni.</p>';
studente.Corsi = ['Crea un logo','Css Avanzato', 'Javascript Base'];
messaggio += '<p>Sono iscritto a ' + studente.Corsi.length + ' corsi.</p>';

print(messaggio);
