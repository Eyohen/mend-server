const {register, login, admin_login, refetchUser} = require('../controllers/auth')
const isAdmin = require('../isAdmin')

const express=require('express')
const router = express.Router()
const verifyToken = require('../verifyToken')


router.post("/register", verifyToken, isAdmin, register)
router.post("/login",login)
router.post("/adminlogin",admin_login)
router.get("/refetch", refetchUser)


module.exports = router