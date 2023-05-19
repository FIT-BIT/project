const mongoose=require('mongoose');

const routineSchema=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    user: {
        type: ObjectId,
        ref: "User",
        required: true,
    },
    products: [
    {
        product: {
            type: ObjectId,
            ref: "Product",
        },
        name: {
            type: String,
        }
    }
    ]
})

module.exports=mongoose.model('Routine',routineSchema);