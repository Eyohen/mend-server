const express=require('express')

const Task =require('../models/task')
const bcrypt=require('bcrypt')
const verifyToken = require('../verifyToken')



 // CREATE TASK
const createTask = async (req,res)=>{
    try{
        const newTask = new Task(req.body)
        // console.log(req.body)
        const savedTask = await newTask.save()
        
        res.status(200).json(savedTask)
    }
    catch(err){
        console.log(err.message)
        res.status(500).json({message:"Task not created"})
    }
     
}


//UPDATE
const updateTask = async (req,res)=>{
    try{
        if(req.body.password){
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hashSync(req.body.password,salt)
        }
        console.log(req.body)
        const updatedUser=await Task.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedUser)

    }
    catch(err){
        res.status(500).json(err)
    }
}


//DELETE
const deleteTask = async (req,res)=>{
    try{
        // Check if the authenticated user has the required role (isAdmin middleware already applied)
    if (req.user.role !== "admin") {
        console.log(req.user.role)
        return res.status(403).json({ message: 'Permission denied. Admin access required.' });
        
      
      }

      await Task.findByIdAndDelete(req.params.id)
    
      res.status(200).json("Task has been deleted!")


      

    }
    catch(err){
        res.status(500).json(err)
    }
}

//GET USERS
const getTasks = async (req,res)=>{
    const query=req.query
    
    try{
        const searchFilter={
            title:{$regex:query.search, $options:"i"}
        }
        const users = await Task.find(query.search?searchFilter:null)
        res.status(200).json(users)
    }
    catch(err){
        res.status(500).json(err)
    }
}


//GET USER
// const getTask = async (req,res)=>{
//     try{
//         const user=await Task.findById(req.params.id)
//         const {password,...info}=user._doc
//         res.status(200).json(info)
//     }
//     catch(err){
//         res.status(500).json(err)
//     }
// }

const getTask = async (req,res)=>{
 
    try{
        const task = await Task.findById(req.params.id)
        res.status(200).json(task) 
    }
    catch(err){
        res.status(500).json(err)
    }
}


module.exports= {createTask, getTask, getTasks, deleteTask, updateTask}