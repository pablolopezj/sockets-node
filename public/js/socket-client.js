//Referencias HTML
const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");

const txtMessage = document.querySelector("#txtMessage");
const btnSend = document.querySelector("#btnSend");

const socket = io();

socket.on("connect", () => {
  // console.log("conectado");

  lblOnline.style.display = "block";
  lblOffline.style.display = "none";
});

socket.on("disconnect", () => {
  // console.log("desconectado");

  lblOnline.style.display = "none";
  lblOffline.style.display = "block";
});

socket.on("enviar-mensaje", (payload) => {
  console.log(payload);
});

btnSend.addEventListener("click", () => {
  const mensaje = txtMessage.value;

  const payload = {
    mensaje,
    id: "12312",
    fecha: new Date().getDate(),
  };

  socket.emit("enviar-mensaje", payload, (id) => {
    console.log("Desde el server", id);
  });
});
