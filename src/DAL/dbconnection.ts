import "dotenv/config";
import { connect } from "mongoose";
import { candModel } from "../types/models/candidate.schema";
import { initCandidates, initStates } from "./seed";
import { stateModel } from "../types/models/state.schema";
export const dbConnection = async () => {
  try {
    const connStr = process.env.CONNECTION_STRING;
    await connect(connStr!);
    console.log("Succussfully connected to MongoDB");

    const docs = await candModel.countDocuments();
    console.log("the candidate that already exsists are" + docs);
    if (!docs) {
      await initCandidates();
      console.log("candidates seeded");
    }
    const stas = await stateModel.countDocuments();
    console.log("the states that already exsists are" + stas);
    if (!stas) {
      await initStates();
      console.log("states seeded");
    }
  } catch (err) {
    console.error("Failed to connect to MongoDB");
  }
};

