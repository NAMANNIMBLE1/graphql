import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // gives createdAt, updatedAt
  }
);

export const User = mongoose.model("User", userSchema);