(function(){

	'use strict';

	//Add payment method
	$('body').on('click','.btn-add-method',function(e){

		e.preventDefault();

		var container = $('.additional-methods');
		var content = $('.origin').html();
			content = '<div class="row clone-method">' + content + '</div>';
		
		container.append(content);

	});


	//Remove payment method
	$('body').on('click','.btn-remove-method',function(e){

		e.preventDefault();
		$(this).parents('.clone-method').remove();

	});

})(jQuery);