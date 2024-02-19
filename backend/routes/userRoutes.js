import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import { getUsersforSidebar } from "../controllers/usersSidebar.js";

const router = express.Router();
// console.log("till user routes")
router.get('/',protectRoute,getUsersforSidebar);


export default router;
