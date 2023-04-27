const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const { Server } = require("socket.io");
const { createServer } = require("http");
const moment = require("moment");
const { date_time_format } = require("./utils/Utils");

dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server, { /* options */ });

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(cors());

// Error handler
/**
 * errorHandler
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const errorHandler = (err, req, res, next) => {
    const statusCode = err?.code || err?.status || 500;
  
    return res.status(statusCode).json({
      code: statusCode,
      message: err?.message || "Error",
    });
};
app.use(errorHandler);

io.on('connection', (socket) => {
    dev.log(`[${moment().format(date_time_format[0])}] client connected : ${socket.id}`)
    
    //TODO: Init Event Listeners
    
    // use log middleware
    if(config.inDev){
        socket.use(([event, ...args], next) => {
        dev.log(`[${moment().format(date_time_format[0])}] ${event} : ${socket.id}`)
        next();
        });
    }        

    socket.on('ping',() => {
        socket.emit('pong', {
            message : "pong!"
        })
    })

    socket.on('disconnect', ()=> {
        let room_id = socket.hasOwnProperty('roomId') ?  socket.roomId : 'unknown'
        dev.log(`[${moment().format(date_time_format[0])}] client disconnected : ${socket.id} from room ${room_id}`)
        
    })

    // event listeners have been initialized and ready to go
    socket.emit('ready', {
        message : "ready to go",
        mySocketId : socket.id
    })  
})

const PORT = process.env.PORT || 2001;
server.listen(PORT, ()=> {
    const PORT = process.env.PORT || 2001;
    console.log(`server running on port ${PORT}...`)
    console.log(moment().format(date_time_format[0]))
})


//connect mongodb atlas
const mongo_uri = process.env.MONGODB_URI;
mongoose.Promise = global.Promise;
mongoose.connect(
    mongo_uri,
    { useNewUrlParser: true },
).then((res) => console.log('db connection established'))
.catch(err => console.log(err));

//mongodb error handler
mongoose.connection.on("error", (err) => {
  console.error("MongoDB error", err);
});