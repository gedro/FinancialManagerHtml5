define([ "./cashflow" ], function(CashFlow) {

	return function() { // Subject for observers
		this.observerCollection = new Array();
		this.cashFlows = new Array();

		// caches
		this.incomes = new Array();
		this.costs = new Array();

		this.getIncomes = function() {
			return this.incomes;
		};
		
		this.getCosts = function() {
			return this.costs;
		};

		this.getBalance = function() {
			var result = 0;
			for ( var i = 0; i < this.incomes.length; i++)
				result += this.incomes[i];
			for ( var i = 0; i < this.costs.length; i++)
				result -= this.costs[i];
			return result;
		};

		this.addCashFlow = function(id, item, count, price) {
			this.cashFlows.push(new CashFlow(id, item, count, price));
			if (price < 0) {
				this.costs.push(count * price);
				this.incomes.push(0);
			} else {
				this.costs.push(0);
				this.incomes.push(count * price);
			}
		};

		this.registerObserver = function(observer) {
			this.observerCollection.push(observer);
		};
		
		// TODO: unregister
		this.notifyObservers = function() {
			for (var i = 0; i < this.observerCollection.length; i++)
				this.observerCollection[i].notify(this);
		};
	};
});