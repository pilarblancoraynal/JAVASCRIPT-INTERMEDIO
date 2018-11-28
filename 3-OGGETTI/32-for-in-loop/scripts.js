
var studente = {
	Nome: 'Daniele',
	Cognome: 'Ugolini',
	Età: 24,
	Corsi: ['Crea un logo','Css Avanzato']
}


for(var nomeProp in studente) {
	console.log(nomeProp,': ',studente [nomeProp]);
}