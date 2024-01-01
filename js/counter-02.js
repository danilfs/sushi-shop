window.addEventListener("click", function (event) {
  if (event.target.dataset.action === "plus") {
    const counterWrapper = event.target.closest(".counter-wrapper");

    const counter = counterWrapper.querySelector("[data-counter]");

    counter.innerText = ++counter.innerText;
  }

  if (event.target.dataset.action === "minus") {

    //Находим обертку счетчика

    const counterWrapper = event.target.closest(".counter-wrapper");

    //Находим div с числом счетчика

    const counter = counterWrapper.querySelector("[data-counter]");

    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    }
  }
});
