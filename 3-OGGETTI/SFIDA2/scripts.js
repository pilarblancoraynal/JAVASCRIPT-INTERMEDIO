 var studenti = [
	 {
	 	nome: 'Matteo',
	 	corso: 'Crea il tuo logo',
	 	età: 27,
	 	mail: 'matteo@lacerba.io'
	 },
	 {
	 	nome: 'Michele',
	 	corso: 'Javascript',
	 	età: 29,
	 	mail: 'michele@lacerba.io'
	 },
	 {
	 	nome: 'Daniele',
	 	corso: 'Strategie di monetizzazione',
	 	età: 24,
	 	mail: 'daniele@lacerba.io'
	 },
	 {
	 	nome: 'Marco',
	 	corso: 'CSS Avanzato',
	 	età: 25,
	 	mail: 'marco@lacerba.io'
	 },
];

var messaggio = ' ';
var studente;

function print(message) {
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML = message;
}

for (var i =0; i < studenti.length; i +=1){
	studente = studenti[i];
	messaggio += '<h2>Studente: ' + studente.nome + '</h2>';
	messaggio += '<p>Corso: ' + studente.corso + '</p>';
	messaggio += '<p>Età: ' + studente.età + '</p>';
	messaggio += '<p>Mail: ' + studente.mail + '</p>';
}

print(messaggio);