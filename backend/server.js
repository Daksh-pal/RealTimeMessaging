import  express  from 'express';
import authRoutes from "./routes/authRoutes.js"
import dotenv from 'dotenv';
import connectToMongoDB from './db/connectToMongoDB.js';
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/auth',authRoutes)

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log("Server Open")
})