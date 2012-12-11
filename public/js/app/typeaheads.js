require(['jquery', 'bootstrap'], function($) {
	$('.typeahead').each(function() {
		var thisEl = $(this);
		thisEl.typeahead({
			source : function(query, process) {
				return $.get('index.php?autocomplete', {
					id : thisEl.attr('id'),
					query : query
				}, function(data) {
					return process(data.options);
				});
			}
		});
	});
});
