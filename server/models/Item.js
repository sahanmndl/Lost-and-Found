import mongoose from "mongoose";

const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    foundat: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    number: {
        type: String, 
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    }
})

export default mongoose.model("Item", itemSchema)