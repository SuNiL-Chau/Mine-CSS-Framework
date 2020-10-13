// Alert

export function Alert() {
    // variables
    var alertCloseBtn = $(".alert-closeable button.close");
    // function
    alertCloseBtn.on("click", function() {
        $(this).parent().removeClass("show"); 
        $(this).parent().addClass("hide"); 
    });
}