import express from 'express';
import { connectDB } from './db/connectDB.js';
import dotenv from 'dotenv';
import authrouter from './routes/auth.route.js';
const app = express()
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); //allows us to parse incoming requests: req.body

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use("/api/auth", authrouter);

app.listen(PORT, () => {
  connectDB();
  console.log('Server is running on port 3000')
})


