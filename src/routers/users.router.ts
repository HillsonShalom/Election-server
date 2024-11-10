import { Router } from "express";
import { getAllUsers } from "../controllers/users";
import { register } from "../controllers/users/register";
import { verifyToken } from "../middlewares/tokenMiddleware";
import { login } from "../controllers/users/login";
import { getUser } from "../controllers/users/getUser";
import { vote } from "../controllers/users/vote";

const router = Router()

router.post('/login', login)
router.post('/register', register)
router.post('/vote', verifyToken, vote)
router.get('/', verifyToken, getUser)
router.get('/all', getAllUsers)

export default router;