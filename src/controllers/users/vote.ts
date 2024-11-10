import { Request, Response } from "express";
import { AppResError } from "../../types/extentions/appResError";
import { VoteDto } from "../../types/DTOs/userDtos";
import { userModel } from "../../types/models/user.schema";
import { candModel } from "../../types/models/candidate.schema";
import { stateModel } from "../../types/models/state.schema";
import { voteModel } from "../../types/models/vote.schema";

export const vote = async (req: Request<any, any, VoteDto>, res: Response) => {
  try {
    const user = await userModel.findById(req.token!.id);
    if (!user) throw new AppResError(401, "User not found!");
    const state = await stateModel.findById(user.state);
    const cand = await candModel.findOne({ name: req.body.to });
    if (!cand) throw new AppResError(404, "Candidate not found!");
    if (!state) throw new AppResError(404, "State not found!");

    if (user.hasVoted) throw new AppResError(403, "You already voted!");

    const vote = new voteModel({
      voter: user.id,
      candidate: cand.id,
      state: state.id,
    });
    const voteCreated = await vote.save();

    user.vote = voteCreated.id;
    user.hasVoted = true;
    await user.save();

    state.votes.push(voteCreated.id);
    await state.save();

    cand.votes += 1;
    await cand.save();

    res.send(
      `You have voted successfully to ${cand.name}, in your state - ${state.name}`
    );
  } catch (err) {
    const error = err as AppResError;
    res
      .status(error.statusCode || 500)
      .json({ name: error.name, message: error.message });
  }
};
