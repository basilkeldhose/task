const mongoose=require('mongoose') 
mongoose.connect("mongodb://localhost:27017/Task",(err)=>{
    if(!err){
        console.log("mongodb connected sucessfully.............!")
    }
    else{
        console.log("error in db connection:",JSON.stringify(err,undefined,2))
    }
})

module.exports=mongoose