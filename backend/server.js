import  express  from 'express';
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from './routes/messageRoutes.js'
import dotenv from 'dotenv';
import connectToMongoDB from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';
dotenv.config();
const app = express();


app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 3000;


// Routing
app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log("Server Open")
})