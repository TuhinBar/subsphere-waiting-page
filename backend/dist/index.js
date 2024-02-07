"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: "prod.env" });
// dotenv.config({ path: "dev.env" });
console.log("ENV : ", process.env.NODE_ENV);
// library imports
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// configuration imports
const connectDB_1 = __importDefault(require("./configs/db/connectDB"));
// routes imports
const emailRoutes_1 = __importDefault(require("./routes/emailRoutes"));
const index_1 = __importDefault(require("./routes/common/index"));
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
const VERSION = "1.0.0";
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: "6mb" }));
app.get("/", (req, res) => {
    res
        .status(200)
        .json({ success: "SubSphere early access list is up 🎉 " + VERSION });
});
// routes
app.use("/api/v1/waitlist", emailRoutes_1.default);
app.use("/api/v1/waitlist", index_1.default);
app.listen(port, async () => {
    try {
        await (0, connectDB_1.default)();
        console.log(`Server is running on port ${port}`);
        console.log(`version: ${VERSION}`);
    }
    catch (error) {
        console.log("Error in connecting to DB: ", error.message);
    }
});

setInterval(function () {
  // do something here
  console.log("INTERVAL", new Date().toLocaleString());
  fetch("https://waitlist-backend-kj54.onrender.com");
}, 300000);
//# sourceMappingURL=index.js.map
