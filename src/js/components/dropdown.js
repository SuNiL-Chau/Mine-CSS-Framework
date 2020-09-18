const Dropdown = jQuery(function () {
    // variables
    var dropDwn = $(".dropdown");
    var dropBtn = $("[data-toggle=dropdown]");
    var dropContent = $("#main-drop");
    // function
    dropDwn.on("click", function () {
        
        $(this).find(dropBtn).attr('aria-expanded',$(this).find(dropBtn).attr('aria-expanded')==='true'?'false':'true' );
        $(this).find(dropBtn).toggleClass("active").toggleClass("focus");
        $(this).find(dropContent).toggleClass('show hide');

    });

});

export {Dropdown}