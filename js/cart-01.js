// отслеживаем клик по странице
window.addEventListener("click", (event) => {
  //проверяем что был клик по Добавить в корзину
  if (event.target.hasAttribute("data-cart")) {
    // Находим карточку  с товаром

    const card = event.target.closest(".card");

    //Собираем данные о товаре и записываем в единый объект productInfo

    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".product-img").getAttribute(".src"),
    };
  }
});
