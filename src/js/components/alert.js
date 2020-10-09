// Alert

export function Alert() {
    // variables
    var Alert_closeBtn = $(".alert-closeable button.close");
    // function
    Alert_closeBtn.on("click", function() {
        $(this).parent().removeClass("show"); 
        $(this).parent().addClass("hide"); 
    });
};
