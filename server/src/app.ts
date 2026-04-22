import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { expressMiddleware } from '@as-integrations/express';
import { graphql_server } from './graphQL/graphql.ts';
import { connectDB } from './database/database.ts';

const port = Number(process.env.PORT) || 7000;
const mongodb_uri = process.env.MONGODB_URI;

const startServer = async () => {
    await connectDB(mongodb_uri);
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { expressMiddleware } from '@as-integrations/express';
import { graphql_server } from './graphQL/graphql.ts';
import { connectDB } from './database/database.ts';

const port = Number(process.env.PORT) || 7000;
const mongodb_uri = process.env.MONGODB_URI;

const startServer = async () => {
    await connectDB(mongodb_uri);

    const server = graphql_server();   
    await server.start();              

    const app = express();

    app.use(express.json())
    app.use('/graphql', expressMiddleware(server)); 
    app.use(cors({
        origin:"*",
        credentials:true
    }))
    app.use(morgan("dev"))

    app.get('/', (req, res) => {
        res.json({ message: "this is homepage" });
    });

    app.listen(port, () => {
        console.log(`🚀 Server running at http://localhost:${port}/graphql`);
    });
};

startServer();
    const server = graphql_server();   
    await server.start();              

    const app = express();

    app.use('/graphql', expressMiddleware(server)); 

    app.get('/', (req, res) => {
        res.json({ message: "this is homepage" });
    });

    app.listen(port, () => {
        console.log(`🚀 Server running at http://localhost:${port}/graphql`);
    });
};

startServer();