import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
    const {name} = req.query
    res.render("Saludo", {title:"Saludo", name: name});    
    
})

router.get("/saludo", (req, res) => {
    res.send("Hello, how are you?");    
})

export default router;
