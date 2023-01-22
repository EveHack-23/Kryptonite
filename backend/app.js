const express=require('express');
const mongoose=require('mongoose');
const toolRouter=require("./router/tools");
const labourRouter=require("./router/labour");
const rentRouter=require("./router/rent");
const connectRouter=require("./router/connect");
const authRouter=require("./router/auth");
const app=express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

mongoose.connect("mongodb+srv://mighty:qwertyuiop@cluster0.ngqidrs.mongodb.net/Farmers?retryWrites=true&w=majority")
.then(function(){console.log("is connected")}).catch(function(err){
    console.log(err)
});

app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000/chat",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});



app.use("/tools",toolRouter);
app.use("/labour",labourRouter);
app.use("/rent",rentRouter);
app.use("/connection",connectRouter);
app.use("/auth",authRouter);

app.listen(5500,function(){
    console.log("successfully connected");
});