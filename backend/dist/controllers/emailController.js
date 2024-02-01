"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addClientToList = void 0;
const client_model_1 = __importDefault(require("../models/client.model"));
const uuid_1 = require("uuid");
const short_unique_id_1 = __importDefault(require("short-unique-id"));
const uid = new short_unique_id_1.default({ length: 10 });
const isEmail_1 = __importDefault(require("validator/lib/isEmail"));
const connectResend_1 = require("../services/email/connectResend");
const addClientToList = async (req, res) => {
    const { email, referredBy, from } = req.body;
    const clientId = (0, uuid_1.v4)();
    console.log("controllers [addClientToList] ==> 🚀 ");
    console.log("request body ==> ", req.body);
    try {
        // Check if the email is valid
        if (!email || !(0, isEmail_1.default)(email)) {
            console.log("Email is not valid ==> ❌");
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email",
            });
        }
        console.log("Requesting the email ==> 📩 ", email);
        // Check if the client already exists
        const isClientExist = await client_model_1.default.findOne({ email }).lean();
        if (isClientExist) {
            console.log("Client already exists ==> 🏁");
            return res.status(202).json({
                success: false,
                alreadyExists: true,
                message: "We already have your email in our list",
            });
        }
        // Create a new client
        const newClient = await client_model_1.default.create({
            email,
            clientId,
            referredBy: referredBy || "subsphere",
            from: from || "direct",
            referId: uid.rnd(),
        });
        console.log("New client created ==> ✔ ", newClient.email);
        // when new client created send them an email
        (0, connectResend_1.sendEmailUsingResend)({
            senderName: "Subsphere",
            from: "business@thesubsphere.com",
            to: [newClient.email],
            subject: "Welcome to Subsphere",
        });
        return res.status(201).json({
            success: true,
            message: "Successfully added to the list",
            joinedUser: newClient,
        });
    }
    catch (error) {
        console.log("Error in controller [addClientToList] ==> 🌋 ", error);
        return res.status(500).json({
            success: false,
            message: "Error while joining the list",
        });
    }
};
exports.addClientToList = addClientToList;
//# sourceMappingURL=emailController.js.map