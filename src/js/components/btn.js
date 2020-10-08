// btn
export const Button = jQuery(function () {
    // variables
    var btnToggle = $("[data-toggle=button]");
    // function
    btnToggle.on("click", function () {
        $(this).attr('aria-pressed',$(this).attr('aria-pressed')==='true'?'false':'true' );
        $(this).toggleClass("active").toggleClass("focus");
    });

});