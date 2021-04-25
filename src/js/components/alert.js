// Alert

export function Alert() {
  // variables
  var alertCloseBtn = document.querySelectorAll(".alert-closeable button.close");

  // function
  alertCloseBtn.forEach((item) => {
    item.addEventListener("click", function () {
      let parent = this.parentElement;
      parent.classList.remove("show");
      if (parent.classList.contains("fade")) {
        parent.animate([{ opacity: 1 }, { opacity: 0 }]);
        parent.addEventListener(
          "transitionend",
          function () {
            parent.classList.add("hide");
            parent.classList.add("show");
          },
          false
        );
      } else {
        parent.classList.add("show");
        parent.classList.add("hide");
      }
    });
  });
}
