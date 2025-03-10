const express=require("express")
const multer=require("multer");
const cors=require("cors");
const app=express(); //devuelve un objeto express este es nuestro serviodr
const controllers=require("./controllers");
//const baseDatos=require("/database")
//settings
app.set("port",process.env.PORT||4000);//estableciendo el puerto

// middlewares son procesos que se ejecutan intermedio entre el backend y el frontend
const reciv=multer({
    dest:"reciv"
});

app.use(cors());
app.use(express.json());
app.get("/user/:UserId", controllers.getUserById);
app.post("/registro", controllers.registro)
app.post("/login",controllers.login);
app.post("/archivo",reciv.single("datos"),controllers.archivoUser)
//routes rutas del servidor
//app.use("/appi/users",require("./routes/users"));

module.exports=app;