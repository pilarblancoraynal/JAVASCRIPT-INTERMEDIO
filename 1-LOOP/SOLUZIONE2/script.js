var html = '';
var rgbColor;


function coloreRandom() {
	return Math.floor(Math.random() * 256 );
}

function RGBRandom() {
	var colore ='rgb(' + coloreRandom() + ',' + coloreRandom() + ',' + coloreRandom() +')';
	return colore;
}

function print(messaggio) {
	document.write(messaggio);
}

for (var i = 0; i < 10; i += 1) {
	rgbColor = 'RGBRandom()';
	html += '<div style="background-color:' + rgbColor + '"></div>';
};


print(html);