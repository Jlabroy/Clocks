function Clock(elem) {
	var clock = document.querySelector(elem);
	var _this = this;

	Clock.prototype.second_deg  = 360 / 60;
	Clock.prototype.minute_deg 	= 360 / 600;
	Clock.prototype.hour_deg 	= 360 / 12;

	var second_rot,
		minute_rot,
		hour_rot;

	var prev_second = null,
		prev_minute = null,
		prev_hour	= null;

	var second_hand = clock.querySelector(".seconds"),
		minute_hand	= clock.querySelector(".minutes"),
		hour_hand 	= clock.querySelector(".hours");

	Clock.prototype.init = function() {
		_this.animate();
		setInterval(_this.animate, 100);
		clock.classList.add("animate");
	}

	Clock.prototype.animate = function() {
		var date = new Date();

		var seconds = date.getSeconds();
		var minutes = parseFloat(date.getMinutes() + '.' + (seconds * 0.6));
		var hours 	= parseFloat(date.getHours()+ '.' + (minutes * 0.6));
		
		_this.second_rot = _this.calcDegree(seconds, _this.prev_second, _this.second_rot, _this.second_deg);
		_this.minute_rot = _this.calcDegree(minutes, _this.prev_minute, _this.minute_rot, _this.minute_deg);
		_this.hour_rot 	 = _this.calcDegree(hours, _this.prev_hour, _this.hour_rot, _this.hour_deg);
		
		_this.prev_second = seconds;
		_this.prev_minute = minutes;
		_this.prev_hour   = hours;

		_this.setTime(this.hour_rot, _this.minute_rot, _this.second_rot - 360);
	}

	Clock.prototype.calcDegree = function(current, last, current_rotation, degrees) {
		if (current != last) {
			if (last == null) {
				return degrees * current;
			} 
			
			return current_rotation + degrees;
		}

		return current_rotation
	}

	Clock.prototype.setTime = function(hour, minute, second) {
		hour_hand.style.transform = 'rotate('+hour+'deg)';
		minute_hand.style.transform = 'rotate('+minute+'deg)';
		second_hand.style.transform = 'rotate('+second+'deg)';
	}
}