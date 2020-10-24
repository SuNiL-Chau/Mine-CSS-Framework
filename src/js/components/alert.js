// Alert

export function Alert() {
    // variables
    var alertCloseBtn = $(".alert-closeable button.close");
    // function
    alertCloseBtn.on("click", function() {
        $(this).parent().removeClass("show");
        if ($(this).parent().hasClass("fade")) {
            $(this).parent().animate("fade").queue(
                function () {
                    $(this).addClass("hide");
                }
            );
        } else {
            $(this).parent().addClass("hide");
        }
    });
}