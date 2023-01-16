export const socketController = (socket) => {
  console.log("Cliente conectado", socket.id);

  socket.on("disconnect", () => {
    console.log("Cliente desconectado");
  });

  socket.on("enviar-mensaje", (payload, callback) => {
    const id = "000999OOO";
    callback(id);
    socket.broadcast.emit("enviar-mensaje", payload);
  });
};
