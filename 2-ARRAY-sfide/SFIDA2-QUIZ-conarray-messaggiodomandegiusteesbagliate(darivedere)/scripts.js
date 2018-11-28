var domande = [
	["Che linguaggio si usa per inserire contenuto in un sito?", "HTML"],
	["Che linguaggio si usa per modificare il contenuto in un sito?", "CSS"],
	["Che linguaggio si usa per far interagire l'utente?", "JAVASCRIPT"]
];

var rispCorrette = [];

var rispSbagliate = [];

var rispEsatte = 0;
var risposta;
var messaggio;

function print(messaggio) {
	document.write(messaggio);
}

function listaDomande(array) {
	var listaHTML = '<ol>';
	for ( var i = 0; i < array.length; i +=1) {
		listaHTML += '<li>' + array[i] + '</li>';
	}
	listaHTML +='</ol>';
	return listaHTML;
}
for (var i =0; i < domande.length; i +=1) {
	risposta = prompt(domande [i][0]);
	if (risposta.toUpperCase() === domande[i][1]) {
		rispEsatte += 1;
		rispCorrette.push(domande[i][0]);
	} else {
		rispSbagliate.push(domande[i][0]);
	}
}

messaggio = "Hai indovinato " + rispEsatte + " domande.";
messaggio += "<p>Risposte Esatte:</p>";
messaggio += listaDomande(rispCorrette);
messaggio += "<p>Risposte Sbagliate:</p>";
messaggio += listaDomande(rispSbagliate);
print(messaggio);