import { Types } from "mongoose";

export interface IVote {
    voter: Types.ObjectId;
    candidate: Types.ObjectId;
    state: Types.ObjectId;
}