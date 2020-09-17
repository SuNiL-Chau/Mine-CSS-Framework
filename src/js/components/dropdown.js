const Dropdown = $(document).ready(function () {
    var dropDwn = $(".dropdown");
    var dropBtn = $("[data-toggle=dropdown]");
    var dropContent = $("#main-drop");
    dropDwn.click(function () {
        $(this).find(dropBtn).attr('aria-expanded',$(this).find(dropBtn).attr('aria-expanded')==='true'?'false':'true' );
        $(this).find(dropBtn).toggleClass("active").toggleClass("focus");
        $(this).find(dropContent).toggleClass('show hide');
    });
});

export {Dropdown}