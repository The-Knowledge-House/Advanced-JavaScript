$(document).ready(function(e){
	$('#submit').click(function(){
		var parameters = { search: $('#search').val() };
		$.get( '/searching',parameters, function(data) {
        $('#results').html(data);

		});
	});
});
