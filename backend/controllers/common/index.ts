import { Request, Response } from "express";
import Client from "../../models/client.model";

const getTotalClientsCount = async (req: Request, res: Response) => {
  try {
    const totalClientsCount = await Client.countDocuments();
    console.log("Current client counts are 📌 ", totalClientsCount);
    return res.status(200).json({
      success: true,
      totalClientsCount: totalClientsCount + 42, // we will modify this +something number just as we need lol
    });
  } catch (error: any) {
    console.log("Error in controller [getTotalClientsCount] ==> 🌋 ", error);
    return res.status(500).json({
      success: false,
      message: "Error while getting total clients count",
    });
  }
};

export { getTotalClientsCount };
