(function () {
    "use strict";

    jQuery.fn.rotate = function(degrees) {
        $(this).css({'-webkit-transform' : 'rotate(' + degrees + 'deg)',
                     '-moz-transform' : 'rotate(' + degrees + 'deg)',
                     '-ms-transform' : 'rotate(' + degrees + 'deg)',
                     'transform' : 'rotate(' + degrees + 'deg)'});
        return (this);
    };

    jQuery.fn.animateRotate = function(angle, duration, easing, complete) {
        return this.each(function() {
            var $elem = $(this);

            $({deg: 0}).animate({deg: angle}, {
                duration: duration,
                easing: easing,
                step: function(now) {
                    $elem.css({
                        transform: 'rotate(' + now + 'deg)'
                    });
                },
                complete: complete || $.noop
            });
        });
    };

    $('.rotate').click(function() {
        var num = Math.floor((Math.random() * 8) + 1);
        //$(this).rotate(num*45);
        $(this).animateRotate(1440+(num*45)+22.5, 2000, "swing");
        //$(this).animateRotate((num*45)+22.5);
        console.log(num*45);
        console.log((1440+(num*45)+22.5)%360);
    })

})();