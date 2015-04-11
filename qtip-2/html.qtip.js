$(document).ready(function() {
	$('.hasTooltip').each({
		content: $('<p><strong>The Survival Plot shows the probability that a client will <i>not</i> default. This means that a larger probability (the % on the vertical axis) is better because the client has a greater chance of <i>not</i> defaulting. For example, in year 1 a client is very unlikely to default because the probabily of <i>not</i> defaulting is very high (the % value on the vertical axis is large).</p>'),
		// setting a same value to minWidth and maxWidth will result in a fixed width
		minWidth: 300,
		maxWidth: 300,
		offsetY: -60,
		position: 'left',
		trigger: 'click'
	});
});
