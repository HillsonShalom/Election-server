import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppResError } from "../../types/extentions/appResError";
import { userModel } from "../../types/models/user.schema";
import { LoginDto } from "../../types/DTOs/userDtos";

export const login = async (
  req: Request<any, any, LoginDto>,
  res: Response
) => {
  try {
    const body = req.body;
    if (!body.username || !body.password)
      throw new AppResError(400, "please enter username and password");
    const user = await userModel.findOne({ username: body.username });
    if (!user || !(await checkPassword(body.password, user.password)))
      throw new AppResError(401, "username or password are wrong!");
    // here we will send a cookie
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY!, {
      expiresIn: "4h",
    });
    res.cookie("token", token);
    res.status(200).send("correct entrence");
  } catch (err) {
    const error = err as AppResError;
    res
      .status(error.statusCode || 500)
      .json({ name: error.name, message: error.message });
  }
};

const checkPassword = async (
  data: string,
  encrypted: string
): Promise<boolean> => {
  return await bcrypt.compare(data, encrypted);
};
