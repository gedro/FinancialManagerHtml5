require(['jquery', 'app/datatable_init'], function($) {
	function fnFilterShop() {
		$('#yp_table').dataTable().fnFilter(
			$("#search_shop").val(), 1);
	}

	function fnFilterItem() {
		$('#yp_table').dataTable().fnFilter(
			$("#search_item").val(), 2);
	}

	$(document).ready(function() {
		$("#search_shop").keyup(function() {
			fnFilterShop();
		});
		
		$("#search_item").keyup(function() {
			fnFilterItem();
		});
		
		$("#search_shop").on('change', function() {
			fnFilterShop();
		});
		
		$("#search_item").on('change', function() {
			fnFilterItem();
		});
		
	});
});
