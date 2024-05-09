const express=require("express")
const router=express.Router()
const tryCatch = require("../middlewares/tryCatch")
const student = require("../controller/studentController")


router.post("/register",tryCatch(student.register))

router.post("/login",tryCatch(student.login))


module.exports = router