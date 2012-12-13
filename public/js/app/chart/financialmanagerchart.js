define([ "./chart", "app/dataprovider/test_data" ], function(Chart, testData) {

	return function(context2d) {
		this.chart = null;
		
		//private
		var ctx = context2d;

		this.notify = function(dataProvider) {
			if (this.chart == null) {
				this.chart = new Chart(ctx, dataProvider.getIncomes(), dataProvider.getCosts());
				this.chart.setChartColors(testData.colors);
				this.chart.setGeometry();
				this.chart.draw(1);
			} else {
				this.chart.setValues(dataProvider.getIncomes(), dataProvider.getCosts());
				this.chart.animate(1);
			}
		};
	};
});