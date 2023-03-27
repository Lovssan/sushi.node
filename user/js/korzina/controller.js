import CartModel from "./model.js";
import * as cartView from "./view.js";
import forms from "../forms/forms.js";

const cartModel = new CartModel();

cartView.renderCart(cartModel.cart);
const totalPrice = cartModel.getTotalCartPrice();
cartView.updateTotalPrice(totalPrice);
cartView.deliveryCost();

forms();

cartView.elements.forms.addEventListener("click", function (e) {
  let action = e.target.dataset.action;

  if (action === "Now" || action === "neNow") {
    cartView.timeZakaz();
  }
});

cartView.elements.cartContainer.addEventListener("click", function (e) {
  let action = e.target.dataset.action;

  if (action === "plus" || action === "minus") {
    const productNumber = +e.target.closest(".product").dataset.number;

    const product = cartModel.updateCounterInCart(productNumber, action);

    if (product.counter > 0) {
      cartView.updateCounter(product);
    } else {
      cartView.removeItemFromCart(product);
    }
    const totalPrice = cartModel.getTotalCartPrice();
    cartView.updateTotalPrice(totalPrice);
    cartView.deliveryCost();
  }
});
