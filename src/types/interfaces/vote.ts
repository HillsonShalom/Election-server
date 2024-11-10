import { Types } from "mongoose";
import { ICandidate } from "./candidate";

export interface IVote {
    voter: Types.ObjectId;
    candidate: Types.ObjectId | ICandidate;
    state: Types.ObjectId;
}