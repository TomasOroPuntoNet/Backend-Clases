import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", {});
});
router.get("/pepe", (req, res) => {
  res.render("pepeArgento", {});
});

export default router;