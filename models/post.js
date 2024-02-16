import mongoose, { Schema } from "mongoose";    
import user from "@/models/user";
import category from "@/models/category";

const postsSchema = new Schema({
    slug: {
        type: Boolean,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    view: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date, 
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'email'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'slug'
    }
})

const post = mongoose.model("post", postsSchema);

export default post;