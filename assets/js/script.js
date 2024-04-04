/* EJERCICIO 1 */

const img = document.querySelector(".tocar-imagen");

img.addEventListener("click", function () {
  if (img.style.border === "2px solid red") {
    img.style.border = "none";
  } else {
    img.style.border = "2px solid red";
  }
});

/* EJERCICIO 2 */

const orderButton = document.querySelector(".order-button");
const stickers = document.querySelectorAll(".quantity");
const result = document.querySelector(".result");

orderButton.addEventListener("click", function () {
  let total = 0;
  stickers.forEach(function (sticker) {
    total += parseInt(sticker.value);
  });

  if (total === 0) {
    result.innerHTML = "No has seleccionado ningún sticker.";
  } else if (total <= 10) {
    result.innerHTML = `Llevas ${total} stickers.`;
  } else {
    result.innerHTML = "Llevas demasiados stickers.";
  }
});

/* EJERCICIO 3 */

const submitButton = document.querySelector(".submit");
const resultado = document.querySelector(".resultado");

submitButton.addEventListener("click", function () {
  const passwordInputs = document.querySelectorAll(".password");
  const password1 = passwordInputs[0].value;
  const password2 = passwordInputs[1].value;
  const password3 = passwordInputs[2].value;

  if (password1 === "9" && password2 === "1" && password3 === "1") {
    resultado.textContent = "Password 1 correcto";
  } else if (password1 === "7" && password2 === "1" && password3 === "4") {
    resultado.textContent = "Password 2 correcto";
  } else {
    resultado.textContent = "Password incorrecto";
  }
});
