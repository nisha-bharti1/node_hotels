const mongoose =require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name:{
        type:string,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    taste:{
        type: String,
        enum:['sweet','spicy','Sour'],
        required:true,
    },
    is_drink:{
        type:Boolean,
        default: false,
    },
    ingredients:{
        type:[string],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0,
    }

})

const MenuItem = moongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;