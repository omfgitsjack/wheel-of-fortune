(function () {
    "use strict";

    var curAngle = 0;

    jQuery.fn.animateRotate = function(angle, duration, easing, complete) {
        return this.each(function() {
            var $elem = $(this);
            console.log("Target angle:" +(curAngle + angle)%45);
            var targetAngle = angle + curAngle;
            if ((curAngle + angle) % 45 == 0) {
                targetAngle += 22.5;
            }
            $elem.animate({deg: targetAngle}, {
                duration: duration,
                easing: easing,
                step: function(now) {
                    //console.log("Now:" + now);
                    $elem.css({
                        transform: 'rotate(' + now + 'deg)'
                    });
                    curAngle = now;
                    if (curAngle === targetAngle) {
                        $('.rotate').bind("click", rotateClickHandler); // Rebind
                    }
                },
                complete: complete || $.noop
            });
        });
    };

    $('.rotate').keypress(function(e) {
        $('.rotate').click();
    });

    $('.rotate').click(rotateClickHandler);

    function rotateClickHandler() {
        $('.rotate').unbind("click");

        var num = Math.floor((Math.random() * 8) + 1);
        $(this).animateRotate(1440+(num*45)+22.5, 2000, "swing");
    }

})();