import { Request, Response } from "express";
import { AppResError } from "../../types/extentions/appResError";
import { stateModel } from "../../types/models/state.schema";
import { IVote } from "../../types/interfaces/vote";
import { ICandidate } from "../../types/interfaces/candidate";

export const getState = async (req: Request, res: Response) => {
  try {
    const param = req.params["state"];
    const state = await stateModel
      .findOne({ $or: [{ name: param }, { code: param }] })
      .select("-_id -__v")
      .populate({
        path: "votes",
        select: "candidate -_id",
        populate: { path: "candidate", select: 'name -_id' },
      }).exec();
    if (!state) throw new AppResError(404, "State not found!");

    const votesReduce = state.votes.reduce<{ [key: string]: number }>((acc, vote) => {
        const candName = (vote as {candidate: ICandidate}).candidate.name;
        acc[candName] = (acc[candName] || 0) + 1;
        return acc;
    }, {});
    res.json(votesReduce);
  } catch (err) {
    const error = err as AppResError;
    res
      .status(error.statusCode || 500)
      .json({ name: error.name, message: error.message });
  }
};

