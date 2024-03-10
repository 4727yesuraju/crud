import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    empname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    salary:{
			type: Number,
			required: true,
    }
},{timestamps:true})

const Emp = mongoose.model("User",userSchema);

export default Emp;