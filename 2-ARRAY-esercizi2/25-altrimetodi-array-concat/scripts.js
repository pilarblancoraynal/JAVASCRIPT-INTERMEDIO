/*concatenare tutti gli elementi di 2 liste con 'array.concat()''*/


var lista1 = [
	'uova',
	'latte',
	'pane'
];

var lista2 = [
	'insalata',
	'carote',
	'limoni'
];

var listaTot = lista2.concat(lista1);

var lista = listaTot.join(', ');
document.write(lista);