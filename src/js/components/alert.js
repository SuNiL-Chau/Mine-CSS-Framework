// Alert

const Alert = jQuery(function () {
    // variables
    var Alert_closeBtn = $(".alert-closeable button.close");
    // function
    Alert_closeBtn.on("click", function() {
        $(this).parent().removeClass("show"); 
        $(this).parent().addClass("hide"); 
    });
});

export { Alert }