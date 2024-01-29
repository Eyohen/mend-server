const mongoose = require('mongoose')

const ReceiptSchema = new mongoose.Schema({

    email:{
        type:String,
        required:false,  
    },
    text:{
        type:String,
        required: false
    },
    from:{
        type:String,
        required:false,  
    },
    customer:{
        type:String,
        required:false
    },
    price:{
        type:String,
        required:false
    },
    medium:{
        type:String,
        required:false
    },
    sewing:{
        type:String,
        required:false
    },
    alteration:{
        type:String,
        required:false
    },
    advanced:{
        type:String,
        required:false
    },
    date:{
        type:String,
        required:false
    },
    pickup:{
        type:Date,
        required:false
    }
   
   

},{timestamps:true})

module.exports=mongoose.model("Receipt", ReceiptSchema)