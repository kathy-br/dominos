const cart = document.querySelector(".cart-wrapper");
const btn = document.querySelector(".navigation-basket");
const btnClose = document.querySelector(".close");
const prodCard = document.querySelector(".product-cards");

prodCard.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("add__btn") ||
    e.target.closest("product-card")
  ) {
    cart.style.display = "block";
  }
});

btn.addEventListener("click", () => {
  cart.style.display = "block";
});

btnClose.addEventListener("click", () => {
  cart.style.display = "none";
});

//console.log(buttons);

/*buttons.forEach((el) => {
  el.addEventListener("click", () => {
    //cart.classList.add("cart-wrapper--visible");
    console.log("hi");
  });
});*/
