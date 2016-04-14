# Clocks

Two different clocks one is a digital flip clock, and the other a traditional circular analogue clock.

## Examples
<a href="http://jlabroy.github.io/clock/Flip%20Clock/clock.html">Digital Flip Clock</a>
<a href="http://jlabroy.github.io/clock/Analogue%20Clock/clock.html">Analogue Clock</a>

## How to

### Flip Clock
HTML
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

JavaScript
```
var hour = new Clock("#hours", 'hour', 2);
```

Clock(element, period_interval, animation_duration);
period_interval can be:
hour
minute
second

