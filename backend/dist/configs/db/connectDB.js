"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const db_uri = process.env.MONGO_URI;
const connectToDB = async () => {
    try {
        if (!db_uri) {
            throw new Error("db_uri is not defined");
        }
        console.log(`Connecting to DB..`);
        await mongoose_1.default.connect(db_uri, {});
        console.log("Successfully connected to database 🚀");
    }
    catch (error) {
        console.error("Error connecting to database: ", error.message);
    }
};
exports.default = connectToDB;
//# sourceMappingURL=connectDB.js.map