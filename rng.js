function RNG(s) {
    this.seed = s;
    this.a = 1103515245;
    this.b = 12345;
    this.m = 0x7fffffff;

    this.nextInt = function() {
	this.seed = (this.seed * this.a + this.b) % this.m;
	return this.seed;
    }

}

function convertString(str) {
    var result = 0;
    for (var a = 0; a < str.length;a++) {
	var code = str.charCodeAt(a);
	result += code * Math.pow(128, a);
    }
    
    return result;
}
