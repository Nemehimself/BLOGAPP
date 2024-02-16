import mongoose, { Schema } from "mongoose";

const categoriesSchema = new Schema({
    slug: {
        type: Boolean,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    }
})

const category = mongoose.model("category", categoriesSchema);

export default category;