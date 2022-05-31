const $d=document,
      formulario=$d.querySelector("form")

formulario.addEventListener("change", e => {
    formulario.limpiar.disabled = false;
 })
 
formulario.limpiar.addEventListener("click", e=> {
   e.target.disabled=true;
   formulario.reset(); 
 })

 $d.addEventListener("blur", e=>{
   if (e.target.value != '' && formulario.limpiar.disabled) formulario.limpiar.disabled = false;
})