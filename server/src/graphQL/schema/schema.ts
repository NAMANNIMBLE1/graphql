export const schema = `#graphql

    type User {
        _id: ID!
        name: String!
        password: String!
        verified: Boolean!
        createdAt: String
        updatedAt: String
    }

    type Course {
        _id: ID!
        title: String!
        description: String!
        price: Float!
        instructor: User
        duration: Int!
        level: String!
        published: Boolean!
        createdAt: String
        updatedAt: String
    }

    type SampleUser{
        name: String!
        email: String!
        password: String! 
    }

    type Query {
        users: [User]
        user(id: ID!): User

        courses: [Course]
        course(id: ID!): Course

        sampleuser:SampleUser
    }

    type Mutation{
        newUser(name:String! , email :String! , password:String!):SampleUser
    }
`