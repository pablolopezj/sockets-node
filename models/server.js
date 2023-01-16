import express from "express";
import cors from "cors";
import http from "http";
import { Server as SocketIo } from "socket.io";
import { socketController } from "../sokets/controller.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.server = http.createServer(this.app);
    this.io = new SocketIo(this.server);

    this.paths = {};

    //middlewares
    this.middleware();

    // rutas de la aplicación
    this.routes();

    //Configuración de sockets
    this.sockets();
  }

  middleware() {
    //CORS
    this.app.use(cors());

    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    // this.app.use(this.paths.auth, routerAuth);
  }

  sockets() {
    this.io.on("connection", socketController);
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log("Server ready", this.port);
    });
  }
}

export { Server };
