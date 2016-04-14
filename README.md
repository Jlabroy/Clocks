# Clocks

Two different clocks one is a digital flip clock, and the other a traditional circular analogue clock.

## Examples
<a href="http://jlabroy.github.io/clock/Flip%20Clock/clock.html">Digital Flip Clock</a>
<a href="http://jlabroy.github.io/clock/Analogue%20Clock/clock.html">Analogue Clock</a>

## How to

### Flip Clock
You can build different clocks by adding more clocks
#### HTML
```
<div class="clock" id="hours">
	<div class="next-val"></div>
	<div class="clock-upper">
		<span class="val"></span>
		<span class="next-val"></span>
	</div>
	<div class="clock-lower">
		<span class="val"></span>
	</div>
</div>
```

#### JavaScript
```
var hour = new Clock("#hours", 'hour', 2);
```

Clock(element, period_interval, animation_duration);

period_interval can be:
- hour
- minute
- second

#### CSS

Uses CSS variables to determine colour for each clock widget. You can change the colour of the clocks by setting a dark and light colour:
```
#hours {
	--light-color: #e74c3c;
	--dark-color: #cf2e1d;
}
```

### Analogue Clock
Slightly more simple than the flip clock. One method.

#### HTML
```
<div class="clock-holder">
	<div class="clock">
		<div class="time"></div>
		<div class="time"></div>
		<div class="time"></div>
		<div class="time"></div>

		<div class="dial"></div>
		<div class="hand hours"></div>
		<div class="hand minutes"></div>
		<div class="hand seconds"></div>
	</div>
</div>
```

#### JavaScript
```
var clock = new Clock(".clock");
clock.init();
```



