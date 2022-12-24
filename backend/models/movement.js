import mongoose from "mongoose";

const movementSchema = mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    value: {
        type: Number,
        require: true
    }
}, { timestamps: true })

export const Movement = mongoose.model('Movement', movementSchema)