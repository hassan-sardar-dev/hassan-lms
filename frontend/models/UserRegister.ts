import mongoose, { Schema } from "mongoose";
const UserRegisterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value: string) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
            },
        },
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    confirmPassword: {
        type: String,
        required: true,
        minlength: 8,
    },
    terms: {
        type: Boolean,
        required: true,
        default: false,
    },
}, {
    timestamps: true,
});

export default mongoose.models.UserRegister || mongoose.model("UserRegister", UserRegisterSchema);
