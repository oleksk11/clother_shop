$(function(){
	
	"use strict";

	$('.title_box').click(function(){
		$(this).toggleClass('open');
		$(this).next('.list_link').toggleClass('open');
	});

	$('#price_slider').slider({
		max: 50,
		min: 0,
		range: true,
		values: [190,728],
		slide: function( event, ui) {
			$('input[name="minPrice"]').val(ui.values[0]);
			$('input[name="maxPrice"]').val(ui.values[0]);
		}
	});

	$('input[name="minPrice"]').val(
	$('#price_slider').slider('values',0));
	$('input[name="maxPrice"]').val(
	$('#price_slider').slider('values',1));
});