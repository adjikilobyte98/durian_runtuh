		//Toggle mobile menu & search
		$('.toggle-nav').click(function() {
		  console.log('toggle nav');
		  $('.mobile-nav').slideToggle(1000);
		  $('.mobile-search').slideUp(1000);
		});
		//Close navigation on anchor tap
			$('a').click(function() {
		  console.log('close nav');
		  $('.mobile-nav').slideUp(1000);
		  $('.mobile-search').slideUp(1000);
		});

		$('.toggle-search').click(function() {
		  console.log('toggle search');
		  $('.mobile-search').slideToggle(1000);
		  $('.mobile-nav').slideUp(1000);
		});

		//Mobile menu accordion toggle for sub pages
		$('.mobile-nav > ul > li.menu-item-has-children').append('<div class="accordion-toggle"><div class="fa fa-angle-down"></div></div>');
		$('.mobile-nav .accordion-toggle').click(function() {
		  $(this).parent().find('> ul').slideToggle(1000);
		  $(this).toggleClass('toggle-background');
		  $(this).find('.fa').toggleClass('toggle-rotate');
		});
