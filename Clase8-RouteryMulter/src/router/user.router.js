import { Router } from "express";

const router = Router();
const users = [];
router.get("/", (req, res) => {
    res.json({message: 'Success', data: users});
});
router.post("/", (req, res) => {
    users.push(req.body);
    res.json({message: 'User Added', data: req.body});
})

export default router
//Creamos archivo reutilizable 
//es como un express pero para manejo de rutas