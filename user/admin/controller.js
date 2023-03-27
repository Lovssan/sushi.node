import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
import adminModel from "./admin.js";
import * as zayavkaView from "./view.js";

const zakazModel = new adminModel();
const socket = io();

async function getAndRenderProducts() {
  await zakazModel.mounted();
  zayavkaView.render(zakazModel.zakaz);
}

socket.on("chat message", (data) => {
  // const item = document.createElement("div");
  // item.innerHTML = data;
  zayavkaView.elements.contain.innerHTML = null;
  // zayavka.appendChild(item);
  // zayavkaView.render(data);
  getAndRenderProducts();
});
getAndRenderProducts();

zayavkaView.elements.contain.addEventListener("click", (event) => {
  let action = event.target.dataset.action;
  if (action === "bag-visible") {
    const zayvkaId = +event.target.closest(".container").dataset.id;
    zayavkaView.bagVisible(zayvkaId);
  }
  if (action === "delete") {
    const zayvkaId = +event.target.closest(".container").dataset.id;
    zakazModel.remove(zayvkaId);
    zayavkaView.removeZakaz(zayvkaId);
  }
});
