define([ "./chartdata", "./chart_defaults" ], function(ChartData, config) {

	return function(context2d) {
		this.lineColor = config.lineColor;
		this.backColor = config.backColor;

		// privates
		var ctx = context2d;
		var timerId = null;
		var dataCount = arguments.length - 1;
		var chartDatas = new Array(dataCount);

		for ( var i = 0; i < dataCount; i++) {
			chartDatas[i] = new ChartData(arguments[i + 1]);
		}

		// well... code reuse??
		this.setValues = function() {
			for ( var i = 0; i < arguments.length; i++) {
				chartDatas[i].setValues(arguments[i]);
			}
		};

		this.setChartColors = function(colors) {
			for ( var i = 0; i < colors.length; i++) {
				chartDatas[i].chartColor = colors[i];
			}
		};

		this.draw = function(elapsed) {
			var x1 = 0;
			var y1 = 0;
			var vx = this.width;
			var vy = this.height;

			ctx.fillStyle = this.backColor;
			ctx.fillRect(x1, y1, vx, vy);
			for ( var i = 0; i < 6; i++) {
				ctx.beginPath();
				ctx.strokeStyle = this.lineColor;
				ctx.moveTo(x1, y1 + vy - vy * i / 5);
				ctx.lineTo(x1 + vx, y1 + vy - vy * i / 5);
				ctx.stroke();
			}
			ctx.strokeText('HTML5 is cool?', 0, 0);
			for ( var i = 0; i < dataCount; i++) {
				chartDatas[i].draw(ctx, 1.0, elapsed); // 1.0 top of chart
			}
		};

		this.setGeometry = function() {
			this.width = ctx.canvas.width;
			this.height = ctx.canvas.height;
			for ( var i = 0; i < dataCount; i++) {
				chartDatas[i].setGeometry(this.width, this.height);
			}
		};

		// interval given in secs
		this.animate = function(interval) {
			var chart = this;
			var elapsed = 0;
			var timerId = window.setInterval(function() {
				elapsed += 0.01 / interval;
				if (elapsed > 1) {
					// if (timerId != null) {
					// window.clearInterval(timerId);
					// }
					chart.draw(1); // there may be some mistake with
									// calculations
					return;
				} else {
					chart.draw(elapsed);
				}
			}, 10);

			window.setTimeout(function() {
				if (timerId != null) {
					window.clearInterval(timerId);
				}
			}, 1100);
		};
	};
});