import { Document, model, Schema } from "mongoose";
import { IState } from "../interfaces/state";
import { STATES } from "../states.enum";

interface stateDocument extends IState, Document {}

const stateSchema = new Schema<stateDocument>({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    enum: STATES,
  },
  votes: {
    type: [Schema.Types.ObjectId],
    ref: "Vote",
  },
  electors: {
    type: Number,
    required: true,
  },
});

export const stateModel = model<IState>("State", stateSchema);
