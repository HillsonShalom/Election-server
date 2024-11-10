import { Request, Response } from "express";
import { userModel } from "../../types/models/user.schema";
import { AppResError } from "../../types/extentions/appResError";

export const getUser = async (req: Request, res: Response) => {
  try {
    const token = req.token!;
    const user = await userModel
      .findById(token.id)
      .select("username -_id")
      .exec();
    res.json(user);
  } catch (err) {
    const error = err as AppResError;
    res
      .status(error.statusCode || 500)
      .json({ name: error.name, message: error.message });
  }
};
