import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { AppResError } from "../../types/extentions/appResError";
import { RegisterDto } from "../../types/DTOs/userDtos";
import { userDocument, userModel } from "../../types/models/user.schema";
import { IUser } from "../../types/interfaces/user";
import { stateModel } from "../../types/models/state.schema";

export const register = async (
  req: Request<any, any, RegisterDto>,
  res: Response
) => {
  try {
    const dto = req.body;
    const user: IUser = {
        username: dto.username,
        password: await bcrypt.hash(dto.password, 5),
        state: (await stateModel.findOne({code: dto.state}).exec())?.id,
        isAdmin: false,
        vote: null,
        hasVoted: false
    }
    const newUser = new userModel(user)
    const created = await newUser.save()
    res.status(201).json(created)
  } catch (err) {
    const error = err as AppResError;
    res
      .status(error.statusCode || 500)
      .json({ name: error.name, message: error.message });
  }
};

