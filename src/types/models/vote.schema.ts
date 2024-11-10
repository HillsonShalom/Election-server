import { Document, model, Schema } from "mongoose";
import { IVote } from "../interfaces/vote";

interface voteDocument extends IVote, Document {}

const voteSchema = new Schema<voteDocument>({
    voter: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    candidate: {
        type: Schema.Types.ObjectId,
        ref: 'Candidate'
    },
    state: {
        type: Schema.Types.ObjectId,
        ref: 'State'
    }
});

export const voteModel = model<IVote>("Vote", voteSchema);
