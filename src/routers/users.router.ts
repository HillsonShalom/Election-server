import { Router } from "express";
import { getAllUsers, getUser, login, register, vote } from "../controllers/users";

const router = Router()

router.post('/login', login)
router.post('/register', register)
router.post('/vote', vote)
router.get('/', getUser)
router.get('/all', getAllUsers)

export default router;