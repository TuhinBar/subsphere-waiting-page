"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const common_1 = require("../../controllers/common");
router.get("/total-clients", common_1.getTotalClientsCount);
exports.default = router;
//# sourceMappingURL=index.js.map