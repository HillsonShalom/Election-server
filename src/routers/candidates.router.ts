import { Router } from "express";
import { getCandidates } from "../controllers/candidates/getCandidates";
import { get } from "mongoose";
import { getState } from "../controllers/candidates/getState";

const router = Router();

router.get("/", getCandidates);
router.get("/state/:state", getState);

export default router;
