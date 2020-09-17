// btn
const Button = $(document).ready(function () {
    var btnToggle = $("[data-toggle=button]");
    btnToggle.click(function () {
        $(this).attr('aria-pressed',$(this).attr('aria-pressed')==='true'?'false':'true' );
        $(this).toggleClass("active").toggleClass("focus");
    });
});

export {Button}