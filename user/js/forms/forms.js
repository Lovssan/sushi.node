import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";

const forms = () => {
  const form = document.querySelector(".price-form");
  const page = document.querySelector(".page");
  const input = document.querySelectorAll("input");
  const products = JSON.parse(localStorage.getItem("cart"));

  const message = {
    loading: "Загрузка...",
    success: "Заказ оформлен, менеджер свяжется с вами в течение 15 мин!",
    Fail: "Произошла ошибка!",
  };

  const postData = async (url, data) => {
    document.querySelector(".status-text").innerText = message.loading;
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let statusMessage = document.createElement("div");
    let statusMessageText = document.createElement("div");
    statusMessage.appendChild(statusMessageText);
    statusMessage.classList.add("status");
    statusMessageText.classList.add("status-text");
    page.appendChild(statusMessage);

    function date() {
      document.querySelector("#nenow").value = `${
        document.querySelector("#date").value
      } Время: ${document.querySelector("#time").value}`;
    }
    date();

    const formData = new FormData(form);

    const data = {};

    for (const [key, value] of formData) {
      data[key] = value;
    }

    const korzina = JSON.parse(localStorage.getItem("cart"));

    data.korzina = korzina;

    const totalPrice = document.querySelector(".total-price").innerText;
    data.totalPrice = totalPrice;
    ///
    const socket = io();

    socket.emit("chat message", data);
    ///

    postData("http://localhost:3000/api/server", data)
      .then((res) => {
        console.log(res);
        statusMessageText.textContent = message.success;
      })
      .catch(() => (statusMessageText.textContent = message.Fail))
      .finally(() => {
        setTimeout(() => {
          statusMessage.remove();
        }, 5000);

        input[0].value = "";
        input[1].value = "";
        input[2].value = "";
      });
  });
};

export default forms;
