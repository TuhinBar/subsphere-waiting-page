import { Schema, model, Document } from "mongoose";

interface IClient extends Document {
  email: string;
  clientId: string;
  from: string;
  referredBy: string;
  referId: string;
}

const clientSchema = new Schema<IClient>({
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

export default model<IClient>("Client", clientSchema);
