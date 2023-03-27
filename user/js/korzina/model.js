export default class Model {
  constructor() {
    this.cart = [];
    this.loadCartFromToLocalStorage();
  }

  newElementInObject() {
    for (let i = 0; i < this.cart.length; i++) {
      this.cart[i].number = i;
    }
  }

  loadCartFromToLocalStorage() {
    const data = JSON.parse(localStorage.getItem("cart"));
    if (data) {
      this.cart = data;
    }
    this.newElementInObject();
    this.saveCartToLocalSorage();
  }

  saveCartToLocalSorage() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }
  getTotalCartPrice() {
    let totalPrice = 0;
    this.cart.forEach(function (item) {
      totalPrice = totalPrice + item.price * item.counter;
    });
    return totalPrice;
  }

  updateCounterInCart(number, action) {
    let productInCart;
    productInCart = this.cart.find(function (product) {
      return number === product.number;
    });

    if (action === "plus") {
      ++productInCart.counter;
    }
    if (action === "minus" && productInCart.counter > 0) {
      --productInCart.counter;
    }

    if (productInCart.counter === 0) {
      const index = this.cart.findIndex((item) => {
        return item.number === productInCart.number;
      });
      this.cart.splice(index, 1);
    }
    this.saveCartToLocalSorage();
    return productInCart;
  }
}
