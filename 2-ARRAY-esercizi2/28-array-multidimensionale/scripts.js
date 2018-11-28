var classifica = [
	['Aberto Contador', 'Spagna'],
	['Fabio Aru', 'Italia'],
	['Mikel Landa', 'Spagna'],
	['Andrey Amador', 'Costa Rica'],
	['Ryder Hesjedal' ,'Canada']
];
 

 function print(message){
 		document.write(message);
 }
 
 function visualizzaClassif(array) {
 	var classifHTML = '<ol>';
 	for (var i = 0; i < array.length; i +=1) {
 		classifHTML += '<li>' + array[i][0] + ' - ' + array[i][1] + '</li>';
 	}
 	classifHTML += '</ol>';
 	print(classifHTML);
 }

visualizzaClassif(classifica);
