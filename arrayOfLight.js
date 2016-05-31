function arrayOfLight(x) {
	var arr = []
	if (x>=0) {
		for(var i=0; i<=x; i++ ) {
			arr.push(i)
		}
	}
	console.log(arr)
};
arrayOfLight(5);