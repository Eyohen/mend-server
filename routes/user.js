const {getUser, getUsers, updateUser, deleteUser} = require('../controllers/user')
const isAdmin = require('../isAdmin')

const verifyToken = require('../verifyToken')
const express=require('express')
const router = express.Router()


router.get("/:id", verifyToken, getUser)
router.put("/:id", verifyToken ,updateUser)
router.delete("/:id", verifyToken , isAdmin, deleteUser)
router.get("/",  getUsers)



module.exports = router