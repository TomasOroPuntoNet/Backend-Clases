import express from 'express';
import {Server} from "socket.io";
import {engine} from "express-handlebars";
import viewsRouter from "../routes/views.router.js";
//El import {Server} from "socket.io"; te permite importar la clase Server de la biblioteca socket.io. Esto te permite crear y configurar un servidor de sockets en tu aplicación.
// Por otro lado, el import {engine} from "express-handlebars"; te permite importar la función engine de la biblioteca express-handlebars. Esta función es un motor de plantillas que te permite renderizar vistas en tu aplicación Express utilizando el motor de plantillas Handlebars.

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");
app.use("/", viewsRouter);


app.get('/', (req, res) => {
    res.json({messege:'Hello World with Express'});
})

const server = app.listen(PORT, () => {
    console.log('Listening on port 8080');
})

server.on('error', (error) => {
    console.error(error);
})