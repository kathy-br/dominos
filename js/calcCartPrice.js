function calcCartPrice() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  const cartItems = document.querySelectorAll(".cart-wrapper__item");
  const totalPriceEl = document.querySelector(".total-price");

  let totalPrice = 0;

  cartItems.forEach((item) => {
    const amountEl = document.querySelector("[data-counter]");
    const priceEl = document.querySelector(".price");

    const currentPrice =
      parseFloat(amountEl.innerText) * parseFloat(priceEl.innerText);

    totalPrice += currentPrice;
  });

  totalPriceEl.innerText = totalPrice;
}
