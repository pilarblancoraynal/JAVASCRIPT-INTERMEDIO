var domande = [
	["Che linguaggio si usa per inserire contenuto in un sito?", "HTML"],
	["Che linguaggio si usa per modificare il contenuto in un sito?", "CSS"],
	["Che linguaggio si usa per far interagire l'utente?", "JAVASCRIPT"],
];

var rispEsatte = 0;
var risposta;
var messaggio;

function print(messaggio) {
	document.write(messaggio);
}

for (var i =0; i < domande.length; i +=1) {
	risposta = prompt(domande [i][0]);
	if (risposta.toUpperCase()===domande[i][1]) {
		rispEsatte += 1;
	}
}

messaggio = "Hai indovinato " + rispEsatte + " domande.";
print(messaggio);