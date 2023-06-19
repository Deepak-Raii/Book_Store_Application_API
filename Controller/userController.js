const express = require("express");
const app = express();
const userModel = require("../Model/userModel");
app.use(express.json());

// localhost:3000/api/items
// Add Items

const addItems = app.post("/api/items",async(req,res)=>{
    const data = await new userModel({
        item:req.body.item,
    })
    const item = await userModel.findOne({item:req.body.item});
    if(item){
        res.send("Item already exist");
    }
    else
    {
        const save = await data.save();
        res.send(save);
    }
});

// localhost:3000/api/items
// Get all The Items, Here I use pagination, we can see 3 item at a time...

const getAllItems = app.get("/api/items",async(req,res)=>{
    const data  = await userModel.aggregate([{$skip:0},{$limit:3}]);
    res.send(data);
})

// localhost:3000/api/items/ Enter the id
// Get the item using id...

const getItem = app.get("/api/items/:_id",async(req,res)=>{
    const data  = await userModel.findOne({_id:req.params._id});
    if(data)
    {
        res.send(data)
    }
    else{
        res.send("Data not Found...");
    }
    
});

// localhost:3000/api/items/ Enter the id
// Remove Item by id

const removeItem = app.delete("/api/items/:_id",async(req,res)=>{
    const data = await userModel.findByIdAndDelete({_id:req.params._id});
    if(data)
    {
        res.send("Data Deleted");
    }
    else
    {
        res.send("Data Not Found...");
    }
});

// localhost:3000/api/items/  Enter the id 
// update the item by id

const updateItem = app.put("/api/items/:_id",async(req,res)=>{
    const data = await userModel.findByIdAndUpdate({_id:req.params._id},{item:"Changed.."},{new:true});
    if(data)
    {
        res.send(data);
    }

    else
    {
        res.send("Data not Found...");
    }
})

module.exports = {addItems,getAllItems,getItem,removeItem,updateItem};