window.addEventListener("click", (event) => {
  let counter;

  //Проверяем нажатие на плюс или минус

  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    const counterWrapper = event.target.closest(".counter-wrapper");
    counter = counterWrapper.querySelector("[data-counter]");
  }

  //Проверяем кнопка плюс была нажата ?
  if (event.target.dataset.action == "plus") {
    counter.innerText = ++counter.innerText;
  }
  //ПРоверяем был ли нажат минус
  if (event.target.dataset.action == "minus") {
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    } else if (
      event.target.closest(".cart-wrapper") &&
      parseInt(counter.innerText) === 1
    ) {
      event.target.closest(".cart-item").remove();

      toggleCardStatus();

      calcCartPriceAndDelivery();
    }
    
  }
  // Проверяем клик на плюс или минус внутри корзины
  if (
    event.target.hasAttribute("data-action") &&
    event.target.closest(".cart-wrapper")
  ) {
    calcCartPriceAndDelivery();
  }
});
