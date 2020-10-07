const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const PORT = 3001;
const URL = `"http://localhost:${PORT}/"`;
const CONNECTION_STRING = "mongodb+srv://root:guayerd@cluster0.elmbs.mongodb.net/guayerd-bikes?retryWrites=true&w=majority";
 
//////////////////// Aplico Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("short"));

//Ping
app.get('/', function (req, res) {
    res.status(200).send({ message: "Server Express Up & Running" });
})








//////////////////// Ahora que tengo todo definido y creado, levanto el servicio escuchando peticiones en el puerto
/* app.listen(PORT, function () {
    console.log(`Guayerd Bikes running on PORT: ${PORT}\n${URL}\n`);
  });
 */

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