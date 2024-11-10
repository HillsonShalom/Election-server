import { Types } from "mongoose";
import { EStates } from "../states.enum";
import { IVote } from "./vote";

export interface IState {
  name: string;
  code: EStates;
  votes: Types.ObjectId[] | IVote[];
  electors: number;
}
