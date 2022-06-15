import express from "express";
import { addItem, deleteItem, getAllItems, getItemById, getItemsByUserId, updateItem } from "../controllers/item_controller";

const itemRouter = express.Router()

itemRouter.get("/", getAllItems)
itemRouter.post("/additem", addItem)
itemRouter.put("/updateitem/:id", updateItem)
itemRouter.get("/:id", getItemById)
itemRouter.delete("/:id", deleteItem)
itemRouter.get("/user/:id", getItemsByUserId)

export default itemRouter