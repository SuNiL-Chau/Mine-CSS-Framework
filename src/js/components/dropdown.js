export function Dropdown() {
    // variables
    var dropBtn = $("[data-toggle=dropdown]"),
        dropContent = $(".drop-content");
    // function
    dropBtn.on("click", function () {
        
        $(this).attr("aria-expanded",$(this).attr("aria-expanded")==="true"?"false":"true");
        $(this).toggleClass("active").toggleClass("focus");
        $(this).siblings(dropContent).toggleClass("show hide");

    });
}
