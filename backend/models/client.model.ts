import { Schema, model, Document } from "mongoose";

interface IClient extends Document {
  email: string;
  clientId: string;
}

const clientSchema = new Schema<IClient>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  clientId: {
    type: String,
  },
});

export default model<IClient>("Client", clientSchema);
