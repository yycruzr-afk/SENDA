let modal = document.querySelector("#inicio_sesion")

let boton_inicio_sesion = document.querySelector("#boton_inicio_sesion")

boton_inicio_sesion.addEventListener('click', () =>{
    modal.showModal()
})

let boton_atras = document.querySelector("#btn_index_atras")

boton_atras.addEventListener('click', () =>{
    modal.close()
})


//INTERCAMBIO DE MODOS

let btn_tema = document.querySelector("#btn_cambio");

document.body.classList.remove("light-mode");

document.addEventListener("DOMContentLoaded", () => {
    if (btn_tema) {
        if (document.body.classList.contains("light-mode")) {
            btn_tema.textContent = "Modo Claro";
        } else {
            btn_tema.textContent = "Modo Oscuro";
        }

        btn_tema.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");

            if (document.body.classList.contains("light-mode")) {
                localStorage.setItem("tema", "claro");
                btn_tema.textContent = "Modo Claro";
            } else {
                localStorage.setItem("tema", "oscuro");
                btn_tema.textContent = "Modo Oscuro";
            }
        });
    }
});