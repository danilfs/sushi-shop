const cartWrapper = document.querySelector(".cart-wrapper");

// отслеживаем клик по странице
window.addEventListener("click", (event) => {
  //проверяем что был клик по Добавить в корзину
  if (event.target.hasAttribute("data-cart")) {
    // Находим карточку  с товаром

    const card = event.target.closest(".card");

    //Собираем данные о товаре и записываем в единый объект productInfo

    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".product-img").getAttribute("src"),
      title: card.querySelector(".item-title").innerText,
      itemsInBox: card.querySelector("[data-items-in-box]").innerText,
      weight: card.querySelector(".price__weight").innerText,
      price: card.querySelector(".price__currency").innerText,
      counter: card.querySelector("[data-counter]").innerText,
    };
    console.log(productInfo);

    const cardItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
    <div class="cart-item__top">
        <div class="cart-item__img"
            <img src="${productInfo.imgSrc}" alt=${productInfo.title}>
        </div>
        <div class="cart-item__desc">
            <div class="cart-item__title">${productInfo.title}</div>
            <div class="cart-item__weight">${productInfo.itemsInBox}/ ${productInfo.weight}</div>

            <!-- cart-item__details -->
            <div class="cart-item__details">

                <div class="items items--small counter-wrapper">
                    <div class="items__control" data-action="minus">-</div>
                    <div class="items__current" data-counter="">${productInfo.counter}</div>
                    <div class="items__control" data-action="plus">+</div>
                </div>

                <div class="price">
                    <div class="price__currency">${productInfo.price}</div>
                </div>

            </div>
            <!-- // cart-item__details -->

        </div>
    </div>
</div>`;
    cartWrapper.insertAdjacentHTML("beforeend", cardItemHTML);
  }
});
