import { Router } from "express";
import travelsRouter from "./travels.router.js";

const router = Router();

router.use(travelsRouter);

export default router;