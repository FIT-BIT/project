const mongoose=require('mongoose');

const routineSchema=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    trainer: {
        type: ObjectId,
        ref: "User",
        required: true,
    },
    trainee: {
        type: ObjectId,
        ref: "User",
        required: true,
    },
    exercises: [
        {
            exercise: {
                type: ObjectId,
                ref: "Exercise",
            },
            reps: {
                type: Number,
                default: 10
            }
        }
    ],
    set:{
        type: Number,
        default: 1
    }


})

module.exports=mongoose.model('Routine',routineSchema);