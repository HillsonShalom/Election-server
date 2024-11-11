import { Request, Response } from "express";
import { AppResError } from "../types/extentions/appResError";
import { stateModel } from "../types/models/state.schema";
import { ICandidate } from "../types/interfaces/candidate";
import { IResults } from "../types/DTOs/results";

export const getResults = async (req: Request, res: Response) => {
    try {
        const states = await stateModel.find({}).select('-_id -__v').populate({
            path: "votes",
            select: "candidate -_id",
            populate: { path: "candidate", select: 'name -_id' },
          }).exec();
        const votesReduce = states.map(state => {
            const reduce = state.votes.reduce<{ [key: string]: number }>((acc, vote) => {
                const candName = (vote as {candidate: ICandidate}).candidate.name;
                acc[candName] = (acc[candName] || 0) + 1;
                return acc;
            }, {});
            const stateResult: IResults = {stateCode: state.code, results: reduce }
            return stateResult;
        })
        res.json(votesReduce)
    } catch(err) {
        const error = err as AppResError;
        res
          .status(error.statusCode || 500)
          .json({ name: error.name, message: error.message });
    }
};