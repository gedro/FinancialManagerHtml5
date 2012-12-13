require([ 'jquery', 'app/datatable_init' ], function($) {
	function fnFilterShop() {
		$('#yp_table').dataTable().fnFilter($("#search_shop").val(), 1);
	}

	function fnFilterItem() {
		$('#yp_table').dataTable().fnFilter($("#search_item").val(), 2);
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

		setTimeout(function() {
			var vars = [], hash;
			var q = document.URL.split('?')[1];
			if (q != undefined) {
				q = q.split('&');
				for ( var i = 0; i < q.length; i++) {
					hash = q[i].split('=');
					vars.push(hash[1]);
					vars[hash[0]] = hash[1];
				}
			}

			if (vars['shop']) {
				$("#search_shop").val(vars['shop']);
				fnFilterShop();
			} else if (vars['item']) {
				$("#search_item").val(vars['item']);
				fnFilterItem();
			}
		}, 2000);

	});
});
