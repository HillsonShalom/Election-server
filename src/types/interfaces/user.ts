import { Types } from "mongoose";

export interface IUser {
  username: string;
  password: string;
  state: Types.ObjectId;
  isAdmin: boolean;
  hasVoted: boolean;
  vote: Types.ObjectId | null;
}
