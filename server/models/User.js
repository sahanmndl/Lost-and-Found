import mongoose from "mongoose";

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    number: {
        type: String,
        required: true,
        minlength: 10
    }
})

export default mongoose.model("User", userSchema)