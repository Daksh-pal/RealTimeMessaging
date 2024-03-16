import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import { getUsersforSidebar } from "../controllers/usersSidebar.js";


const router = express.Router();

router.get("/", protectRoute, getUsersforSidebar);

export default router;