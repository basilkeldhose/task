const express =require('express')
const bodyparser=require("body-parser")
const cors =require('cors')
const {mongoose} =require('./db')
var employeecontroller =require('./controllers/employeecontroller')


var app =express()
app.use(bodyparser.json())

app.use(cors());
app.listen(3000,()=>{console.log('Server start at port:3000')})



app.use('/employees',employeecontroller)