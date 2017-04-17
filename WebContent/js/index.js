
	

	/*Define function:*/
	liClick = function() {
		var menu = $('#Header').html();
		alert(menu);
		
		$('#Content').html(menu);
		
		$('#Content').show();
		
		$('#Content').slideUp(2000, function() {
			alert('Content is slided up.')
		})
	}

	$('li').click(liClick);

	$('#Footer').click(liClick);
