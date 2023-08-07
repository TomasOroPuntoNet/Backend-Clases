import {Server} from "socket.io";
import{engine} from "express-handlebars";
import express from "express";
import viewsRouter from "../routes/views.router.js";


app.use(express.json());
app.use(express.urlencoded({extended: true}));
const app = express();
const PORT = 8080
const messeges = [];

const httpServer = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    console.log("Starting by socket.io")
});

const socketServer = new Server(httpServer);
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(express.static('public'));


app.get("/", (req, res) => {
    res.json({messege: "Hello World with Express"});
})

app.post("/socketMessege", (req, res) => {

    const {message} = req.body;
    socketServer.emit("messege", message);
    res.json({messege: "ok"});

})
app.get("/messages", (req, res) => {
    res.json(messeges);
})