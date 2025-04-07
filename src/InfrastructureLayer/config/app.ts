import * as dotenv from 'dotenv';
import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import {createServer} from "http";
import {Server} from "socket.io"
import cors from "cors";
import UserRoute from "../router/UserRoute";
import ThreadRoute from "../router/ThreadRoute";
import blogRoute from "../router/NewsAndBlogsRoute";


dotenv.config();


const app = express();

export const httpServer = createServer(app);
const io = new Server(httpServer,{
  cors:{
    origin: "*",
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE']
    
  }
})

app.set("io", io);


io.on("connection" , (socket) => {
   console.log("New user connected")

   socket.on("message" , (message) => {
    console.log(message)
    io.emit("message" , message)
   })

   socket.on("disconnect" , () => {
    console.log("User disconnected")
   })
})



app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "default-secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/server", (req, res) => {
  res.status(200).json({ message: "Server is running! 🟢" }); 
});

app.use("/user", UserRoute);
app.use("/thread", ThreadRoute);
app.use("/blog", blogRoute);
// app.use("/agent", agentRoute);

export default app;
