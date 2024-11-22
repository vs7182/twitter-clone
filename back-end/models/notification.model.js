import mongoose from "mongoose";

const notification = new mongoose.Schema(
    {
        from: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            requiredL: true,
        },
        to: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            requiredL: true,
        },
        type: {
            type: String,
            required: true,
            enum: ["follow","like"],
        },
        read: {
            type: Boolean,
            default: false,
        },
    },
    {timestamps: true }
);

const Notification = mongoose.model("Notification",notification);

export default Notification;
// Path : back-end/models.post.model.js