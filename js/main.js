/*
        About          
=========================
/*
 Theme Name: Aginxo - HTML5 Business Template
 Theme URI: https://mdsumonmia.me/template/aginxo
 Author URI: https://mdsumonmia.me/
*/

jQuery(document).ready(function($){
  
/*
      Table Index       
========================
1. Preloader
2. Responsive Menu
3. Portfolio Filtering
4. Magnific Popup
5. Owl Carousel
6. Counter
7. Back to Top
8. Contact Us Form
*/

  "use strict";
  
/*=====| 1. Preloader |=====*/

var loader = function() {
  setTimeout(function() { 
    if($('#ftco-loader').length > 0) {
      $('#ftco-loader').removeClass('show');
    }
  }, 1);
};
loader();
  
/*=====| 2. Responsive Menu |=====*/
  // meanmenu
  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991",
    meanMenuClose: "X",
    meanMenuCloseSize: "18px",
    meanExpand: "+",
    meanContract: "-",
    onePage: false,
  });

/*=====| 3. Portfolio Filtering |=====*/
  var $grid =  $('.all-project').isotope({
    itemSelector: '.project',
    layoutMode: 'fitRows',
    fitRows: {
      gutter: 0
    }
    
  });

  // filter items on button click
  $('.portfolio-manu').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  
  // for menu active 
  $('.portfolio-manu button').on('click', function (event) {
    $(this).siblings('.filter-active').removeClass('filter-active');
    $(this).addClass('filter-active');
    event.preventDefault();
  });


/*=====| 4. Magnific Popup |=====*/

  // for video popup
  $('.popup-video').magnificPopup({
    type: 'iframe',
    iframe: {
        patterns: {
          // youtube support
          youtube: {
            index: 'youtube.com/',
            id: 'v=',
            src: 'http://www.youtube.com/embed/%id%?autoplay=1'
          },
          // vimeo support
          vimeo: {
            index: 'vimeo.com/',
            id: '/',
            src: 'https://player.vimeo.com/video/%id%?autoplay=1'
          },
        }
    }
  });

  // for gallery popup
  $('.popup').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    }
  });

/*=====| 5. Owl Carousel |=====*/
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay:1000,
    navText: ["<i class='flaticon-left-arrow-1'></i>", "<i class='flaticon-right-arrow'></i>"],
    responsive: {
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
  });

/*=====| 6. Counter |=====*/
  $('.achive-number').counterUp({
    delay: 10,
    time: 1000
  });

});

/*=====| 7. Back to Top |=====*/
var btn = $('.scroll-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 600) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '600');
});

/*=====| 8. Contact Us Form |=====*/
(function ($) {
  'use strict';

  $('.msg-submit').on("click", function() {
    document.getElementById("get-name").innerHTML = document.getElementById("name").value;
  });
  
  var form = $('.contact__form'),
      message = $('.contact__msg'),
      form_data;

  // Success function
  function done_func(response) {
      message.fadeIn().removeClass('alert-danger').addClass('alert-success');
      message.text(response);
      setTimeout(function () {
          message.fadeOut();
      }, 2000);
      form.find('input:not([type="submit"]), textarea').val('');
  }

  // fail function
  function fail_func(data) {
      message.fadeIn().removeClass('alert-success').addClass('alert-success');
      message.text(data.responseText);
      setTimeout(function () {
          message.fadeOut();
      }, 2000);
  }
  
  form.submit(function (e) {
      e.preventDefault();
      form_data = $(this).serialize();
      $.ajax({
          type: 'POST',
          url: form.attr('action'),
          data: form_data
      })
      .done(done_func)
      .fail(fail_func);
  });
  
})(jQuery);

