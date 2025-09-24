import express from "express";
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import { connectToDB } from './config/db.config.js';
connectToDB();
import userRouter from './routes/user.route.js';
import { errorMiddleware } from "./middlewares/error.middleware.js";

// default middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// custom routes
app.use('/api/v1/user', userRouter);

// custom middlewares
app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('Welcome, AG Chat Backend');
});

app.listen(process.env.port, () => console.log(`Server is running on port:${process.env.port}`));