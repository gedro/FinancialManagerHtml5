require(['jquery', 'bootstrap'], function($) {
	$(document).ready(function() {
		$('.typeahead').each(function() {
			var thisEl = $(this);
			thisEl.typeahead({
				source : function(query, process) {
					return $.getJSON('/api/autocomplete', {
						search_id : thisEl.attr('id'),
						query : query
					}, function(data) {
						return process(data.options);
					});
				}
			});
		});
	});
});
