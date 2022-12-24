import mongoose from "mongoose";

const movementSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
}, { timestamps: true })

export const User = mongoose.model('User', movementSchema)