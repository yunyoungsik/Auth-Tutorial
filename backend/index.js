import express from 'express';
import dotenv from "dotenv"
import { connectDB } from './db/connectDB.js';

dotenv.config();

import authRoutes from './routes/auth.route.js'

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json())

app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port:", PORT)
})