const Todomodel = require("../models/TodoModel");

module.exports.getToDo = async (req,res)=>{
    const toDo = await Todomodel.find()
    res.send(toDo);
}

module.exports.saveToDO = async (req,res)=>{
    const {text}=req.body
    Todomodel.create({text}).then((data)=>{
        console.log("Added Successfully");
        console.log(data);
        res.send(data)
    })
    
}

module.exports.updateToDo = async (req,res)=>{
    const {_id, text} = req.body
    Todomodel
    .findByIdAndUpdate(_id, {text})
    .then(()=>res.send("updated successfully"))
    .catch((err)=> console.log(err))
}

module.exports.deleteToDo = async (req,res)=>{
    const {_id} = req.body
    Todomodel
    .findByIdAndDelete(_id)
    .then(()=>res.send("deleted successfully"))
    .catch((err)=> console.log(err))
}