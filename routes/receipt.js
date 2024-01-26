const {sendMail, getMails, deleteMail} = require('../controllers/receipt')

const verifyToken = require('../verifyToken')
const express=require('express')
const router = express.Router()


router.post("/send", sendMail)
// router.put("/:id", verifyToken ,updateUser)
router.delete("/:id", verifyToken , deleteMail)
router.get("/",  getMails)

module.exports = router
