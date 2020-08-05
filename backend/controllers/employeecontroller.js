const express =require("express")
var router =express.Router()
var ObjectId = require('mongoose').Types.ObjectId

var {Employee} = require('../models/employee')


router.get('/',(req,res)=>{
    Employee.find((err,docs)=>{
    if(!err){
        res.send(docs)
    }
    else{
        console.log('error to retrive employes:',JSON.stringify(err,undefined,2))
    }
    })

})

router.post('/',(req,res)=>{
var emp = new Employee({
    name:req.body.name,
    age:req.body.age,
    gender:req.body.gender,
    location:req.body.location
})
emp.save((err,doc)=>{
    if(!err){
        res.send(doc)
    }
    else{
        console.log('error in employee save:',JSON.stringify(err,undefined,2))
    }
})
})


module.exports=router