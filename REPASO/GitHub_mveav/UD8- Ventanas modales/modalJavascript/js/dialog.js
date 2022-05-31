const $d = document,
      $abreModal=$d.querySelector('#abreModal'),
      $form=$d.querySelector("form"),
      $dialog=$d.querySelector('#favDialog'),
      $select=$form.querySelector("select")

$abreModal.addEventListener('click', e=> {
    $dialog.showModal()
    $select.value="Elige un animal"
})

$form.addEventListener('click', e=>{
    const $titulo = $d.querySelector("#titulo"),
          $parrafo = $d.querySelector("#parrafo")
          if (e.target.id=="confirmar") {
            if ($select.value!="Elige un animal") {
                $titulo.innerHTML = "Animal Favorito"
                $parrafo.innerHTML = "Has elegido como animal favorito el "+ $select.value +"."        
                $dialog.close()
            } else
                e.preventDefault()
        } else if (e.target.id=="cancel") {
            $titulo.innerHTML="No has elegido animal"
            $parrafo.innerHTML=""
            $dialog.close()
        }s
}
)
