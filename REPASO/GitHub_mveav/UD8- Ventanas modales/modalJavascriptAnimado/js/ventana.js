document.addEventListener("click", e => {
  //  e.preventDefault()
    switch (e.target){
        case document.querySelector("#openModal1"):    
            document.querySelector("#modal1").showModal() 
            document.querySelector(".modal").classList.add("is-visible")
            break
        case document.querySelector("#cerrar1"):
            document.querySelector(".modal.is-visible").classList.remove("is-visible");
            document.querySelector("#modal1").close()
            break
      
    }
 
  });
  