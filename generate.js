function makeCode(rng) {
    var ITEMS = 2;
    var BEAT_RANGE = 5;
    var MIN_BEAT_TIME = 4;
    var MIN_DRUM_BEATS = 4;
    var NOTE_RANGE = 5;
    var MIN_NOTES = 3;
    var TYPES = 1;
    var beats = "xo*-";
    var notes = "abcdefg";
    var mods = ["", "#", "b"];
    var multiplier = [1, 2, 0.5, 2/3, 1.5];

    var result = "";

    var temp;
    var DRUM_TIME = (rng.nextInt() % BEAT_RANGE + MIN_BEAT_TIME);

    for (var a = 0;a < ITEMS;a++) {
	switch(a) {
	    case 0:
	    result += "d = Drums('";
	    temp = (rng.nextInt() % BEAT_RANGE) + MIN_DRUM_BEATS;
	    for (var b = 0;b < temp;b++) {
		result += beats.charAt(rng.nextInt() % 4);
	    }

	    result += "', 1/" + DRUM_TIME + ")<br><br>";

	    break;

	    case 1:
	    result += "s = Synth()<br>s.play( ["; 
	    temp = (rng.nextInt() % NOTE_RANGE) + MIN_NOTES;
	    for (var b = 0; b < temp; b++) {
		result += "'" + notes.charAt(rng.nextInt() % 7) + "" + mods[rng.nextInt() % mods.length] + "', ";

	    }
	    
	    var mult = multiplier[rng.nextInt() % multiplier.length];
	    var time;
	    if (mult == 0.5) {
		time = "2/" + DRUM_TIME; 
	    } else if (mult == 1.5) {
		time = "3/" + (DRUM_TIME * 2);
	    } else if (mult == 2/3) {
		time = "2/" + (DRUM_TIME * 3);
	    } else if (mult == 2) {
		time = "1/" + (DRUM_TIME * 2);
	    } else {
		time = "1/" + (DRUM_TIME);
	    }
	    

	    
	    result += "], " + time  + " )<br>";

	    break;

	}
	
	
    }
    
    return "<h2>Gibber Code:</h2><p>" + result + "</p>";
}
