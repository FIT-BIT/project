const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    ifTrainer: {
        type: Boolean,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    medicalHistory: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports=mongoose.model('Users',userSchema);