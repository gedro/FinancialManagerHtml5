requirejs.config({
	baseUrl : 'js/lib',
	paths : {
		app : '../app',
		'jquery' : 'jquery-1.8.3.min',
		jqueryui : 'jquery-ui-1.9.1/jqueryui',
		bootstrap : 'bootstrap/bootstrap.min',
		modernizr : 'modernizr-2.6.2.min'
	}
});

// Start the main app logic.
require(['modernizr', 'jquery', 'app/typeaheads', 'app/datatable_filter']);

requirejs.onError = function(err) {
	console.log(err.requireType);
	console.log('modules: ' + err.requireModules);

	throw err;
};
