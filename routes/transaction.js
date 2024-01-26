const {createTransaction, getTransaction, getTransactions, updateTransaction, deleteTransaction} = require('../controllers/transaction')

const verifyToken = require('../verifyToken')
const express=require('express')
const router = express.Router()

router.post("/create", verifyToken, createTransaction)
router.get("/:id", verifyToken, getTransaction)
router.put("/:id", verifyToken ,updateTransaction)
router.delete("/:id", verifyToken , deleteTransaction)
router.get("/",  getTransactions)



module.exports = router