var domande = [
{domanda:"Che linguaggio si usa per inserire contenuto in un sito?",
soluzione:"HTML"},

{domanda:"Che linguaggio si usa per modificare il contenuto in un sito?",
soluzione:"CSS"},

{domanda:"Che linguaggio si usa per far interagire l'utente?",
soluzione:"JAVASCRIPT"}
];

var rispCorrette = [];
var rispSbagliate = [];

var rispEsatte = 0;
var risposta;
var messaggio;

function print(message){
	document.write(message);
}

for(var i = 0; i < domande.length; i +=1){
	risposta = prompt(domande[i].domanda);
	if (risposta.toUpperCase() === domande[i].soluzione){
		rispEsatte +=1;
	}
}

messaggio = "Hai indovinato " + rispEsatte + " domande.";

print(messaggio);