// source https://codepen.io/shaikmaqsood/pen/XmydxJ
// copy Text to Clipboard
function copyToClipboard(element) {
   var $temp = $("<input>");
   $("body").append($temp);
   $temp.val($(element).text()).select();
   document.execCommand("copy");
   $temp.remove();
}

// Alert
var Alert_closeBtn = $(".alert-closeable button.close");

$(document).ready(function() {
   Alert_closeBtn.click(function() {
    $(this).parent().removeClass("show"); 
    $(this).parent().addClass("hide"); 
   });
});

// btn
var btnToggle = $("[data-toggle=button]");
$(document).ready(function () {
   btnToggle.click(function () {
      if (!$(this).attr("aria-pressed","false")) {
         $(this).attr("aria-pressed","false");
      } else {
         $(this).attr("aria-pressed","true");
      }
      $(this).toggleClass("active").toggleClass("focus");
   });
});