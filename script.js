$(document).ready(function() {
    $('.Menu').hide();
    $('.Wraper').hide().fadeIn(4000);
    $('.Menu').fadeIn(6000);

    $('.link').hover(function() {
        $(this).css('cursor', 'pointer');
    });

    $('#cv').click(function() {
        window.open('CV.pdf');
    });

    $('#about').click(function(e) {
        $('[data-popup="popup-1"]').fadeIn(350);
        e.preventDefault();
    });

    $('#blog').click(function(e) {
        window.location.href = "blog.html";
    });

    $('[data-popup-close]').on('click', function(e)  {
        $('[data-popup="popup-1"]').fadeOut(350);
        e.preventDefault();
    });
});


