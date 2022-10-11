//referencias de html

const lblOnline = document.getElementById("lblOnline");
const lblOffline = document.getElementById("lblOffline");
const txtMensaje = document.getElementById("txtMensaje");
const btnEnviar = document.getElementById("btnEnviar");


const socket = io()

//Escuchar eventos
socket.on("connect", ()=>{

    // console.log("Conectado")

    lblOffline.style.display = "none"
    lblOnline.style.display= ""
})

socket.on("disconnect", ()=>{
    // console.log("Desconectado del servidor")


    lblOffline.style.display = ""
    lblOnline.style.display= "none"
})


socket.on("enviar-mensaje", (payloadserver) =>{
    console.log(payloadserver)
})

btnEnviar.addEventListener("click", () => {
    const msg = txtMensaje.value
    const payload = {
        msg,
        id: "123abs",
        fecha: new Date().getTime()
    }
    
    socket.emit("enviar-mensaje", payload, (id) => {
        console.log("desde el server", id)
    })
   
})