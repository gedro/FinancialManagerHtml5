require([ 'jquery', 'app/dataprovider/dataprovider', 'app/video/videoplayer',
          'app/chart/financialmanagerchart', 'app/dataprovider/test_data' ],
		function($, DataProvider, VideoPlayer, FinancialManagerChart, testData) {

	$(document).ready(
			function() {
				var chartManager = new FinancialManagerChart(document.getElementById('chartCanvas').getContext('2d'));

				var videoPlayer = new VideoPlayer();
				
				var dataProvider = new DataProvider();
				dataProvider.registerObserver(chartManager);
				dataProvider.registerObserver(videoPlayer);

				dataProvider.incomes = testData.incomes[0];
				dataProvider.costs = testData.costs[0];
				dataProvider.notifyObservers();

				window.setTimeout(function() {
					dataProvider.incomes = testData.incomes[1];
					dataProvider.costs = testData.costs[1];
					dataProvider.notifyObservers();
				}, 3000);
			});
});