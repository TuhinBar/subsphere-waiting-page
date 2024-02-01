"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmailUsingResend = void 0;
const resend_1 = require("resend");
const emailTemplate_1 = require("../../constants/emailTemplate");
let resendAPIKey = process.env.RESEND_API_KEY;
const resend = new resend_1.Resend(resendAPIKey);
const sendEmailUsingResend = async ({ senderName, from, to, subject, }) => {
    try {
        console.log("Sending email using Resend ==> 📩 ", to);
        const { data, error } = await resend.emails.send({
            from: `${senderName} <${from}> `,
            to,
            subject,
            html: emailTemplate_1.emailTemplateHtmlString,
        });
        if (error) {
            console.log("Error in [sendEmailUsingResend] ==> 🌋 ", error);
        }
        console.log("Email sent using Resend ==> ✔ ", data);
    }
    catch (error) {
        console.log("Error in [sendEmailUsingResend] ==> 🌋 ", error);
    }
};
exports.sendEmailUsingResend = sendEmailUsingResend;
//# sourceMappingURL=connectResend.js.map