const mongoose=require('mongoose');

const exerciseTypeSchema=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name: {
        type: ObjectId,
        required: true,
    },
    exercise: {
        type: ObjectId,
        ref: "Exercise",
        required: true,
    },
})

module.exports=mongoose.model('ExerciseType',exerciseTypeSchema);