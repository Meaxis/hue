$(function() {
	if (getCookie('noIntro') == null)
	{
		var intro = document.createElement('video');
		intro.src = 'videos/hue_intro.mp4'
		intro.autoplay = true
		intro.id = "intro"

		document.body.appendChild(intro);

		$("#intro").bind("ended", function() {
			$("#intro").remove()
		});
	}
});