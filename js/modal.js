import products from "./data/pizza.js";
const modalEl = document.querySelector(".modal");
const productCard = document.querySelector(".product-cards");

productCard.addEventListener("click", (e) => {
  if (e.target.classList.contains("product-img")) {
    let productId = e.target.closest(".product-card").getAttribute("data-id");
    openModal(products.find((item) => item.id === productId));
  }
});

async function openModal(product) {
  modalEl.classList.add("modal--show");

  modalEl.innerHTML = `
           <div class="modal-card" data-id = "${product.id}">
            <div class="modal-card__img">
                <img class="product-img" src="${product.img}">
            </div>
            <div class="modal-card__desc">
                <h4 class="product-card__title">${product.name}</h4>
                <p class="product__desc">${product.description}</p>
                <p class="product-energy">
                    Пищевая ценность на 100г продукта: <br>

                    Жиры - 10,69 г <br>
                    Белки - 10,00 г <br>
                    Углеводы - 24,80 г <br>
                    Энергетическая ценность - 236,45 ккал.
                </p>
                <div class="product-card__size">
                    <select name="size" id="size">
                        <option value="average">Средняя</option>
                        <option value="small">Маленькая</option>
                        <option value="big">Большая</option>
                    </select>

                    <select name="dough" id="dough">
                        <option value="classick">Классика</option>
                        <option value="thin">Тонкое</option>
                        <option value="hot-dog">Хот-Дог борт</option>
                        <option value="cheese">Сырный борт</option>

                    </select>
                </div>
                <div class="product-card__additional">
                    <div class="product-card__additional-price">
                        <h4 class="price">25.49 руб.</h4>
                        <h5 class="weight">605 гр</h5>
                    </div>

                    <button data-cart type="button" class="add__btn">В корзину</button>
                </div>
            </div>

            <button class="close-modal">
            <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
  `;
  const btnCloseModal = document.querySelector(".close-modal");
  btnCloseModal.addEventListener("click", () => closeModal());
}

function closeModal() {
  modalEl.classList.remove("modal--show");
}

window.addEventListener("click", (event) => {
  if (event.target === modalEl) {
    closeModal();
  }
});
