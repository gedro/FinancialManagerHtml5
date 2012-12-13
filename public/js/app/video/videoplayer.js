define([ 'require', 'jquery', './video_defaults', 'jqueryui/dialog' ], function(require, $, config) {

	return function() {
		this.divElement = null;
		this.vid = null;

		this.notify = function(dataProvider) {
			if (dataProvider.getBalance() > 0) {
				return;
			}

			if (this.divElement == null) {
				createDiv();
			}

			$("#video_dialog").dialog({
				height : 440,
				width : 680,
				modal : true
			});

			setTimeout(function() {
				document.getElementById('video_player').play();
			}, 2000);
		};

		// private
		function createDiv() {
			this.divElement = document.createElement("div");
			this.divElement.id = 'video_dialog';
			this.divElement.style.display = 'none';

			this.divElement.innerHTML = '<video width="640" height="360" controls id="video_player" >'
					+ ' <source src="'
					+ config.pathOfVideos
					+ config.nameOfVideo
					+ '" type=\''
					+ config.typeOfVideo + '\'>' + '</video>';

			document.getElementsByTagName('body')[0]
					.appendChild(this.divElement);
		}
	};
});