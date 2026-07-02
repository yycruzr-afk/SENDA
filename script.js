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


//INTERCAMBIO DE MODOS

let btn_tema = document.querySelector("#btn_cambio");

document.body.classList.add("light-mode");

document.addEventListener("DOMContentLoaded", () => {
    if (btn_tema) {
        if (document.body.classList.contains("light-mode")) {
            btn_tema.textContent = "☀️ Modo Claro";
        } else {
            btn_tema.textContent = "🌙 Modo Oscuro";
        }

        btn_tema.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");

            if (document.body.classList.contains("light-mode")) {
                localStorage.setItem("tema", "claro");
                btn_tema.textContent = "☀️ Modo Claro";
            } else {
                localStorage.setItem("tema", "oscuro");
                btn_tema.textContent = "🌙 Modo Oscuro";
            }
        });
    }
});