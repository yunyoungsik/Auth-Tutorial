import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectDB } from './db/connectDB.js';

dotenv.config();

import authRoutes from './routes/auth.route.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use(express.json()); // allows us to parse incoming request:req.body
app.use(cookieParser()); // allows use to pare incoming cookies

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log('Server is running on port:', PORT);
});
