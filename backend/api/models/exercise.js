const mongoose=require('mongoose');

const exerciseSchema=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name: {
        type: ObjectId,
        required: true,
    },
    image: {
        type: ObjectId,
        required: true,
    },
    
})

module.exports=mongoose.model('Exercise',exerciseSchema);