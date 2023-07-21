(function($){
	'use strict';

	//menu top fixed start for mobile menu & desktop menu
	var fixed_top = $(".header-bg");
	$(window).on('scroll', function () {
	    if ($(this).scrollTop() > 10) {
	        fixed_top.addClass("menu-fixed animated fadeInDown");
	        fixed_top.removeClass("slideInUp");
	    } else {
	        fixed_top.removeClass("menu-fixed fadeInDown");
	        fixed_top.addClass("slideInUp"); 
	    }
  });
  

  //content menu fixed start
	// var fixed_m = $(".content-menu");
	// $(window).on('scroll', function () {
	//     if ($(this).scrollTop() > 650) {
	//         fixed_m.addClass("c-fixed");
	//     } else {
	//         fixed_m.removeClass("c-fixed");
	//     }
	// });


	// mobile menu responsive
	$(document).on('click','.mobile-bar',function(){
        $(".mobile-bar").toggleClass("close");
		$(".header-menu").toggleClass("open");
		$(".overlay").addClass("active");
	});
	// overlay remove
	$('.overlay').on('click', function(){
		$('body,.header-menu,.mobile-bar').removeClass('close');
		$('body,.header-menu').removeClass('open');
		$('body,.header-menu,.overlay').removeClass('active');
	});

  // tooltip
  // $(function () {
	// $('[data-toggle="tooltip"]').tooltip()
  // })

  //creating a style object for the ripple effect
  function RippleStyle(width, height, posX, posY){
    this.width = ( width <= height ) ? height : width;
    this.height = ( width <= height ) ? height : width;
    this.top = posY - (this.height * 0.5);
    this.left = posX - (this.width * 0.5);
  }

  $('.btn').on('mousedown', function(e){
    //appending an element with a class name "btn-ripple"
    var rippleEl = $('<span class="btn-ripple"></span>').appendTo(this);

    //getting the button's offset position
    var pos = $(this).offset();

    //get the button's width and height
    var width = $(this).outerWidth();
    var height = $(this).outerHeight();

    //get the cursor's x and y position within the button
    var posX = e.pageX - pos.left;
    var posY = e.pageY - pos.top;

    //adding a css style to the ripple effect
    var rippleStyle = new RippleStyle(width, height, posX, posY);
    rippleEl.css(rippleStyle);
  });

  //this event listener will be triggered once the ripple animation is done
  $('.btn').on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.btn-ripple', function(){
    $(this).remove();
  });

  // lightcase activation//
	jQuery(document).ready(function($) {
		$('a[data-rel^=lightcase]').lightcase();
	});

  // Add smooth scrolling to all links
	$(".ploor-link").on('click', function (event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll The optional number
			// (800) specifies the number of milliseconds it takes to scroll to the
			// specified area
			$('html, body').animate({
				scrollTop: $(hash)
					.offset()
					.top
			}, 800, function () {

				// Add hash (#) to URL when done scrolling (default click behavior)
				 window.location.hash = hash;
			});
		} // End if
  });
  

  // token slider
  var swiper = new Swiper('.token-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
      nextEl: '.token-button-next',
      prevEl: '.token-button-prev',
    },
    breakpoints: {
			1024: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 1,
			},
			
      320: {
        slidesPerView: 1,
      }
		}
  });



  // locatin slider
  var swiper = new Swiper('.location-slider', {
    spaceBetween: 30,
    breakpoints: {
			1024: {
				slidesPerView: 4,
			},
			768: {
				slidesPerView: 3,
			},
			576: {
				slidesPerView: 2,
			},
      320: {
        slidesPerView: 1,
      }
		}
  });


  // freeloader activation
  setTimeout(function() {
		$('#ctn-preloader').addClass('loaded');
		// Una vez haya terminado el preloader aparezca el scroll
		$('body').removeClass('no-scroll-y');

		if ($('#ctn-preloader').hasClass('loaded')) {
		  // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
		  $('#preloader').delay(1000).queue(function() {
			$(this).remove();
		  });
		}
    }, 3000);
    
    // Theme switcher
    $(document).ready(function(){
        $(".theme-switcher").click(function(){
        $(this).text(function(i, v){
          return v === 'light' ? 'dark' : 'light'
        });
        });
    });
    
    (function() {
      $('.theme-switcher').click(function() {
        $('#theme').toggleClass('dark');
      });
      
  })();

  // fullpage slider activation
  var swiper = new Swiper('.fullPage-slider', {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
  });

})(jQuery);