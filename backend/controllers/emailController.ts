import Client from "../models/client.model";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import ShortUniqueId from "short-unique-id";
const uid = new ShortUniqueId({ length: 10 });
import isEmail from "validator/lib/isEmail";

const addClientToList = async (req: Request, res: Response) => {
  const { email, referredBy, from } = req.body;
  const clientId = uuidv4();

  console.log("controllers [addClientToList] ==> 🚀 ");
  console.log("request body ==> ", req.body);

  try {
    // Check if the email is valid
    if (!email || !isEmail(email)) {
      console.log("Email is not valid ==> ❌");
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    console.log("Requesting the email ==> 📩 ", email);

    // Check if the client already exists
    const isClientExist = await Client.findOne({ email }).lean();

    if (isClientExist) {
      console.log("Client already exists ==> 🏁");
      return res.status(202).json({
        success: false,
        alreadyExists: true,
        message: "We already have your email in our list",
      });
    }

    // Create a new client
    const newClient = await Client.create({
      email,
      clientId,
      referredBy: referredBy || "subsphere",
      from: from || "direct",
      referId: uid.rnd(),
    });

    console.log("New client created ==> ✔ ", newClient.email);
    return res.status(201).json({
      success: true,
      message: "Successfully added to the list",
      joinedUser: newClient,
    });
  } catch (error: any) {
    console.log("Error in controller [addClientToList] ==> 🌋 ", error);
    return res.status(500).json({
      success: false,
      message: "Error while joining the list",
    });
  }
};

export { addClientToList };
