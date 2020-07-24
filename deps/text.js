var setOverlayText, openPopup;

$(function() {
	var body = document.body;

	setOverlayText = function (h3t, h4t, time) {
		if ($('#vid-text'))
		{
			$('#vid-text').remove();
		}

		if ($('#vid-subtext'))
		{
			$('#vid-subtext').remove();
		}

		var h3 = document.createElement('h3');
		h3.innerHTML = h3t;
		h3.id = "vid-text";
		var h3element = body.appendChild(h3);

		var h4 = document.createElement('h4');
		h4.innerHTML = h4t;
		h4.id = "vid-subtext";
		var h4element = body.appendChild(h4);

		setTimeout(function() {
			h3element.remove();
			h4element.remove();
		}, time*1000);
	}

	openPopup = function (text, time)
	{
		var popup = document.createElement('div');
		popup.innerHTML = "<p>"+text+"</p>";
		popup.id = "popup";
		popup.className = "popup";
		var popupelement = body.appendChild(popup);

		setTimeout(function() {
			popupelement.remove();
		}, time*1000);	
	}
});