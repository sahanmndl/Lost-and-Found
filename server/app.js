import express from "express";
import mongoose from "mongoose";
import itemRouter from "./routes/item_routes";
import router from "./routes/user_routes";
import cors from "cors";

const app = express()

app.use(cors())
app.use(express.json({limit: "30mb",extended:true}))
app.use("/api/user", router)
app.use("/api/item", itemRouter)

mongoose
  .connect(
    "mongodb+srv://admin:lostandfound12345@cluster0.kqpf0.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("connected")
  )
  .catch((err) => console.log(err));

//lostandfound12345

