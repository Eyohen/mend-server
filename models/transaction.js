const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,  
    },
    amount:{
        type:String,
        required:true,  
    },
    date:{
        type:Date,
        required:true,
 
    },
    status:{
        type:String,
        required:false,
    },

},{timestamps:true})

module.exports=mongoose.model("Transaction", TransactionSchema)