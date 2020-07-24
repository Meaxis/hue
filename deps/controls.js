$(function() {
	document.addEventListener('keydown', function(key) {
		var currentElementWithFocus = document.activeElement;

		if (key['key'] == "ArrowUp" && currentElementWithFocus.dataset.video)
		{
			var item = $(':focus').prev();
			item.focus();
		}

		else if (key['key'] == "ArrowDown" && currentElementWithFocus.dataset.video)
		{
			var item = $(':focus').next();
			item.focus();
		}

		else if (key['key'] == "Enter")
		{
			if (document.getElementById('popup'))
			{
				$("#popup").remove();
			}

			else if (currentElementWithFocus.dataset.video && !document.getElementById('playing_video') && !document.getElementById('intro'))
			{
				var element = document.getElementsByTagName("body")[0];

				var blackscreen = document.createElement('div');
				blackscreen.id = "black-backg";
				var blackscreenelement = element.appendChild(blackscreen);

				var video = document.createElement('video');
				video.src = "videos/"+currentElementWithFocus.dataset.video;
				video.id = "playing_video";
				
				var videoelement = element.appendChild(video);
				videoelement.play();

				var rescaleMode = getCookie('scaling_mode');
				if (rescaleMode == "fit")
				{
					video.style = "object-fit: contain;";
				}

				setOverlayText('PLAY', 'RESCALE-MODE:'+rescaleMode.toUpperCase()+';', 5);


			}
		}

		else if (key['key'].toLowerCase() == "i" && currentElementWithFocus.dataset.video)
		{
			if (!document.getElementById('playing_video') && !document.getElementById('intro'))
			{
				fetch("videos/"+currentElementWithFocus.dataset.video+'.info').then(response => response.text())
				.then(data => {
					openPopup(data, 3125);
				});
				
			}
		}

		else if (key['key'] == "Escape")
		{
			if (document.getElementById('playing_video'))
			{
				$("#playing_video").remove();
				$("#black-backg").remove();
			}

			else if (document.getElementById('popup'))
			{
				$("#popup").remove();
			}
		}

		else if (key['key'].toLowerCase() == "f")
		{
			setCookie('scaling_mode', "fit", 365);
			setOverlayText('RESCALE MODE', 'FIT', 2);

			if ($('#playing_video'))
			{
				$('#playing_video').style = "object-fit: contain;";
			}
		}

		else if (key['key'].toLowerCase() == "s")
		{
			setCookie('scaling_mode', "stretch", 365);
			setOverlayText('RESCALE MODE', 'STRETCH', 2);

			if ($('#playing_video'))
			{
				$('#playing_video').style = "object-fit: fill;";
			}
		}

		else if (key['key'].toLowerCase() == "e")
		{
			openPopup('yes', 5)
		}
	});

	var child = document.getElementById('videolist').firstElementChild;
	child.focus();
});