import { Request, Response, Router } from "express";
const router = Router();

import { getTotalClientsCount } from "../../controllers/common";

router.get("/total-clients", getTotalClientsCount);

export default router;
