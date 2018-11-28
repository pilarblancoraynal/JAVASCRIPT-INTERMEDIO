var numSup = 10;

function funzNumRandom(numSup) {
	return Math.floor(Math.random() * numSup) + 1;
}

for (var i = 1; i <= 100; i += 1) {
	var numeroRandom = funzNumRandom(numSup);
	document.write(numeroRandom + " ");
}