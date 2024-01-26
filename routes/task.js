const {createTask, getTask, getTasks, updateTask, deleteTask} = require('../controllers/task')
const isAdmin = require('../isAdmin')

const verifyToken = require('../verifyToken')
const express=require('express')
const router = express.Router()

router.post("/create", verifyToken, createTask)
router.get("/:id",  getTask)
router.put("/:id", verifyToken,  isAdmin,  updateTask)
router.delete("/:id", verifyToken,  isAdmin,deleteTask)
router.get("/",  getTasks)



module.exports = router