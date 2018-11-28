var listaProdotti = [
'uova',
'latte',
'pane',
'insalata',
'carote',
'limoni',
'pesce',
'burro'
];

var ricerca;

function print(message) {
	document.write('<p>' + message + '</p>');
}

while (true) {
	ricerca = prompt("Cerca un prodotto. Inserisci - Lista Completa- per visualizzare tutti i prodotti, ed -esci- per chiudere il programma.");
	ricerca = ricerca.toLowerCase();
	if(ricerca ==='esci') {
	break;	
} else if (ricerca === 'lista Completa') {
	print(listaProdotti.join(', '));
} else {
	if(listaProdotti.indexOf(ricerca) >=0) {
		print("Si. abbiamo " + ricerca + " nel negozio.")
	}else {
		print("No, non ce l'abbiamo in negozio.")
		}
	}
}