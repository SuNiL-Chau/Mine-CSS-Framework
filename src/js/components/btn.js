// btn

export function Button() {
  // variables
  var btnToggle = document.querySelectorAll("[data-toggle=button]");
  // function
  btnToggle.forEach((item) => {
    item.addEventListener("click", function () {
      if (this.getAttribute("aria-pressed") === "true") {
        this.setAttribute("aria-pressed", "false");
      } else {
        this.setAttribute("aria-pressed", "true");
      }
      this.classList.toggle("active");
      this.classList.toggle("focus");
    });
  });
}
