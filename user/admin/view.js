export const elements = {
  contain: document.querySelector(".All-zayavki"),
};

export function render(array) {
  array.forEach((zayavka) => {
    let html = `<div class="container" data-id="${zayavka.id}">
    <div class="date right">${formatDate(
      new Date(new Date() - (Date.now() - zayavka.id))
    )}</div>
    <div class="zayavka">
      <ul class="main-info">
        <li class="info">Имя: <span class="info-title">${
          zayavka.user_name
        }</span></li>
        <li class="info">
          Телефон: <span class="info-title">${zayavka.user_phone}</span>
        </li>
        <li class="info ">
          Улица: <span class="info-title">${zayavka.user_adress}</span>
        </li>
        
      </ul>
      <div class="info-price">
      <div class="date">Доставка: <span>${zayavka.date}</span></div>
      <div class="bag-price">
      <div class="bag">Корзина: <span>${zayavka.totalPrice} Р</span></div>
      <button class="button white" data-action="bag-visible"><div class="arrow" data-action="bag-visible"></div></button>
    </div></div>
    </div>
    <div class="products none">`;
    zayavka.korzina.forEach((item) => {
      if (item.type === "roll") {
        html += `<div class="product" data-id="${item.id}" data-number="${item.number}">
                    <div class= "cart-item__details1">
                        <div class="cart-img">
                            <img src="../Photos/roll/${item.imgSrc}" alt="${item.title}" srcset="" />
                        </div>
                        <div class="product-title">
                            <p class="product-name">${item.title}</p>
                            
                        </div>
                    </div>
                    <div class="cart-item__details">
                        <div class="items">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current montesratt" data-counter="">${item.counter}</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>
    
                        <div class="price">
                            <div class="price__currency montesratt">${item.price} ₽</div>
                        </div>
                    </div>
                </div>`;
      }

      if (
        item.type === "pizza" &&
        item.title !== "Пицца ассорти из 4 половинок" &&
        item.title !== "Пицца ассорти из 2 половинок"
      ) {
        html += `<div class="product" data-id="${item.id}" data-number="${item.number}">
          <div class= "cart-item__details1">
            <div class="cart-img">
                <img src="../Photos/pizza/${item.imgSrc}" alt="${item.title}" srcset="" />
            </div>
            <div class="product-title">
                <p class="product-name">${item.title} <span class="product-info1">${item.diametr} см<span></p>
            </div>
            </div>
            <div class="cart-item__details">
                <div class="items">
                <div class="items__control" data-action="minus">-</div>
                <div class="items__current montesratt" data-counter="">${item.counter}</div>
                <div class="items__control" data-action="plus">+</div>
                </div>
    
                <div class="price">
                <div class="price__currency montesratt">${item.price} ₽</div>
                </div>
            </div>
            </div>`;
      }
      if (item.title === "Пицца ассорти из 4 половинок") {
        html += `<div class="product" data-id="${item.id}" data-number="${item.number}">
            <div class= "cart-item__details1">
            <div class="cart-img">
                <img src="../Photos/pizza/${item.imgSrc}" alt="${item.title}" srcset="" />
            </div>
            <div class="product-title">
                <p class="product-name">${item.title} <span class="product-info1">${item.diametr} см<span></p>
        
               
            </div>
            <p class="product-info2">${item.Select1}, ${item.Select2},${item.Select3}, ${item.Select4}</p>
            </div>
            <div class="cart-item__details">
                <div class="items">
                <div class="items__control" data-action="minus">-</div>
                <div class="items__current montesratt" data-counter="">${item.counter}</div>
                <div class="items__control" data-action="plus">+</div>
                </div>
    
                <div class="price">
                <div class="price__currency montesratt">${item.price} ₽</div>
                </div>
            </div>
            </div>`;
      }
      if (item.title === "Пицца ассорти из 2 половинок") {
        html += `<div class="product" data-id="${item.id}" data-number="${item.number}">
          <div class= "cart-item__details1">
            <div class="cart-img">
                <img src="../Photos/pizza/${item.imgSrc}" alt="${item.title}" srcset="" />
            </div>
            <div class="product-title">
                <p class="product-name">${item.title} <span class="product-info1">${item.diametr} см<span></p>
                
                
            </div>
            <p class="product-info2">${item.Select1}, ${item.Select2}</p>
            </div>
            <div class="cart-item__details">
                <div class="items">
                <div class="items__control" data-action="minus">-</div>
                <div class="items__current montesratt" data-counter="">${item.counter}</div>
                <div class="items__control" data-action="plus">+</div>
                </div>
    
                <div class="price">
                <div class="price__currency montesratt">${item.price} ₽</div>
                </div>
            </div>
            </div>`;
      }
      if (item.type === "wok") {
        html += `<div class="product" data-id="${item.id}" data-number="${item.number}">
          <div class= "cart-item__details1">
            <div class="cart-img">
                <img src="../Photos/вок/${item.imgSrc}" alt="${item.title}" srcset="" />
            </div>
            <div class="product-title">
                <p class="product-name">${item.title}</p>
              
            </div>
            </div>
            <div class="cart-item__details">
                <div class="items">
                <div class="items__control" data-action="minus">-</div>
                <div class="items__current montesratt" data-counter="">${item.counter}</div>
                <div class="items__control" data-action="plus">+</div>
                </div>
    
                <div class="price">
                <div class="price__currency montesratt">${item.price} ₽</div>
                </div>
            </div>
            </div>`;
      }
      if (item.type === "nabor") {
        html += `<div class="product" data-id="${item.id}" data-number="${item.number}">
          <div class= "cart-item__details1">
            <div class="cart-img">
                <img src="../Photos/Наборы/${item.imgSrc}" alt="${item.title}" srcset="" />
            </div>
            <div class="product-title">
                <p class="product-name">${item.title}</p>
               
            </div>
            </div>
            <div class="cart-item__details">
                <div class="items">
                <div class="items__control" data-action="minus">-</div>
                <div class="items__current montesratt" data-counter="">${item.counter}</div>
                <div class="items__control" data-action="plus">+</div>
                </div>
    
                <div class="price">
                <div class="price__currency montesratt">${item.price} ₽</div>
                </div>
            </div>
            </div>`;
      }
      if (item.type === "dobavka") {
        html += `<div class="product" data-id="${item.id}" data-number="${item.number}">
          <div class= "cart-item__details1">
            <div class="cart-img">
                <img src="../Photos/закуски соусы/${item.imgSrc}" alt="${item.title}" srcset="" />
            </div>
            <div class="product-title">
                <p class="product-name">${item.title}</p>

            </div>
            </div>
            <div class="cart-item__details">
                <div class="items">
                <div class="items__control" data-action="minus">-</div>
                <div class="items__current montesratt" data-counter="">${item.counter}</div>
                <div class="items__control" data-action="plus">+</div>
                </div>
    
                <div class="price">
                <div class="price__currency montesratt">${item.price} ₽</div>
                </div>
            </div>
            </div>`;
      }
    });
    html +=
      '</div><button class="button delete" data-action="delete">Удалить заказ</button></div>';
    elements.contain.insertAdjacentHTML("beforeend", html);
  });
}

export function removeZakaz(id) {
  const productContainer = elements.contain.querySelector(`[data-id="${id}"]`);
  productContainer.remove();
}

export function bagVisible(id) {
  const bagContainer = elements.contain.querySelector(`[data-id="${id}"]`);

  const btnBagVisible = bagContainer.querySelector(".products");
  const arrow = bagContainer.querySelector(".arrow");
  arrow.classList.toggle("arrow-2");
  btnBagVisible.classList.toggle("none");
}
// export function dateZakaz(id) {
//   const bagContainer = elements.contain.querySelector(`[data-id="${id}"]`);
//   const dateHTML = bagContainer.querySelector(".date");
//   dateHTML.innerHTML = formatDate();
// }

function formatDate(date) {
  let diff = new Date() - date; // разница в миллисекундах

  if (diff < 1000) {
    // меньше 1 секунды
    return "Только что";
  }

  let sec = Math.floor(diff / 1000); // преобразовать разницу в секунды

  if (sec < 60) {
    return sec + " сек. назад";
  }

  let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
  if (min < 60) {
    return min + " мин. назад";
  }
  let hour = Math.floor(diff / 3600000); // преобразовать разницу в часы
  if (hour < 8) {
    return hour + " час назад";
  }

  // отформатировать дату
  // добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
  let d = date;
  d = [
    "0" + d.getDate(),
    "0" + (d.getMonth() + 1),
    "" + d.getFullYear(),
    "0" + d.getHours(),
    "0" + d.getMinutes(),
  ].map((component) => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

  // соединить компоненты в дату
  return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
}
