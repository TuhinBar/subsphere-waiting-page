"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const clientSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
    },
    clientId: {
        type: String,
    },
    from: {
        type: String,
    },
    referredBy: {
        type: String,
    },
    referId: {
        type: String,
    },
});
exports.default = (0, mongoose_1.model)("Client", clientSchema);
//# sourceMappingURL=client.model.js.map