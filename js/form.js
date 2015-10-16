var $form = $('#footer'),
	$button = $('#show-form');

// Funciones:
function showForm(){
	$form.slideToggle();
	return false;
}

// Eventos:
$button.click( showForm );