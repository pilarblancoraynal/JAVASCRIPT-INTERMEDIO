var classifica = [
	'Aberto Contador',
	'Fabio Aru',
	'Mikel Landa',
	'Andrey Amador',
	'Ryder Hesjedal'
];
 

 function print(message){
 		document.write(message);
 }
 
 function visualizzaClassif(array) {
 	var classifHTML = '<ol>';
 	for (var i = 0; i < array.length; i +=1) {
 		classifHTML += '<li>' + array[i] + '</li>';
 	}
 	classifHTML += '</ol>';
 	print(classifHTML);
 }

visualizzaClassif(classifica);

