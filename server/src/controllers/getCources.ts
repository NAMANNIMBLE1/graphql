import { Course } from "../models/cources.models.ts";
import { User } from "../models/user.models.ts";

export const getAllCourses = async () => {
    try {
        const courses = await Course.find();
        return courses;
    } catch (error) {
        throw new Error("Failed to fetch courses");
    }
};


export const cource_by_id = async (_: any, { id }: { id: string }) => {
    const course = await Course.findById(id);  // ✅ correct
    return course;
};

export const courseInstructor = async (parent: any) => {
    // parent = course document
    const instructorId = parent.instructor;

    return await User.findById(instructorId);
};