    $(function() {
      $('[data-know-more]').click(function(e) {
        e.preventDefault();
        $('.our-bg-item').removeClass('expanded').find('.toggable').slideUp();
        var el = $(this).parents('.our-bg-item');
        el.addClass('expanded').find('.toggable').slideToggle();
      });

      $('[data-know-less]').click(function(e) {
        e.preventDefault();
        var el = $(this).parents('.our-bg-item');
        el.removeClass('expanded').find('.toggable').slideToggle();
      });

      $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
          event.preventDefault();
          $('html, body').stop().animate({
            scrollTop: target.offset().top
          }, 1000);
        }
      });
    });