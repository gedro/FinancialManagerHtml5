define([ "./vect2d", "./chart_defaults"], function(Vect2D, config) {

	// chart for one dataset
	return function(values) {
		this.values = values;
		this.preValues = values; // we keep previous values for animation

		this.chartColor = config.defaultColor;

		this.setValues = function(values) {
			this.preValues = this.values;
			this.values = values;
		};

		// position of ith node when elapsed time elapsed if chart is 0,0 - 1,1
		// rect
		this.getNodePos = function(i, top, elapsed) {
			var x1, y1, x2, y2;

			if (i < this.preValues.length) {
				x1 = i / (this.preValues.length - 1);
				y1 = this.preValues[i] / top;
			} else {
				x1 = 1;
				y1 = this.preValues[this.preValues.length - 1];
			}

			if (i < this.values.length) {
				x2 = i / (this.values.length - 1);
				y2 = this.values[i] / top;
			} else {
				x2 = 1;
				y2 = this.values[this.values.length - 1];
			}

			var vx = x2 - x1;
			var vy = y2 - y1;

			return new Vect2D(x1 + vx * elapsed, y1 + vy * elapsed);
		};

		this.setGeometry = function(width, height) {
			this.width = width;
			this.height = height;
		};

		this.draw = function(ctx, top, elapsed) {
			var x1 = 0;
			var y1 = 0;
			var vx = this.width;
			var vy = this.height;

			var num;
			if (this.values.length > this.preValues.length)
				num = this.values.length;
			else
				num = this.preValues.length;

			ctx.beginPath();
			ctx.strokeStyle = this.chartColor;
			ctx.moveTo(x1, y1 + vy - vy * this.getNodePos(0, top, elapsed).y);
			for ( var i = 1; i < num; i++) {
				var pos = this.getNodePos(i, top, elapsed);
				ctx.lineTo(x1 + vx * pos.x, y1 + vy - vy * pos.y);
			}
			ctx.stroke();
		};
	};
});