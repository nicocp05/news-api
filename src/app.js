import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import newsRouter from './routes/news.route.js';
import { dbConnection } from './config/database.js';


const app = express();

// Database connection
dbConnection();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/news', newsRouter);


export default app;