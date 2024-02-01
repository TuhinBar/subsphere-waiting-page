"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalClientsCount = void 0;
const client_model_1 = __importDefault(require("../../models/client.model"));
const getTotalClientsCount = async (req, res) => {
    try {
        const totalClientsCount = await client_model_1.default.countDocuments();
        console.log("Current client counts are 📌 ", totalClientsCount);
        return res.status(200).json({
            success: true,
            totalClientsCount: totalClientsCount + 42, // we will modify this +something number just as we need lol
        });
    }
    catch (error) {
        console.log("Error in controller [getTotalClientsCount] ==> 🌋 ", error);
        return res.status(500).json({
            success: false,
            message: "Error while getting total clients count",
        });
    }
};
exports.getTotalClientsCount = getTotalClientsCount;
//# sourceMappingURL=index.js.map