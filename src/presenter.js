
const item = document.querySelector("#ngresar-cantitem");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const itemcant = Number.parseInt(item.value);

  div.innerHTML = "<p>" + itemcant + "</p>";
});
