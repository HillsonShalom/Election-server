import { Router } from "express";
import { getCandidates, getResults, getState } from "../controllers/candidates";

const router = Router();

router.get("/candidates", getCandidates);
router.get("/", getResults);
router.get("/state", getState);

export default router;
