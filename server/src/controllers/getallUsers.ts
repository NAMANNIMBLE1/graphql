import { User } from "../models/user.models.ts"
import sampleUser from "../models/sampleUser.models.ts"

export const all_users = async () => {
    const users = await User.find()
    console.log(users)
    return users
}

export const user_by_id = async (parent: any, arg: { id: string }) => {
    const user = await User.findById(arg.id)
    console.log(user)
    return user
}


export const create_new_user = async (parent, { name, email, password }) => {
    console.log(name, email, password)
    if (!sampleUser.find(email)) {
        const sampleuser = await sampleUser.create({ name, email, password });
        return sampleuser;
    } else {
        console.log("duplicate entry exists");
    }
}