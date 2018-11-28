/* come scrivere quest'istruzione con lo stesso risultati?...Da utilizzare FOR LOOP 
per semplificare e "compattare" la scritura:

var counter = 0;
while (counter < 10){
	document.write(counter + " ");
	counter +=1;
}
*/

for (var i = 0; i < 10; i += 1) {
	document.write(i + " ");
}
