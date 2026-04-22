import sampleUser from "../../models/sampleUser.models.ts";
import { all_users, user_by_id } from "../../controllers/getallUsers.ts";
import { getAllCourses, cource_by_id, courseInstructor } from "../../controllers/getCources.ts";
import { emitWarning } from "node:process";
import { IsUnknown } from "mongoose";

type Samp = {
    name: string;
    email: string;
    password: string;
};



export const resolvers = {

    Mutation: {
        newUser: async (parent: unknown, { name, email, password }: Samp) => {
            console.log(name, email, password)
            const sampleuser = await sampleUser.create({ name, email, password });
            return sampleuser;
        }
    },

    Query: {
        users: all_users,
        user: user_by_id,
        courses: getAllCourses,
        course: cource_by_id
    },

    // to get course instructor from the user model 
    Course: {
        instructor: courseInstructor
    }
}
