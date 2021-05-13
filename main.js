var pa1 = "roma"
var pa2 = "amor"

function pruebaAnagrama (pa1, pa2){

	if (!pa1 || !pa2 || pa1.length !== pa2.length){return false;}

	var ps1 = pa1.toLowerCase();
	var ps2 = pa2.toLowerCase();

	if(ps1 === ps2) {return false;}

	var pas1 = ps1.split('').sort().join('');
	var pas2 = ps2.split('').sort().join('');

	return pas1 === pas2;
}

var resultado = pruebaAnagrama(pa1, pa2);

console.log(resultado);

module.exports = pruebaAnagrama;