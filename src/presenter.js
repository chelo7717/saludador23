
const item = document.querySelector("#ingresa-cantitem");
const prec = document.querySelector("#ingresa-precio");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const itemcant = Number.parseInt(item.value);
  const precio = Number.parseInt(prec.value);

  div.innerHTML = "<p>" + itemcant +" PRECIO DE ITEMS " + precio +"bs." + "</p>";
});
