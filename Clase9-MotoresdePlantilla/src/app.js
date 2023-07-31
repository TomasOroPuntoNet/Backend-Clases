import express from 'express';
import {engine} from 'express-handlebars';
import viewRouter from './routes/view.router.js';
const app = express();
const PORT = process.env.PORT||8080;

app.engine("handlebars", engine())
app.set("view engine", "handlebars");
app.set("views", "./views");


app.use(express.static('public'));
app.use("/views", viewRouter);
app.get('/', (req, res) => {
    res.send('Hello World with Express');
})

app.listen(PORT, () => {
    console.log('Listening on port 8080');
})