// Dropdown

export function Dropdown() {
  // variables
  var dropBtn = document.querySelectorAll("[data-toggle=dropdown]");

  // function
  dropBtn.forEach((item) => {
    item.addEventListener("click", function () {
      if (this.getAttribute("aria-expanded") === "true") {
        this.setAttribute("aria-expanded", "false");
      } else {
        this.setAttribute("aria-expanded", "true");
      }
      this.classList.toggle("active");
      this.classList.toggle("focus");
      this.nextElementSibling.classList.toggle("show");
      this.nextElementSibling.classList.toggle("hide");
    });
  });
}
