import { Document, model, Schema } from "mongoose";
import { ICandidate } from "../interfaces/candidate";

interface candidateDocument extends ICandidate, Document {}

const userSchema = new Schema<candidateDocument>({
  name: {
    type: String,
    unique: true,
  },
  image: {
    type: String,
  },
  votes: {
    type: Number,
    default: 0,
  },
  color: {
    type: String,
    enum: ["red", "blue", "yellow"],
    required: true
  }
});

export const candModel = model<ICandidate>("Candidate", userSchema);
