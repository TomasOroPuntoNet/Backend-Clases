import express from "express";
import userRouter from "./router/user.router.js";
import petRouter from "./router/pet.router.js";
// import { __dirname } from "./utils.js";
const app = express();
const PORT = 8080;
// app.use("/sitioweb", express.static( __dirname + "public"));  
app.use(express.json());
app.use("/", express.static("public"));  

function auth(req, res, next){
    const { user } = req.body;
    if(user !== "admin"){
        res.status(401).json({message: 'Unauthorized'})
    }else{
        console.log("Bienvenido");
        next();
        
    }
}
function logTime(req, res, next) {
    console.log("Time: ", Date.now());
    next();
}
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
app.use( function(err, req, res, next){
    console.log(err.stack);
    res.status(500).send('Something broke!');   
    
})
app.use("/api/user",logTime,auth ,userRouter );
app.use("/api/pet",logTime ,petRouter);