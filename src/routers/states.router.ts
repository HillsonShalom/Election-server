import { Router } from "express";
import { getStatesDetails } from "../controllers/states/statesDetails";

const router = Router();

router.use("/", getStatesDetails);

export default router;
