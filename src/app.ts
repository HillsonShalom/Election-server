import exp from "express";
import router from "./routers/router";
import cookieParser from 'cookie-parser';
import { dbConnection } from "./DAL/dbconnection";

import "dotenv/config";
import { verifyToken } from "./middlewares/tokenMiddleware";
const port = process.env.PORT || 3000;

dbConnection()

const app = exp();
app.use(exp.json())
app.use(cookieParser())
app.use(verifyToken)
app.use('/api', router)

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`);
});
