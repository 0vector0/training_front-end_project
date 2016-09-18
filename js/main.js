var swiper;
$(document).ready(function () {


    $('a').click(function () {
        if (swiper != null) {
            swiper.destroy();
        }
        var page = $(this).attr('href');

        $('.pages').each(function () {
            $(this).addClass('hidden-page');

        });
        $(page).removeClass('hidden-page');
        swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            effect: 'cube',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 1,
            spaceBetween: 30
            // loop: true
        });

    });


});


