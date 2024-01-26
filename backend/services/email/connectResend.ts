import { Resend } from "resend";

import { emailTemplateHtmlString } from "../../constants/emailTemplate";

let resendAPIKey = process.env.RESEND_API_KEY;

const resend = new Resend(resendAPIKey);

interface EmailOptions {
  senderName: string;
  from: string;
  to: string[];
  subject: string;
}

const sendEmailUsingResend = async ({
  senderName,
  from,
  to,
  subject,
}: EmailOptions) => {
  try {
    console.log("Sending email using Resend ==> 📩 ", to);

    const { data, error } = await resend.emails.send({
      from: `${senderName} <${from}> `,
      to,
      subject,
      html: emailTemplateHtmlString,
    });

    if (error) {
      console.log("Error in [sendEmailUsingResend] ==> 🌋 ", error);
    }

    console.log("Email sent using Resend ==> ✔ ", data);
  } catch (error) {
    console.log("Error in [sendEmailUsingResend] ==> 🌋 ", error);
  }
};

export { sendEmailUsingResend };
