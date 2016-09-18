/**
 * Created by vector on 18.09.2016.
 */
$(document).ready(function () {


    $('a').click(function () {

        var page = $(this).attr('href');

        $('.pages').each(function () {
            $(this).addClass('hidden-page');
        });
        $(page).removeClass('hidden-page');

    });

});
git


