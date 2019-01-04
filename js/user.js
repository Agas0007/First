$(document).ready(function(){
     $('.humb').click(function(){
     $('.list').toggleClass('active')
     });
    
    $('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 900 // don't foget to change the duration also in CSS
		}
	});

});
     





  
