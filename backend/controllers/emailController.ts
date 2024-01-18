import Client from "../models/client.model";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import isEmail from "validator/lib/isEmail";

const addClientToList = async (req: Request, res: Response) => {
  const { email } = req.body;
  const clientId = uuidv4();

  try {
    if (!isEmail(email)) {
      return res.status(200).json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    let isClientExist = await Client.findOne({
      email,
    }).lean();

    if (isClientExist) {
      return res.status(202).json({
        success: false,
        message: "We already have your email in our list",
      });
    }

    const newClient = Client.create(
      {
        email,
        clientId,
      },
      {
        new: true,
      }
    );

    return res.status(201).json({
      success: true,
      message: "Successfully added to the list",
      data: newClient,
    });
  } catch (error: any) {
    console.log("error in addClientToList ==> 🌋 ", error);
    res.status(200).json({
      success: false,
      message: "Error while joining the list",
    });
  }
};

export { addClientToList };
