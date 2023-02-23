const cantidad = document.querySelector("#cantidad-input");
const precio = document.querySelector("#precio-input");
const estado=document.querySelector("#estado-input");
const form = document.querySelector("#totalizador-form");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let res= precioTotal(cantidad.value,precio.value);
    
    document.getElementById('precio').innerHTML=res
    
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
