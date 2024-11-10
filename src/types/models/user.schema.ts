import { Document, model, Schema } from "mongoose";
import { IUser } from "../interfaces/user";

interface userDocument extends IUser, Document {}

const userSchema = new Schema<userDocument>(
  {
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    state: {
      type: Schema.Types.ObjectId,
      ref: "State",
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    hasVoted: {
      type: Boolean,
      default: false,
    },
    vote: {
      type: Schema.Types.ObjectId,
      ref: "Vote",
      default: null,
    },
  },
  { timestamps: true }
);

export const userModel = model<IUser>("User", userSchema);
