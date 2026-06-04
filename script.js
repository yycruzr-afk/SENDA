let modal = document.querySelector("#inicio_sesion")

let boton_inicio_sesion = document.querySelector("#boton_inicio_sesion")

boton_inicio_sesion.addEventListener('click', () =>{
    modal.showModal()
})

let boton_atras = document.querySelector("#btn_index_atras")

boton_atras.addEventListener('click', () =>{
    modal.close()
})


//BOTON DE MENU HAMBUERGESA

let btn_hamburgesa = document.querySelector(".btn__hamburgesa");

let menuActivo = false;

btn_hamburgesa.addEventListener('click', () => {
    if(!menuActivo){
        document.querySelector(".menu_hamburgesa").style.display = "flex";
        menuActivo = true;
    }
    else{
        document.querySelector(".menu_hamburgesa").style.display = "none";
        menuActivo = false;
    }
})