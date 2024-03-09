const abrirModal=document.querySelector("#abrirmodal");
const cerrarModal=document.querySelector("#cerrar");
const Modal=document.querySelector("#modal");


abrirModal.addEventListener("click",()=>{
    Modal.showModal();
})

cerrarModal.addEventListener("click",()=>{
    Modal.close();
})