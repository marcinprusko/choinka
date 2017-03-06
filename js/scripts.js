// plik scripts.js

function rysujChoinke(rows) {
	// wysokosc choinki
	var star;
	for (var i = 1 ; i < rows; i++) {
		
		// ilosc gwiazdek w rzedzie
		star = '';
		for (var j = 0; j < i * 2 - 1; j++) {
			star += '*';
		}

		console.log(star);
	}
}

rysujChoinke(5);
