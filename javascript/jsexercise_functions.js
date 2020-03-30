function toggle() {
  var element = document.getElementById("box");
  // element.classList.toggle("style");
  element.classList.toggle("open");
}

$('.marquee').marquee({
	//duration in milliseconds of the marquee
	duration: 8000,
	//gap in pixels between the tickers
	gap: 400,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 2500,
	//'left' or 'right'
	direction: 'left',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true
});
