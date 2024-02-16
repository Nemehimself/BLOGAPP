import mongoose, { Schema } from "mongoose";
import user from "@/models/user";
import post from "@/models/post";

const commentsSchema = new Schema({
    desc: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'email'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'slug'
    }
})

const comment = mongoose.model("comment", commentsSchema);

export default comment;