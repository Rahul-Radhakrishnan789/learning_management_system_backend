const express=require('express')
const mongoose=require('mongoose')
const app=express()

const morgan = require("morgan")
const path = require('path')
const port = 3000
const cors=require("cors")
const dotenv=require ("dotenv")


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(morgan("dev"))
app.use('uploads', express.static(path.join(__dirname, 'uploads')))  
dotenv.config()



async function main() {
  await mongoose.connect("mongodb://localhost:27017/studentmanagement");
  console.log("db connected");
}
main().catch((err) => console.log(err))




const studentRoute=require("./routes/studentRoutes")
app.use("/api",studentRoute)

// const organizerRoute=require("./routes/organizerRoute")
// app.use("/api",organizerRoute)

// const adminRoute=require("./routes/adminRoute")
// app.use("/api",adminRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })