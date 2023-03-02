const cartWrapper = document.querySelector(".cart-wrapper");

window.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-cart")) {
    const card = event.target.closest(".product-card");

    const productInfo = {
      id: card.dataset.id,
      title: card.querySelector(".product-card__title").innerText,
      description: card.querySelector(".product-card__desc").innerText,
      price: card.querySelector(".price").innerText,
      weight: card.querySelector(".weight").innerText,
      counter: card.querySelector("[data-counter]").innerText,
    };

    const itemInCart = cartWrapper.querySelector(
      `[data-id="${productInfo.id}"]`
    );

    if (itemInCart) {
      const counterElement = itemInCart.querySelector("[data-counter]");
      counterElement.innerText =
        parseInt(counterElement.innerText) + parseInt(productInfo.counter);
    } else {
      const cartItemHTML = `
           <div class="cart-wrapper__item" data-id = "${productInfo.id}">
                        <h4 class="item-title">${productInfo.title}</h4>
                        <button class="delete-item" data-action="delete">
                            X
                        </button>
                        <p class="item-desc">${productInfo.description}</p>

                        <div class="mini-info">
                            <div class="product-card__additional">
                                <div class="product-card__additional-price">
                                    <h4 class="price">${productInfo.price}</h4>
                                    <h5 class="weight">${productInfo.weight}</h5>
                                </div>


                            </div>

                            <div class="items_count-wrapper">
                                <div class="items__control" data-action="minus">-</div>
                                <div class="items__current" data-counter>${productInfo.counter}</div>
                                <div class="items__control" data-action="plus">+</div>
                            </div>
                        </div>

                    </div>
    `;

      cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);
    }

    card.querySelector("[data-counter]").innerText = "1";
  }
});

cartWrapper.addEventListener("click", deleteItem);

function deleteItem(event) {
  if (event.target.dataset.action === "delete") {
    const parentNode = event.target.closest(".cart-wrapper__item");
    parentNode.remove();
  }
}
