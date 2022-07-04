import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import newsRouter from './routes/news.route.js';
import { dbConnection } from './config/database.js';


const app = express();

// Database connection
dbConnection();

// Static files
app.use( express.static('public') );

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/news', newsRouter);


export default app;