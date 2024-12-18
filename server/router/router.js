
import express from "express";
import userDetails from "../controller/userController.js"; 
const router = express.Router();

router.post('/login',userDetails.login)

export default router;