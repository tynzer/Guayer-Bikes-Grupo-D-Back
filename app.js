const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const PORT = 3001;
const URL = `"http://localhost:${PORT}/"`;
const CONNECTION_STRING = "mongodb+srv://root:guayerd@cluster0.elmbs.mongodb.net/guayerd-bikes?retryWrites=true&w=majority";

const User = require("./models/Users")

//////////////////// Aplico Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("short"));

/* //Ping
app.get('/', function (req, res) {
    res.status(200).send({ message: "Server Express Up & Running" });
})
 */

app.post("/userData", function (req, res) {

    const user = new User({
        token: req.body.token,
        name: req.body.name,
        email: req.body.email,
        sendEmail: req.body.sendEmail,
        visible: true
    });
    console.log(user)
    user.save().then(
        function (userSaved) {
            res.status(201).send({ user: userSaved })
        })
        .catch(
            function (error) {
                res.status(500).send({ message: "Error interno, no se pudo guardar" })
            })
})


//Levantar la applicacion luego de realizar la conexion de mongoose a Atlas.
mongoose.connect(CONNECTION_STRING, function (err) {
    if (err) {
        console.error(err.message)
    } else {
        console.log("Conexion establecida");
        app.listen(PORT, function () {
            console.log("Server Express Listening");
        });
    }
})