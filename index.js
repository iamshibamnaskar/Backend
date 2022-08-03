const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const userRouter = require('./ROUTERS/UserRouter')
const postRouter = require('./ROUTERS/PostRoute')
const mongoose = require('mongoose')
var MONGODB_URI = 'mongodb+srv://SHIBAM:Shibam%402000@cluster0.kg8r2.mongodb.net/test'
var cors = require('cors')

// app.get("/", (req, res) => {
//     res.send("Hellow World")
// });
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/',userRouter,postRouter);




app.listen(process.env.PORT || 8000, () => {
    //Connect to MongoDB
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Mongo DB connected successfully!");
        }
    });
    console.log(`Listening at port ${process.env.PORT || 8000}`);
});
