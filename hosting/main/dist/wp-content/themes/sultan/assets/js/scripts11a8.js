/*
Author       : Syed Ekram.
Template Name: Sultan - One Page WordPress Theme
Version      : 1.0
*/

(function($) {
	"use strict";
	
	jQuery(document).ready(function(){
	
		/*START PRELOADER JS*/
		$(window).load(function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/

		/* START MENU JS */
				// one page nav
		$('#nav').onePageNav({
			currentClass: 'current',
			changeHash: true,
			scrollSpeed: 1500,
			scrollThreshold: 0.5,
			filter: ':not(.external)',
			easing: 'swing',
			begin: function() {
				//I get fired when the animation is starting
			},
			end: function() {
				//I get fired when the animation is ending
			},
			scrollChange: function(jQuerycurrentListItem) {
				//I get fired when you enter a section and I pass the list item of the section
			}
		});

			$(window).scroll(function() {
			  if ($(this).scrollTop() > 100) {
				$('.menu-top').addClass('menu-shrink');
			  } else {
				$('.menu-top').removeClass('menu-shrink');
			  }
			});
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});
		/* END MENU JS */ 

		/*START PROGRESS-BAR JS*/
	    $('.progress-bar > span').each(function(){
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition' : 'width 2s'
			});			
			setTimeout(function() {
				$this.appear(function() {
						$this.css('width', width + '%');
				});
			}, 500);
		});
		/*END PROGRESS-BAR JS*/

		/*START PARTNER LOGO*/
		$("#team__carousel").owlCarousel({
			loop:true,
			autoplay:true,
			items : 4,
			margin:50,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3]
		});
		/*END PARTNER LOGO*/
		
		/* START COUNTDOWN JS*/
		$('.counter_feature').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.timer').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/* END COUNTDOWN JS */

		/*START PARTNER LOGO*/
		$(".partner").owlCarousel({
		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  items : 4,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3]
		});
		/*END PARTNER LOGO*/
		
		/*START TESTIMONIAL JS*/
		$('.carousel').carousel({
			interval:7000,
			pause:"false",
		});
		/*END TESTIMONIAL JS*/
	
		/*START CONTACT MAP JS*/
		
		try {
			$('.map').gmap3({
				action: 'addMarker',
				latLng: [contact.lat, contact.lon],
				map:{
					center: [contact.lat, contact.lon],
					zoom: 5
					},
				},
				{action: 'setOptions', args:[{scrollwheel:false}]}
			);
		} catch(err) {}
	   /*END CONTACT MAP JS*/
	
		/*START TOOL TIP*/
		$('[data-toggle="tooltip"]').tooltip();   
		/*END TOOL TIP*/
		
	}); 	
	
	/*START WOW ANIMATION JS*/
		new WOW().init();	
	/*END WOW ANIMATION JS*/	

	 /*  Textrotator */
	if ($('.rotate').length > 0) {
		$(".rotate").textrotator({
			animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
			separator: "|", //  You can define a new separator (|, &, * etc.) by yourself using this field.
			speed: 3000 // How many milliseconds until the next word show.
		});
	}
	/* End Textrotator */
	
	$('#testimonial .item:first-child').addClass('active');
	$('.device_img .item:first-child').addClass('active');
	$('#home__carousel .item:first-child').addClass('active');

		/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
			post-carousel
		-=-=-=-=-=-=-=-=-=--=-=-=-=-=-*/
		$(".post-carousel").owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			mouseDrag: false,
			dots: false,
			smartSpeed: 900,
			animateOut: 'fadeOut',
			 navigation : true,
			navigationText : ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
		});
		
		/*  Stellar for background scrolling  */
		(function () {

			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			 
			} else {
				$(window).stellar({
					horizontalScrolling: false,
					responsive: true
				});
			}

		}());
		/* End Stellar for background scrolling  */	
		
})(jQuery);