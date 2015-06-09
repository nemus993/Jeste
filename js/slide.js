$(document).ready(function () {
        var img_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var newIndex = 0;
        var index = 0;
        var interval = 5000;
        (function changeBg() {


        //  ------------------------------
        //  For sequential image rotation:
        //  ------------------------------

            index = (index + 1) % img_array.length;

        $('body').css('background-image', function () {
            $('#main').animate({
                backgroundColor: 'transparent'
            }, 1000, function () {
                setTimeout(function () {
                    $('#main').animate({
                        backgroundColor: 'rgb(255,255,255)'
                    }, 1000);
                }, 3000);
            });
            return 'url(../images/backgrounds/background_' + img_array[index] + '.jpg)';
        });
        setTimeout(changeBg, interval);
    })();
});