const express = require('express')
const app = express()
require('dotenv').config()
 app.use(express.json())
const PORT = process.env.PORT 
app.listen(PORT,(req,res)=>
{
    // res.send("Server Ready for accepting request")
    console.log(`server is running at port ${PORT}`)
})

const blogRoutes = require('./routes/route')
app.use("/api/v1",blogRoutes)
app.use('/',(req,res)=>
{
    res.send("Hello I am Jay Thakkar")
})
const dbCon = require('./config/database')
dbCon()