import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    name:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'User'
    },
    orderItems:[{
       name:{type:String,required:true},
       qty:{type:Number,required:true},
       image:{type:String,required:true},
       price:{type:Number,required:true},
       product:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'Product'}
    }],
    shippingAddress:{
       address:{type:String,required:true},
       city:{type:String,required:true},
       postalCode:{type:Number,required:true},
       country:{type:String,required:ture}
    },
    paymentMethod:{
       type:String,required:true
    },
    
})

const User = mpngoose.model('Order',userSchema)

export default Order