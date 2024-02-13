function linearSearch(arr, val) {
	for (let i = 0; i < arr.length;i++) {
		if (arr[i] === val) {
			return "Index is " + arr.indexOf(arr[i]);
		} 
	}
	return -1;
}
console.log(linearSearch([2,4,6, 6, 1], 2));