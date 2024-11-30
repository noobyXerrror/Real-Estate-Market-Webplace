import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email :{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default: "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=is&k=20&c=wS_-GzatiBzUqrY5WLcrjTaIAfaHNspLGP_DWBVcLys=",
    },

},
{
    timestamps: true
}
);

const User = mongoose.model('User' , userSchema); 

export default User;
