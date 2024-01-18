import { Request, Response, Router } from "express";
const router = Router();

import { addClientToList } from "../controllers/emailController";

router.post("/join", addClientToList);

export default router;
