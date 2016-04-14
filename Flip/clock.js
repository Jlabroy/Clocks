var Clock = function(elem, interval, duration) {
	var last  		= null;
	var clock 		= document.querySelector(elem);
	var interval	= typeof interval == 'undefined' ? 'minute' : interval;
	var duration 	= typeof duration == 'undefined' ? 1.4 : duration;
	
	var nextVals = clock.querySelectorAll(".next-val");
	var vals = clock.querySelectorAll(".val");
	
	clock.style.animationDuration = duration+'s';
	
	change_time = function() {
		var date = new Date();
		
		switch (interval) {
			case 'hour':
				var period = date.getHours()+"";
				break;
			case 'minute':
				var period = date.getMinutes()+"";
				break;
			case 'second':
				var period = date.getSeconds()+"";
				break;
			case 'milli':
				var period = Math.ceil(date.getMilliseconds()/100)+"";
				break;
		}
		
		if (period.length == 1) {
			period = "0" + period;
		}
		
		if (period != last) {
			last = period;
			
			for (var i in nextVals) {
				nextVals[i].innerHTML = period;
			}
			
			clock.classList.add("animate");
			setTimeout(function() {
				clock.classList.remove("animate");
				
				for (var i in vals) {
					vals[i].innerHTML = period;
				}
			}, duration * 1000);
			
		}
	}
	
	setInterval(change_time, duration);
};