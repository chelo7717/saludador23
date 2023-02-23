const cantidad = document.querySelector("#cantidad-input");
const precio = document.querySelector("#precio-input");
const estado=document.querySelector("#estado-input");
const form = document.querySelector("#totalizador-form");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let res= precioTotal(cantidad.value,precio.value);
    let valorimpuesto = ImpFORstate(res,estado.value);
    
    document.getElementById('precio').innerHTML=res;
    document.getElementById('impuesto').innerHTML = valorimpuesto;
    
});
function precioTotal(cantidad,precio)
{
    if((cantidad <= 0) || (precio <= 0))
    {
        alert("Numero negativo");
    }
    let res=cantidad*precio;
    return res;
}
function ImpFORstate(valorcompra, valueState) {
  let valorImpuestos=0;
  let res;
  switch (valueState) {
      case 'CA':
          valorImpuestos = 0.0825;
          break;
      default:
          alert("No existe");
  }
  res = valorcompra * valorImpuestos;
  return res;
}
