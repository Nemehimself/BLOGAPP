import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
})

const user = mongoose.model("user", usersSchema);

export default user;