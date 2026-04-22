import mongoose, { Schema, Document, Model } from "mongoose";


export interface ICourse extends Document {
    title: string;
    description: string;
    price: number;
    instructor: mongoose.Types.ObjectId;
    duration: number;
    level: "beginner" | "intermediate" | "advanced";
    published: boolean;
    thumbnail?: string;
    studentsEnrolled: number;
    createdAt?: Date;
    updatedAt?: Date;
}

const courseSchema: Schema<ICourse> = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
            min: 0,
        },

        instructor: {
            type: Schema.Types.ObjectId,
            ref: "User",   // 🔗 relation
            required: true,
        },

        duration: {
            type: Number,
            required: true,
        },

        level: {
            type: String,
            enum: ["beginner", "intermediate", "advanced"],
            default: "beginner",
        },

        published: {
            type: Boolean,
            default: false,
        },

        thumbnail: {
            type: String,
        },

        studentsEnrolled: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true, // ✅ auto createdAt, updatedAt
    }
);



export const Course: Model<ICourse> =
    mongoose.models.Course || mongoose.model<ICourse>("Course", courseSchema);