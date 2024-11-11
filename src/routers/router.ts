import { Router } from "express";
import users from "./users.router";
import candidates from "./candidates.router";
import votes from "./votes.router";
import admin from "./admin.router";
import states from "./states.router";
import { getState } from "../controllers/candidates/getState";
import { getResults } from "../controllers/getResults";

const router = Router();
router.get("/", getResults);
router.use("/users", users);
router.use("/candidates", candidates);
router.use("/votes", votes);
router.use("/admin", admin);
router.use("/states", states);
router.get("/:state", getState);

export default router;
