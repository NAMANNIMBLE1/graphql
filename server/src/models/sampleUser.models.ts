import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
        },

        password: {
            type: String,
            required: true,
            minlength: 4,
        },

    }
);

const sampleUser = mongoose.model("sampleUser", userSchema);

export default sampleUser