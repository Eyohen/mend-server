const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    client:{
        type:String,
        required:true,  
    },
    work:{
        type:String,
        required:true,  
    },
    date:{
        type:Date,
        required:true,
 
    },
    dueDate:{
        type:Date,
        required:false
    },
    amount:{
        type:String,
        required:false
    },
    status:{
        type:String,
        enum:['not-done','pending','completed'],
        default:'pending',
    },
    priority:{
        type:String,
        enum:['high','medium','low'],
        default:'low'
      },
    customerphone:{
        type:Number
    },
    pickupstatus:{
        type:String,
        enum:['not-ready','ready','picked-up'],
        default:'not-ready',
    },
    tailor:{
        type:String,
        
    }

},{timestamps:true})

module.exports=mongoose.model("Task", TaskSchema)