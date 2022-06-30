import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import newsRouter from './routes/news.route.js';


const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/news', newsRouter);


export default app;