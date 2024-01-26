const express=require('express')

const Transaction =require('../models/transaction')
const bcrypt=require('bcrypt')
const verifyToken = require('../verifyToken')



 // CREATE Transaction
const createTransaction = async (req,res)=>{
    try{
        const newTransaction = new Transaction(req.body)
        // console.log(req.body)
        const savedTransaction = await newTransaction.save()
        
        res.status(200).json(savedTransaction)
    }
    catch(err){
        console.log(err.message)
        res.status(500).json({message:"Transaction not created"})
    }
     
}


//UPDATE Transaction
const updateTransaction = async (req,res)=>{
    try{
        if(req.body.password){
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hashSync(req.body.password,salt)
        }
        console.log(req.body)
        const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedTransaction)

    }
    catch(err){
        res.status(500).json(err)
    }
}


//DELETE Transaction
const deleteTransaction = async (req,res)=>{
    try{
        await Transaction.findByIdAndDelete(req.params.id)
        // await Apartment.deleteMany({userId:req.params.id})
        // await Comment.deleteMany({userId:req.params.id})
        res.status(200).json("Transaction has been deleted!")

    }
    catch(err){
        res.status(500).json(err)
    }
}

//GET Transactions
const getTransactions = async (req,res)=>{
    const query=req.query
    
    try{
        const searchFilter={
            title:{$regex:query.search, $options:"i"}
        }
        const users = await Transaction.find(query.search?searchFilter:null)
        res.status(200).json(users)
    }
    catch(err){
        res.status(500).json(err)
    }
}


//GET Transaction
const getTransaction = async (req,res)=>{
    try{
        const user=await Transaction.findById(req.params.id)
        const {password,...info}=user._doc
        res.status(200).json(info)
    }
    catch(err){
        res.status(500).json(err)
    }
}


module.exports= {createTransaction, getTransaction, getTransactions, deleteTransaction, updateTransaction}