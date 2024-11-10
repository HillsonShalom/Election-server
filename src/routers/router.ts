import { Router } from "express";
import users from './users.router'
import candidates from './candidates.router'
import votes from './votes.router'
import admin from './admin.router'

const router = Router()
router.use("/users", users)
router.use("/candidates", candidates)
router.use("/votes", votes)
router.use("/admin", admin)

export default router;