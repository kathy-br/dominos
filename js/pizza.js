import products from "./data/pizza.js";

let out = "";

products.forEach((item) => {
  out += `
  <div class="product-card" data-id="${item.id}"> 
   <div class="product-card__img">
                        <img class= "product-img" src="${item.img}" alt="Mitbollo">
                    </div>
                    <span>${item.firstPrice}</span>
                    <h4 class="product-card__title">${item.name}</h4>
                    <p class="product-card__desc">${item.description}</p>
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
                            <h4 class="price">${item.price}</h4>
                            <h5 class="weight">${item.weight}</h5>
                        </div>

                        <button data-cart type="button" class="add__btn">В корзину</button>
                    </div> 

                    <div class="items_count-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter>1</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>
  
  </div>
                  
  `;
});

document.querySelector(".product-cards__content").innerHTML = out;

////////////
window.addEventListener("click", (event) => {
  let counter;

  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    const countWrapper = event.target.closest(".items_count-wrapper");
    counter = countWrapper.querySelector("[data-counter]");
  }

  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }

  if (event.target.dataset.action === "minus") {
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    }
  }

  if (
    event.target.hasAttribute("data-action") &&
    event.target.closest(".cart-wrapper")
  ) {
    calcCartPrice();
  }
});
