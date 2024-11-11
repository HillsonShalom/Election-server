import { Request, Response } from "express";
import { AppResError } from "../../types/extentions/appResError";
import { stateModel } from "../../types/models/state.schema";

export const getStatesDetails = async (req: Request, res: Response) => {
  try {
    const states = await stateModel.find({}).select('name code electors -_id').exec()
    
    res.json(states);
  } catch (err) {
    const error = err as AppResError;
    res
      .status(error.statusCode || 500)
      .json({ name: error.name, message: error.message });
  }
};

//
