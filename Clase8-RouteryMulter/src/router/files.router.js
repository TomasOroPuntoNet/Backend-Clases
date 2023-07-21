import { Router } from "express";
import { uploader } from "../utils.js";
const router = Router();
const files = [];
router.get("/", (req, res) => {
    res.json({message: 'Success', data: files});
});
router.post("/", uploader.single("file"),(req, res) => {
    files.push(req.body);
    res.json({message: 'User Added', data: req.body});
})

export default router
//Creamos archivo reutilizable 
//es como un express pero para manejo de rutas