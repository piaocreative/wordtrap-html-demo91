$( document ).ready( function() {

  if ( $('.logos' ).length ) {
    $('.logos').slick({
      dots: false,
      arrows: false,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
            breakpoint: 992,
            settings: {
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }
      ]
    });   
  }

  if ( $( '.timelines' ).length ) {
    $('.timelines').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.timeline-prev'),
      nextArrow: $('.timeline-next'),
    });   
  }

});