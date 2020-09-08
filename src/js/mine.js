// Alert
var Alert_closeBtn = $(".alert-closeable button.close");

$(document).ready(function() {
   Alert_closeBtn.click(function() {
    $(this).parent().removeClass("show"); 
    $(this).parent().addClass("hide"); 
   });
});

// btn
$(document).ready(function () {
   function Button(element) {
      this._element = element;
   } // Getters
   var _proto = Button.prototype;
   function toggle() {
      var ChangeEvent = true;
      var AriaPressed = true;
      var _rootElement = document.querySelector(`${this.button}`);
      if (_rootElement) {
         var input = $(this._element).querySelector('input:not([type="hidden"])');
      }
   }
});