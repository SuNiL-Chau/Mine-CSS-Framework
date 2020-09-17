// Alert

const Alert = $(document).ready(function() {
    
    var Alert_closeBtn = $(".alert-closeable button.close");

    Alert_closeBtn.click(function() {
        $(this).parent().removeClass("show"); 
        $(this).parent().addClass("hide"); 
    });
});

export { Alert }