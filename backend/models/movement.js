import mongoose from "mongoose";

const movementSchema = mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    value: {
        type: Number,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    description: {
        type: String
    }
}, { timestamps: true })

export const Movement = mongoose.model('Movement', movementSchema)