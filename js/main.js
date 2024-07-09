let elHamburgerBtn = document.querySelector(".hamburger__btn");
let elModalOuter = document.querySelector(".modal-outer");
let elModalInner = document.querySelector(".modal-inner");
let elModalClose = document.querySelector(".modal__close-btn");

elHamburgerBtn.addEventListener("click", function () {
  elModalOuter.classList.add("show-outer");
  elModalInner.classList.add("show-inner");
  document.body.classList.add("hidden-scroll");
});

elModalClose.addEventListener("click", function () {
  elModalOuter.classList.remove("show-outer");
  elModalInner.classList.remove("show-inner");
  document.body.classList.remove("hidden-scroll");
});
elModalOuter.addEventListener("click", function (evt) {
  if (evt.target.id == "modal-outer") {
    elModalOuter.classList.remove("show-outer");
    elModalInner.classList.remove("show-inner");
    document.body.classList.remove("hidden-scroll");
  }
});
