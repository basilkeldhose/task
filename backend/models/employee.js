const mongoose =require('mongoose')

var Employee =mongoose.model('Employee',{
    name:{
        type:String
    },
    age:{
        type:String
    },
    gender:{
        type:String
    },
    location:{
        type:String
    }
})


module.exports={
    Employee
}