
    // Scroll animations
    $(document).ready(function() {
        $("#select-1").click(function() {
            $('html, body').animate({
                scrollTop: $("#letter1-top").offset().top
            }, 500);
        });

    });
