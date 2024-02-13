function stringSearch(largeString, smallString) {
	for (let i = 0; i < largeString.length; i++) {
		for (let j = 0; j < smallString.length; j++) {
			console.log(largeString[i],smallString[j]);
		}
	}
}
stringSearch("lorie loled", "lol");