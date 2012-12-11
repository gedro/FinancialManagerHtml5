require(['jquery', 'app/datatable_init'], function($) {
	function fnFilterFirstName() {
		$('#yp_table').dataTable().fnFilter(
			$("#search_first_name").val(), 1);
	}

	function fnFilterLastName() {
		$('#yp_table').dataTable().fnFilter(
			$("#search_last_name").val(), 2);
	}
	
	function fnFilterPhoneNumber() {
		$('#yp_table').dataTable().fnFilter(
			$("#search_phone_number").val(), 3);
	}

	$(document).ready(function() {
		$("#search_first_name").keyup(function() {
			fnFilterFirstName();
		});
		
		$("#search_last_name").keyup(function() {
			fnFilterLastName();
		});
		
		$("#search_phone_number").keyup(function() {
			fnFilterPhoneNumber();
		});
		
		$("#search_first_name").on('change', function() {
			fnFilterFirstName();
		});
		
		$("#search_last_name").on('change', function() {
			fnFilterLastName();
		});
		
		$("#search_phone_number").on('change', function() {
			fnFilterPhoneNumber();
		});
		
	});
});
