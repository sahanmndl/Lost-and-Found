import express from "express";
import { getAllItems } from "../controllers/item_controller";

const itemRouter = express.Router()

itemRouter.get("/", getAllItems)

export default itemRouter