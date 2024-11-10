import { Types } from "mongoose";
import { EStates } from "../states.enum";

export interface IState {
  name: string;
  code: EStates;
  votes: Types.ObjectId[];
  electors: number;
}
