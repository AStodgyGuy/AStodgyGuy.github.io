$(document).ready(function() {
    $('.Menu').hide();
    $('.Wraper').hide().fadeIn(1000);
    $('.Menu').fadeIn(4000);

    $('.link').hover(function() {
        $(this).css('cursor', 'pointer');
    });

    $('#cv').click(function() {
        window.open('https://s3-eu-west-1.amazonaws.com/justin-yang-website/CV.pdf');
    });

    $('#resume').click(function() {
        window.open('https://s3-eu-west-1.amazonaws.com/justin-yang-website/Resume.pdf');
    });

    $('.#about').click(function() {
        
    });
});
