"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const emailController_1 = require("../controllers/emailController");
router.post("/join", emailController_1.addClientToList);
exports.default = router;
//# sourceMappingURL=emailRoutes.js.map