const express = require("express");
const app = express();
const PORT = 3000;
const userController = require("./Controller/userController");


app.use("/",userController.addItems);
app.use("/",userController.getAllItems);
app.use("/",userController.getItem);
app.use("/",userController.removeItem);
app.use("/",userController.updateItem);

app.listen(PORT, ()=>
{
    console.log("Server Connected...");
})