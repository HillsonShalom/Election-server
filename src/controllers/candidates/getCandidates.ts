import { Request, Response } from "express";
import { AppResError } from "../../types/extentions/appResError";
import { candModel } from "../../types/models/candidate.schema";

export const getCandidates = async (req: Request, res: Response) => {
  try {
    const cands = await candModel.find({}).select('name image votes -_id').exec()
    res.json(cands)
  } catch (err) {
    const error = err as AppResError;
    res
      .status(error.statusCode || 500)
      .json({ name: error.name, message: error.message });
  }
};